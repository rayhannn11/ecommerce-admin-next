import Link from "next/link";
import ProductUpdateForm from "../../../../../components/product/ProductUpdateForm";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const EditProductPage = ({ params }) => {
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

        <h1 className="text-[#E83C00] text-2xl font-semibold">Edit Product</h1>
      </div>
      <ProductUpdateForm params={params} />
    </div>
  );
};

export default EditProductPage;
