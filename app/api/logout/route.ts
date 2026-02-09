import { NextResponse } from "next/server";

export const POST = async () => {
  const response = NextResponse.json(
    {
      message: "Logout successful",
    },
    {
      status: 200,
    },
  );

  response.cookies.delete("token");

  return response;
};
