import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    credits: v.number(),
  })
    .index('by_token', ['tokenIdentifier'])
    .index('by_email', ['email']),
});
