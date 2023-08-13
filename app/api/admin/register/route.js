import Admin from "@/app/models/Admin";
import { mongooseConnect } from "@/app/libs/mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();
  const { name, email, password, level } = body;
  const adminRes = await Admin.create({
    name,
    email,
    password,
    level,
  });
  return NextResponse.json(adminRes);
}
