import { RequestDocument } from "@/models/RequestDocument";
import { User } from "@/models/user";
import { connectDB } from "@/mongodb/connectDB";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    // connect db
    await connectDB();

    const body = await req.json();
    const cookie = await cookies();

    const {
      name,
      email,
      studentNumber,
      reg,
      department,
      year,
      session,
      course,
      documentType,
    } = body;

    const token = cookie.get("token")?.value;

    // check if token is valid or exists
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

    // verify token
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
    ) as {
      role: string;
      user_id: string;
    };

    // check if user is student
    if (decoded.role !== "student") {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    if (
      !name ||
      !email ||
      !studentNumber ||
      !reg ||
      !department ||
      !year ||
      !session ||
      !course ||
      !documentType
    ) {
      return NextResponse.json(
        {
          message: "All fields are required!",
        },
        {
          status: 400,
        },
      );
    }

    // check if student number is valid
    if (
      !studentNumber.toString().trim().startsWith("880") ||
      studentNumber.toString().trim().length !== 13
    ) {
      return NextResponse.json(
        {
          message: "Invalid student number! Student number must start with 880",
        },
        {
          status: 400,
        },
      );
    }

    if (reg.toString().trim().length !== 10) {
      return NextResponse.json(
        {
          message:
            "Invalid registration number! Registration number must be 10 digits",
        },
        {
          status: 400,
        },
      );
    }

    // create a new request
    const newRequest = {
      name: name.trim(),
      email: email.trim(),
      studentNumber: Number(studentNumber) as number,
      reg: Number(reg) as number,
      department: department.trim(),
      year: Number(year) as number,
      session: session.trim(),
      course: course.trim(),
      documentType,
    };

    // save request
    const request = await RequestDocument.create(newRequest);

    await User.findByIdAndUpdate(decoded.user_id, {
      $push: {
        requests: {
          requestId: request._id,
        },
      },
    });

    return NextResponse.json(
      {
        message: "Document request created successfully",
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
