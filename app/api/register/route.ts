import { User } from "@/models/user";
import { connectDB } from "@/mongodb/connectDB";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { name, email, password, gender, role, confirmPassword } =
    await req.json();

  try {
    await connectDB();

    if (!name || !email || !password || !gender || !role || !confirmPassword) {
      return NextResponse.json(
        {
          message: `All fields are required`,
        },
        {
          status: 400,
        },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          message: "Password must be at least 6 characters long 🙅‍♂️",
        },
        {
          status: 400,
        },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (password !== confirmPassword) {
      return NextResponse.json("Passwords do not match", {
        status: 400,
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists!",
        },
        {
          status: 400,
        },
      );
    }

    const newUser = {
      name,
      email,
      password: hashedPassword,
      gender,
      role,
    };

    await User.create(newUser);

    return NextResponse.json(
      {
        message: "User created successfully 🎉",
        data: {
          ...newUser,
          password: undefined,
        },
      },
      {
        status: 201,
      },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, {
        status: 500,
      });
    } else {
      return NextResponse.json("Something went wrong", {
        status: 500,
      });
    }
  }
};
