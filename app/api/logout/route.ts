import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    const response = NextResponse.json(
      {
        message: "Logout successful",
      },
      {
        status: 200,
      },
    );

    response.cookies.delete("token");
    response.cookies.delete("refreshToken");

    return response;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        {
          message: err.message,
        },
        {
          status: 500,
        },
      );
    } else {
      return NextResponse.json(
        {
          message: "Something went wrong",
        },
        {
          status: 500,
        },
      );
    }
  }
};
