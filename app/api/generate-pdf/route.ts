import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts } from "pdf-lib";

export const runtime = "nodejs";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    const pdfDoc = await PDFDocument.create();
    let page = pdfDoc.addPage([595, 842]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    let y = 800;

    page.drawText(`DOCUMENT REQUEST SUMMARY`, {
      x: 50,
      y: 800,
      size: 18,
      font: font,
    });

    y -= 40;
    page.drawText(`Name: ${data.name}`, { x: 50, y: 760, size: 12, font });

    y -= 20;
    page.drawText(`Email: ${data.email}`, { x: 50, y: 740, size: 12, font });

    y -= 20;
    page.drawText(`Course: ${data.course}`, { x: 50, y: 720, size: 12, font });

    y -= 20;
    page.drawText(`Department: ${data.department}`, {
      x: 50,
      y: 700,
      size: 12,
      font,
    });

    y -= 20;
    page.drawText(`Year: ${data.year}`, { x: 50, y: 680, size: 12, font });

    y -= 20;
    page.drawText(`Student Number: ${data.studentNumber}`, {
      x: 50,
      y: 660,
      size: 12,
      font,
    });

    y -= 20;
    page.drawText(`Session: ${data.session}`, {
      x: 50,
      y: 640,
      size: 12,
      font,
    });

    y -= 20;
    page.drawText(`Reg: ${data.reg}`, { x: 50, y: 620, size: 12, font });

    // mapping the document type
    y -= 40;
    page.drawText("Required Documents:", {
      x: 50,
      y,
      size: 14,
      font,
    });

    y -= 25;

    data.documentType?.map((doc: string, index: number) => {
      if (y < 60) {
        page = pdfDoc.addPage([595, 842]);
        y = 800;
      }

      page.drawText(`${index + 1}. ${doc}`, {
        x: 70,
        y,
        size: 12,
        font,
      });

      y -= 20;
    });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="document.pdf"',
      },
    });
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
