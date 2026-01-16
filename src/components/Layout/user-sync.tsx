'use client';

import { useUser } from '@clerk/nextjs';
import { useMutation, useConvexAuth } from 'convex/react'; // <--- Add useConvexAuth
import { api } from '../../../convex/_generated/api';
import { useEffect } from 'react';

export default function UserSync() {
  const { user } = useUser();
  const { isAuthenticated } = useConvexAuth(); // <--- Check this state
  const syncUser = useMutation(api.users.syncUser);

  useEffect(() => {
    // Only run if we have the User data AND Convex is authenticated
    if (!user || !isAuthenticated) return;

    const name = user.fullName;
    const email = user.primaryEmailAddress?.emailAddress;
    const imageUrl = user.imageUrl ?? '';

    // Skip syncing if required fields are missing
    if (!name || !email) return;

    syncUser({
      name,
      email,
      imageUrl,
    }).catch((err) => {
      console.error('Failed to sync user:', err);
    });
  }, [user, isAuthenticated, syncUser]); // <--- Add isAuthenticated to dependency array

  return null;
}
