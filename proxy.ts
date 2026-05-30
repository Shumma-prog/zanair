import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const isLoginPage = req.nextUrl.pathname === "/agent/login";

  // Pass through login page — never redirect it
  if (isLoginPage) return NextResponse.next();

  // Pass through if Supabase not configured (local dev without env vars)
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return NextResponse.next();
  }

  // Check for a Supabase session cookie.
  // Supabase sets cookies named "sb-<project-ref>-auth-token".
  const cookies = req.cookies.getAll();
  const hasSession = cookies.some(
    (c) =>
      (c.name.startsWith("sb-") && c.name.endsWith("-auth-token")) ||
      (c.name.startsWith("sb-") && c.name.includes("-auth-token."))
  );

  if (!hasSession) {
    const loginUrl = new URL("/agent/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/agent/:path*"],
};
