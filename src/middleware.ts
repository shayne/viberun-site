import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent")?.toLowerCase() ?? "";
  if (ua.includes("curl")) {
    return NextResponse.redirect(
      "https://raw.githubusercontent.com/shayne/viberun/main/install.sh",
      302,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
