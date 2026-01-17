import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const syncUser = mutation({
  args: {
    // We pass these in from the client to keep them fresh
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Called syncUser without authentication");
    }

    // 1. Check if user exists
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier),
      )
      .first();

    if (user !== null) {
      // 2. User exists: Update them (in case they changed their Clerk avatar/name)
      // We check if anything actually changed to avoid unnecessary writes
      if (
        user.name !== args.name ||
        user.email !== args.email ||
        user.imageUrl !== args.imageUrl
      ) {
        await ctx.db.patch(user._id, {
          name: args.name,
          email: args.email,
          imageUrl: args.imageUrl,
        });
      }
      return user._id;
    }

    // 3. User is NEW: Create them with the "Welcome Bonus"
    const newUserId = await ctx.db.insert("users", {
      tokenIdentifier: identity.tokenIdentifier,
      name: args.name ?? "",
      email: args.email ?? "",
      imageUrl: args.imageUrl ?? "",
      credits: 100, // <--- 🎁 GIVE THEM 10 FREE CREDITS HERE
    });

    return newUserId;
  },
});

// Helper: Get the currently logged in user
export const current = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    return await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier),
      )
      .first();
  },
});
