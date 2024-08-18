import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Order from "../../../models/Order";

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();

  const order = await Order.create(body);
  return NextResponse.json(order);
}
