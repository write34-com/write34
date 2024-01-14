'use client';

import {signOut} from "next-auth/react";

/**
 * A button that signs the user out.
 * This exists as a client component because we never need it at build time,
 * but we need interactivity because NextAuth keeps trying to send the user to /scenarios/upload
 * on signout and I don't understand why. Setting callbackUrl seems to do nothing.
 * The fix is just to manually redirect the client after we call signout programmatically...
 * It's jank, but it works.
 * TODO: Figure out how to clean this up. Low priority though.
 */
export default function LogoutButton() {
  const handleSignOut = async () => {
    await signOut({
      redirect: false,
      // This seems to do nothing.
      callbackUrl: '/'
    });

    window.location.href = '/';
  };

  return (
    <button onClick={handleSignOut}
            className="btn btn-outline btn-sm px-3 mx-2 btn-white dark:text-gray-300 dark:bg-gray-800"
    >
      Sign out
    </button>
  );
}