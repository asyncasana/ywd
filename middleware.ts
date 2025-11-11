import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Maintenance Mode Middleware
 *
 * This middleware implements a "Coming Soon" gate for the site during construction.
 *
 * HOW IT WORKS:
 * - Set MAINTENANCE_MODE=1 in environment variables to enable the gate
 * - All visitors are redirected to /coming-soon
 * - Admins can authenticate with Basic Auth (BASIC_AUTH_USER and BASIC_AUTH_PASS)
 * - Once authenticated, a secure cookie is set to bypass future auth prompts
 *
 * TO DISABLE:
 * - Remove or set MAINTENANCE_MODE=0 in your environment variables
 * - Or delete this middleware.ts file entirely
 * - Redeploy to Vercel
 */

const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "1";
const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
const BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS;
const AUTH_COOKIE_NAME = "ywd_auth";

export function middleware(request: NextRequest) {
  // If maintenance mode is disabled, allow all requests
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Always allow public routes and static assets
  if (
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|gif|mp4|webm|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Check if user is already authenticated via cookie
  const authCookie = request.cookies.get(AUTH_COOKIE_NAME);
  if (authCookie?.value === "1") {
    return NextResponse.next();
  }

  // Check for Basic Auth credentials in request headers
  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");

    if (scheme === "Basic" && encoded) {
      const buffer = Buffer.from(encoded, "base64");
      const [username, password] = buffer.toString("utf-8").split(":");

      // Validate credentials
      if (
        BASIC_AUTH_USER &&
        BASIC_AUTH_PASS &&
        username === BASIC_AUTH_USER &&
        password === BASIC_AUTH_PASS
      ) {
        // Set auth cookie and allow access
        const response = NextResponse.next();
        response.cookies.set(AUTH_COOKIE_NAME, "1", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });
        return response;
      } else {
        // Invalid credentials - redirect to coming soon instead of showing error
        const url = request.nextUrl.clone();
        url.pathname = "/coming-soon";
        return NextResponse.redirect(url);
      }
    }
  }

  // Regular visitors without auth header: redirect to coming soon page
  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.redirect(url);
}

/**
 * Matcher configuration
 * Applies middleware to all routes except Next.js internals and static files
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, icon.png, etc (static metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.png|icon.svg|apple-icon.png).*)",
  ],
};
