import Link from "next/link";
import ProductForm from "../../../../components/product/ProductForm";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const ProductAdd = async () => {
  return (
    <div className="p-10">
      <div className="flex gap-6 justify-start items-start ">
        <Link
          href={"/admin/products"}
          className="text-[#FE6A16] text-[2.4rem] cursor-pointer "
        >
          {" "}
          <BsArrowLeftCircleFill />
        </Link>

        <h1 className="text-[#E83C00] text-2xl font-semibold">New Product</h1>
      </div>
      <ProductForm />
    </div>
  );
};

export default ProductAdd;
