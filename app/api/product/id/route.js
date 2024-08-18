import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Product from "../../../models/Product";

export async function GET(request) {
  await mongooseConnect(request);
  const id = request.nextUrl.searchParams.get("productId");

  const product = await Product.findById(id);

  return NextResponse.json(product);
}
