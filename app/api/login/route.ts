import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  return NextResponse.json({
    name: "Mehedi Hasan",
  });
};

export const POST = async (req: Request) => {
  const body = await req.json();

  return NextResponse.json(body);
};
