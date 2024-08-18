"use client";

import { useState } from "react";
import upload from "../../utils/upload";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");

  const [loading, setLoading] = useState(false);
  // Image
  const [file, setFile] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);
  //   Categories
  const [tempCategories, setTempCategories] = useState(null);
  const [categories, setCategories] = useState([]);
  // Brand
  const [tempBrand, setTempBrand] = useState(null);
  const [brand, setBrand] = useState([]);
  // size
  const [tempSize, setTempSize] = useState(null);
  const [size, setSize] = useState([]);

  const router = useRouter();

  async function handleForm(ev) {
    ev.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("/api/product/add", {
        title,
        desc,
        img: previewImage,
        categories,
        brand,
        size,
        price,
        countInStock,
      });
      if (res.data) {
        router.push("/admin/products");
        toast.success("Product Added");
      }
    } catch (error) {
      toast.error("Error Add Product!");
      console.log(error, "ADD_PRODUCT");
    } finally {
      setLoading(false);
    }
  }

  async function uploadImage() {
    setLoading(true);
    if (!!file && file.length <= 4) {
      try {
        const images = await Promise.all(
          [...file].map(async (file) => {
            console.log(file);
            const url = await upload(file);
            return url;
          })
        );

        setPreviewImage((prevImage) => {
          return [...prevImage, ...images];
        });
      } catch (error) {
      } finally {
        setLoading(false);
        setFile([]);
      }
    } else {
      toast.error("Maximal Upload 4 Images!");
      setLoading(false);
    }
  }

  function handleInput(type) {
    if (type === "categories") {
      setCategories((prev) => [...prev, tempCategories]);
      setTempCategories(null);
    } else if (type === "brand") {
      setBrand((prev) => [...prev, tempBrand]);
      setTempBrand(null);
    } else {
      setSize((prev) => [...prev, tempSize]);
      setTempSize(null);
    }
  }

  return (
    <div className="flex min-h-full flex-col items-start justify-center py-6 mt-6 sm:px-6 lg:px-8 bg-white shadow-md">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form className="w-full" onSubmit={handleForm}>
          <label>Title</label>
          <input
            className="input-1"
            type="text"
            placeholder="Isi Seperti Ini: Jordan 1 Mid"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Description</label>
          <input
            className="input-1"
            type="text"
            placeholder="Isi Seperti Ini: Outfit your little one with the timeless style of the AJ1 in the Jordan 1 Mid."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <label>Price</label>
          <input
            className="input-1"
            type="text"
            placeholder="Isi Seperti Ini: 3000000."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label>Stock Products</label>
          <input
            className="input-1"
            type="text"
            placeholder="Isi Seperti Ini: 10."
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />

          {/* image Start */}
          <div className="flex justify-start items-start gap-4 my-6">
            {/* Images Input */}
            <div className="flex flex-col w-auto">
              <label>Image Products</label>
              <input
                accept="image/*"
                type="file"
                multiple
                onChange={(e) => setFile(e.target.files)}
              />
              {!!file && file.length > 0 && (
                <button
                  className="px-2 py-1  w-[50%] btn-form mt-4"
                  type="button"
                  onClick={uploadImage}
                >
                  {loading ? "Loading..." : "Upload Images"}
                </button>
              )}
            </div>
            {/* preview image */}
            <div className="flex flex-wrap gap-4 w-full">
              {!!previewImage &&
                previewImage?.map((link) => (
                  <div key={link} className="flex gap-4 relative">
                    <Image
                      src={link}
                      height="70"
                      width="70"
                      alt="Product Image"
                      className="rounded-lg"
                    />
                    <div
                      className="absolute right-0 top-0 text-2xl text-white cursor-pointer"
                      onClick={() =>
                        setPreviewImage((prev) =>
                          prev.filter((img) => img !== link)
                        )
                      }
                    >
                      <AiOutlineCloseCircle />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Categories, Brand And Size  */}
          <div className="flex gap-8 w-full">
            {/* Categories Input */}
            <div className="flex flex-col w-full">
              <label>Categories</label>
              <div className="flex flex-1 gap-2">
                <input
                  className="input-1"
                  type="text"
                  placeholder="Isi Seperti Ini: Wanita"
                  onChange={(e) => setTempCategories(e.target.value)}
                />
                <button
                  type="button"
                  className="px-3 py-1 mb-3 btn-form"
                  onClick={() => handleInput("categories")}
                >
                  Add
                </button>
              </div>
              <div className="flex gap-3 ">
                {!!categories &&
                  categories?.map((item) => (
                    <span
                      className="px-2 py-1 bg-[#FF6A16] text-white font-bold rounded-lg cursor-pointer"
                      key={item}
                      onClick={() =>
                        setCategories((prev) =>
                          prev.filter((categorie) => categorie !== item)
                        )
                      }
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>
            {/* Brand Input */}
            <div className="flex flex-col w-full">
              <label>Brand</label>
              <div className="flex flex-1 gap-2">
                <input
                  className="input-1"
                  type="text"
                  placeholder="Isi Seperti Ini: Nike"
                  onChange={(e) => setTempBrand(e.target.value)}
                />
                <button
                  type="button"
                  className="px-3 py-1 mb-3 btn-form"
                  onClick={() => handleInput("brand")}
                >
                  Add
                </button>
              </div>
              <div className="flex gap-3 ">
                {!!brand &&
                  brand?.map((item) => (
                    <span
                      className="px-2 py-1 bg-[#FF6A16] text-white font-bold rounded-lg cursor-pointer"
                      key={item}
                      onClick={() =>
                        setBrand((prev) =>
                          prev.filter((brand) => brand !== item)
                        )
                      }
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>
            {/* Size Input */}
            <div className="flex flex-col w-full">
              <label>Size</label>
              <div className="flex flex-1 gap-2">
                <input
                  className="input-1"
                  type="text"
                  placeholder="Isi Seperti Ini: 37"
                  onChange={(e) => setTempSize(e.target.value)}
                />
                <button
                  type="button"
                  className="px-3 py-1 mb-3 btn-form"
                  onClick={() => handleInput("size")}
                >
                  Add
                </button>
              </div>
              <div className="flex gap-3 ">
                {!!size &&
                  size?.map((item) => (
                    <span
                      className="px-2 py-1 bg-[#FF6A16] text-white font-bold rounded-lg cursor-pointer"
                      key={item}
                      onClick={() =>
                        setSize((prev) => prev.filter((size) => size !== item))
                      }
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Todo Button */}
          <button
            className="px-3 py-2 bg-[#E83C00] text-white font-bold rounded-lg mt-10"
            type="submit"
          >
            {loading ? "Loading..." : "Create Product"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductForm;
