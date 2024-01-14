import {NextRequest, NextResponse} from "next/server";

import withAuth from "next-auth/middleware";

export function middleware(request: NextRequest) {
  return withAuth(request as any);
}

export const config = {
  matcher: [
    // Disabled because we don't require login to upload scenarios (for now)
    // "/scenarios/upload",
    "/profile"
  ]
};
