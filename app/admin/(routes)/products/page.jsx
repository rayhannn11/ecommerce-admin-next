import Link from "next/link";
import React from "react";
import ProductsComponent from "../../../components/product/ProductsComponent";

const Products = async () => {
  return (
    <div className="p-10 ">
      {/* To Add product */}
      <Link
        className=" p-4 bg-[#FC6914] text-white text-[1.2rem] font-bold rounded-lg"
        href={"/admin/products/add"}
      >
        Add Product
      </Link>
      {/* Products */}
      <ProductsComponent />
    </div>
  );
};

export default Products;
