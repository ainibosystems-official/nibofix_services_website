import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Allow static files (VERY IMPORTANT)
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/images") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".jpeg") ||
    url.pathname.endsWith(".webp")
  ) {
    return NextResponse.next();
  }

  // Allow root
  if (url.pathname === "/") {
    return NextResponse.next();
  }

  // EVERYTHING ELSE → redirect to landing
  return NextResponse.redirect(new URL("/", request.url));
}
