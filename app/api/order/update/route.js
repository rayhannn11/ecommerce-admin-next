import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Order from "../../../models/Order";

export async function PUT(request) {
  await mongooseConnect(request);
  const id = request.nextUrl.searchParams.get("orderId");
  const body = await request.json();
  const { status, paid } = body;

  const order = await Order.findByIdAndUpdate(id, {
    status,
    paid,
  });

  return NextResponse.json(order);
}
