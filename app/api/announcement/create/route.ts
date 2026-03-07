import { AnnouncementStatus } from "@/enum/enum";
import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { Announcement } from "@/models/announcement";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { text } = body;
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
          message: "Announcement text is required!",
        },
        {
          status: 400,
        },
      );
    }

    const payload = {
      text: text.trim(),
      user: authUser.user_id,
      status: AnnouncementStatus.Pending,
      userId: authUser.user_id,
    };

    const request = await Announcement.create(payload);

    await User.findByIdAndUpdate(authUser.user_id, {
      $push: {
        announcement: {
          announcementId: request._id,
        },
      },
    });

    return NextResponse.json(
      {
        message: "Announcement created successfully",
        data: request,
      },
      {
        status: 201,
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
          message: "Something went wrong",
        },
        {
          status: 500,
        },
      );
    }
  }
};
