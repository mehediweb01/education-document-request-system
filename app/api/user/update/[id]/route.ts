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
  const { name, address, gender, contactNumber, department } = body;

  try {
    await connectDB();

    const existingUser = await User.findOne({ _id: id });

    if (!existingUser) {
      return NextResponse.json({
        message: "User not found!",
      });
    }

    const number = Number(contactNumber);

    if (!number.toString().startsWith("880")) {
      return NextResponse.json(
        {
          message: "Invalid contact number! Contact number must start with 880",
        },
        {
          status: 400,
        },
      );
    }

    if (number.toString().length !== 13) {
      return NextResponse.json(
        {
          message:
            "Invalid contact number! Contact number must be 13 digits long",
        },
        {
          status: 400,
        },
      );
    }

    const updatedUser = await User.findOneAndUpdate(
      {
        _id: id,
        $or: [
          {
            name: {
              $ne: name.trim(),
            },
          },
          {
            address: {
              $ne: address.trim(),
            },
          },
          {
            gender: {
              $ne: gender.trim(),
            },
          },
          {
            department: {
              $ne: department.trim(),
            },
          },
          {
            contactNumber: {
              $ne: number,
            },
          },
        ],
      },
      {
        $set: {
          name: name.trim(),
          address: address.trim(),
          gender: gender.trim(),
          contactNumber: number,
          department: department.trim(),
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
