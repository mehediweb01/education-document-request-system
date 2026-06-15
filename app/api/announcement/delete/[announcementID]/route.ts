import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { Announcement } from "@/models/announcement";
import { connectDB } from "@/mongodb/connectDB";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ announcementID: string }> },
) => {
  try {
    await connectDB();

    const authUser = await getUserFromToken();
    const id = new mongoose.Types.ObjectId((await params).announcementID);

    if (!authUser) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    if (authUser && authUser.role !== "admin") {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    if (!id) {
      return NextResponse.json(
        {
          message: "Announcement not found",
        },
        {
          status: 404,
        },
      );
    }

    await Announcement.findByIdAndDelete(
      { _id: id },
      {
        new: true,
      },
    );

    return NextResponse.json(
      {
        message: "Announcement delete successfully",
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
