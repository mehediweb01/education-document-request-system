import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { Announcement } from "@/models/announcement";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request) => {
  try {
    const body = await req.json();
    const { text, announcementId } = body;

    const authUser = await getUserFromToken();

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

    if (!text.trim()) {
      return NextResponse.json(
        {
          message: "All fields are required!",
        },
        {
          status: 400,
        },
      );
    }

    await Announcement.findOneAndUpdate(
      { _id: announcementId },
      {
        text: text.trim(),
      },
    );

    return NextResponse.json(
      {
        message: "Announcement updated successfully!",
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
