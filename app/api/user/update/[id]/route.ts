import { User } from "@/models/user";
import { connectDB } from "@/mongodb/connectDB";
import { NextResponse } from "next/server";

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  const body = await req.json();
  const searchParams = await params;
  const id = searchParams.id;
  const { name, address, gender } = body;

  try {
    await connectDB();

    const existingUser = await User.findOne({ _id: id });

    if (!existingUser) {
      return NextResponse.json({
        message: "User not found!",
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      {
        _id: id,
        $or: [
          {
            name: {
              $ne: name,
            },
          },
          {
            address: {
              $ne: address,
            },
          },
          {
            gender: {
              $ne: gender,
            },
          },
        ],
      },
      {
        $set: {
          name: name,
          address: address,
          gender: gender,
        },
      },
      {
        new: true,
      },
    );

    if (!updatedUser) {
      return NextResponse.json(
        {
          message: "User not updated!",
        },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json(
      {
        message: "User updated successfully!",
        user: updatedUser,
      },
      {
        status: 200,
      },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        },
      );
    } else {
      return NextResponse.json(
        {
          message: "Something went wrong!",
        },
        {
          status: 400,
        },
      );
    }
  }
};
