import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: false, maxlength: 48 },
    customer: { type: String, required: true, maxlength: 24 },
    products: [
      {
        productId: {
          type: String,
        },
        title: { type: String },
        img: { type: String },
        categories: { type: Array },
        brand: { type: Array },
        size: { type: Array },
        price: { type: Number },
        quantity: {
          type: Number,
        },
        selectedSize: {
          type: Number,
        },
        isReview: {
          type: Number,
          default: 0,
        },
      },
    ],
    address: {
      type: String,
      required: true,
      maxlength: 100,
    },
    telephone: {
      type: Number,
      required: true,
      maxlength: 13,
    },
    total: {
      type: Number,
      required: true,
      maxlength: 8,
    },
    status: {
      type: Number,
      default: 0,
    },
    paid: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
