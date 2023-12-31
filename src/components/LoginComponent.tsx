import {getServerSession} from "next-auth";
import {auth} from "@/lib/auth";
import Link from "next/link";

type SessionData = {
  user: {
    image: string,
    name: string,
    email: string,
  }
}

export default async function LoginComponent() {
  // TODO: Figure out why these types are jank
  const session = process.env.IS_BUILDING_SITE ? undefined : await getServerSession<any, SessionData>(auth as any);

  if (session) {
    return (
      <>
        {/*<p>Welcome, {session.user?.name}!</p>*/}
        <Link href="/api/auth/signout"
              className="btn btn-outline btn-sm px-3 mx-2 btn-white dark:text-gray-300 dark:bg-gray-800"
        >
          Sign out
        </Link>
        <img src={session.user?.image} alt={session.user?.name} width={40} height={40}
             className="rounded-full ml-3 shadow-md -mr-1"
        />
      </>
    );
  }

  return (
    <>
      {/*<p>You are not signed in</p>*/}
      <Link href="/api/auth/signin"
            className="btn btn-outline btn-sm px-4 ml-2 btn-white dark:text-gray-300 dark:bg-gray-800"
      >
        Sign in
      </Link>
    </>
  );
}
