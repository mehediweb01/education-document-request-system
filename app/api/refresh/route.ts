// app/api/refresh/route.ts
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const redirectPath = searchParams.get("redirect") || "/";

  const refreshToken = (await cookies()).get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET!) as {
      user_id: string;
      role: string;
    };

    const newAccessToken = jwt.sign(
      { user_id: decoded.user_id, role: decoded.role },
      process.env.JWT_SECRET!,
      { expiresIn: "15m" },
    );

    const response = NextResponse.redirect(new URL(redirectPath, req.url));

    response.cookies.set("token", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
