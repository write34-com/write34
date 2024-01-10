import {NextRequest, NextResponse} from "next/server";

import withAuth from "next-auth/middleware";

export function middleware(request: NextRequest) {
  return withAuth(request as any);
}

export const config = { matcher: ["/scenarios/upload", "/profile"] };
