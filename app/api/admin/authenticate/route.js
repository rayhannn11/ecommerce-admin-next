import Admin from "@/app/models/Admin";
import { mongooseConnect } from "@/app/libs/mongoose";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request, response) {
  await mongooseConnect();
  const body = await request.json();
  const { email, password } = body;
  const admin = await Admin.findOne({
    email,
  });

  if (admin) {
    cookies().set({
      name: "token",
      value: process.env.TOKEN,
      maxAge: 60 * 60,
      path: "/",
    });
  }

  return NextResponse.json(admin);
}
