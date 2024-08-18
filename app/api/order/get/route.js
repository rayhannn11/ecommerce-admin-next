import { mongooseConnect } from '../../../libs/mongoose';
import { NextResponse } from 'next/server';
import Order from '../../../models/Order';

export const dynamic = 'force-dynamic';
export const revalidate = 1;
export async function GET() {
  await mongooseConnect();

  const order = await Order.find();
  return NextResponse.json(order);
}
