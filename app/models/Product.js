import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true, maxlength: 36 },
    desc: { type: String, required: true, maxlength: 240 },
    img: { type: [String], required: true, maxlength: 480 },
    categories: { type: Array },
    brand: { type: Array },
    size: { type: Array },
    price: { type: Number, required: true, maxlength: 7 },
    sold: {
      type: Number,
      default: 0,
      maxlength: 4,
    },
    countInStock: {
      type: Number,
      default: 1,
      maxlength: 4,
    },
    totalStars: {
      type: Number,
      default: 0,
      maxlength: 4,
    },
    countReviewers: {
      type: Number,
      default: 0,
      maxlength: 4,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
