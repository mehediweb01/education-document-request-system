import { Status } from "@/enum/enum";
import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { Pdf } from "@/models/pdf";
import { RequestDocument } from "@/models/RequestDocument";
import { User } from "@/models/user";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export const POST = async (req: Request) => {
  try {
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

    const data = await req.formData();

    const files = data.getAll("files") as File[];
    const email = data.get("email") as string;
    const requestDocId = data.get("requestDocId") as string;

    if (files.length === 0) {
      return NextResponse.json(
        {
          message: "No files uploaded",
        },
        {
          status: 400,
        },
      );
    }

    const uploadDir = path.join(process.cwd(), "public/uploads/pdf");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filePath = path.join(uploadDir, file.name);
      fs.writeFileSync(filePath, buffer);
    }

    // upload to db
    const user = await User.findOne({ email: email }).lean();

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found!",
        },
        {
          status: 404,
        },
      );
    }

    const payload = {
      names: files.map((file) => file.name),
      fileUrl: files.map((file) => `/uploads/pdf/${file.name}`),
      userId: user._id,
    };

    const pdf = await Pdf.create(payload);

    if (!pdf) {
      return NextResponse.json(
        {
          message: "Something went wrong",
        },
        {
          status: 500,
        },
      );
    }

    const requestDoc = await RequestDocument.findById({ _id: requestDocId });

    if (!requestDoc) {
      return NextResponse.json(
        {
          message: "Request document not found",
        },
        {
          status: 404,
        },
      );
    }

    if (requestDoc.pdf) {
      return NextResponse.json(
        {
          message: "Request document already has a pdf",
        },
        {
          status: 400,
        },
      );
    }

    requestDoc.pdf = pdf._id;
    requestDoc.status = Status.Completed;
    await requestDoc.save();

    return NextResponse.json(
      {
        message: "Documents uploaded successfully",
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
