import { mongooseConnect } from "../../../libs/mongoose";
import { NextResponse } from "next/server";
import Product from "../../../models/Product";

export async function PUT(request) {
  await mongooseConnect(request);
  const id = request.nextUrl.searchParams.get("productId");
  const body = await request.json();
  const { title, desc, img, categories, brand, size, price, countInStock } =
    body;

  const product = await Product.findByIdAndUpdate(id, {
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
