import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Product from "../../../models/Product";

export async function POST(request) {
  await mongooseConnect();
  const body = await request.json();
  const { title, desc, img, categories, brand, size, price, countInStock } =
    body;

  const product = await Product.create({
    title,
    desc,
    img,
    categories,
    brand,
    size,
    price,
    countInStock,
  });
  return NextResponse.json(product);
}
