import {getServerSession} from "next-auth";
import {auth} from "@/lib/auth";
import Link from "next/link";
import {signOut} from "next-auth/react";
import LogoutButton from "@/components/LogoutButton";

type SessionData = {
  user: {
    image: string,
    name: string,
    email: string,
  }
}

export default async function LoginComponent() {
  // TODO: Figure out why these types are jank
  const session = await getServerSession<any, SessionData>(auth as any);

  if (session) {
    return (
      <>
        <LogoutButton />
        <Link href="/profile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={session.user?.image} alt={session.user?.name} width={40} height={40}
               className="rounded-full ml-3 shadow-md -mr-1"
          />
        </Link>
      </>
    );
  }

  return (
    <Link href="/api/auth/signin"
          className="btn btn-outline btn-sm px-4 ml-2 btn-white dark:text-gray-300 dark:bg-gray-800"
    >
      Sign in
    </Link>
  );
}
