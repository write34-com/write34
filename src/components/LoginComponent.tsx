import { signIn, signOut } from "next-auth/react";
import {getServerSession} from "next-auth";
import {auth} from "@/lib/auth";
import Link from "next/link";

export default async function LoginComponent() {
  // TODO: Figure out why these types are jank
  const session = await getServerSession(auth as any);

  if (session) {
    return (
      <>
        {/*<p>Welcome, {session.user?.name}!</p>*/}
        <Link href="/api/auth/signout">Sign out</Link>
      </>
    );
  }

  return (
    <>
      {/*<p>You are not signed in</p>*/}
      <Link href="/api/auth/signin">Sign in</Link>
    </>
  );
}
