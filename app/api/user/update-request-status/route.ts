import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { RequestDocument } from "@/models/RequestDocument";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request) => {
  try {
    const body = await req.json();
    const { status, requestId } = body;

    const authUser = await getUserFromToken();

    if (!authUser) {
      return NextResponse.json(
        {
          message: "Unauthorized!",
        },
        {
          status: 401,
        },
      );
    }

    if (authUser && authUser.role !== "admin") {
      return NextResponse.json(
        {
          message: "Unauthorized!",
        },
        {
          status: 401,
        },
      );
    }

    if (!status) {
      return NextResponse.json(
        {
          message: "Status is required!",
        },
        {
          status: 400,
        },
      );
    }

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
      return NextResponse.json(
        { message: "Invalid request ID" },
        { status: 400 },
      );
    }

    const id = new mongoose.Types.ObjectId(requestId);

    const updatedDoc = await RequestDocument.findByIdAndUpdate(
      id,
      {
        status: status,
      },
      {
        new: true,
      },
    );

    if (!updatedDoc) {
      return NextResponse.json(
        {
          message: "Document not found!",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Status updated successfully!",
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
