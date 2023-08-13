import Link from "next/link";
import React from "react";

const Redirect = () => {
  return (
    <div className="flex min-h-full flex-col justify-center bg-[#fff9f5] text-[#E83C00] items-center">
      <h2 className="text-3xl font-bold text-center mb-10">
        Acces Denied, You Cannot Login With This Account
      </h2>
      <Link
        href="/"
        className="p-6 bg-[#E13238] block text-2xl font-bold rounded-lg text-white "
      >
        Goto Login
      </Link>
    </div>
  );
};

export default Redirect;
