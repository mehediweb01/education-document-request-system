import { User } from "@/models/user";
import { connectDB } from "@/mongodb/connectDB";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  try {
    await connectDB();

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "All fields are required!",
        },
        {
          status: 400,
        },
      );
    }

    // find a user
    const user = await User.findOne({ email });

    if (user) {
      const pass = await bcrypt.compare(password, user.password);

      if (password.length < 6) {
        return NextResponse.json(
          {
            message: "Password must be at least 6 characters long!",
          },
          {
            status: 400,
          },
        );
      }

      if (!pass) {
        return NextResponse.json(
          {
            message: "Authentication failed!",
          },
          {
            status: 401,
          },
        );
      }

      // jwt
      const accessToken = await jwt.sign(
        {
          user_id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "15m", // 15 minutes
        },
      );

      const refreshToken = await jwt.sign(
        {
          user_id: user._id,
          role: user.role,
        },
        process.env.JWT_REFRESH_SECRET as string,
        {
          expiresIn: "7d", // 7 days
        },
      );

      const response = NextResponse.json(
        {
          message: "User logged in successful",
          user: {
            email: user.email,
            role: user.role,
          },
        },
        {
          status: 200,
        },
      );

      response.cookies.set("token", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 15 * 60, // 15 minutes
        path: "/",
      });

      response.cookies.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60, // 7 days
        path: "/",
      });

      return response;
    } else {
      return NextResponse.json(
        {
          message: "User not found!",
        },
        {
          status: 404,
        },
      );
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
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
