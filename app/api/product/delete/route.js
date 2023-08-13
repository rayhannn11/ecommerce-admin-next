import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Product from "../../../models/Product";

export async function DELETE(request) {
  await mongooseConnect(request);
  const id = request.nextUrl.searchParams.get("productId");

  await Product.findByIdAndDelete(id);

  return NextResponse.json("Product Deleted");
}
