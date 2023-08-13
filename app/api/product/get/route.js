import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Product from "../../../models/Product";

export async function GET() {
  await mongooseConnect();

  const product = await Product.find();
  return NextResponse.json(product);
}
