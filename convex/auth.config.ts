const clerkIssuerUrl = process.env.CLERK_ISSUER_URL!;

if (!clerkIssuerUrl) {
  throw new Error('Missing CLERK_ISSUER_URL environment variable');
}

export default {
  providers: [
    {
      domain: clerkIssuerUrl,
      applicationID: 'convex',
    },
  ],
};
