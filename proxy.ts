import { NextRequest, NextResponse } from "next/server";
import { getUserFromToken } from "./lib/auth/getAuthUser";

export const proxy = async (req: NextRequest) => {
  const authUser = await getUserFromToken();

  if (!authUser) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/documents-request/:path*",
    "/documents/:path*",
    "/request-history/:path*",
    "/account/:path*",
  ],
};
