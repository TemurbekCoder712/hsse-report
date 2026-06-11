import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  // Bypassing all auth checks for local-only operation
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
