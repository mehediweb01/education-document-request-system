import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    const user = await User.findOne({ _id: decoded.user_id }).select([
      "-password",
    ]);

    return NextResponse.json(
      {
        user,
      },
      {
        status: 200,
      },
    );
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
          message: "Something went wrong!",
        },
        {
          status: 500,
        },
      );
    }
  }
};
