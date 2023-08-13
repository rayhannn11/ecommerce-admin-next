import Link from "next/link";
import AdminAuth from "../components/AdminAuth";
import Image from "next/image";

export default function LoginAdmin() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.jpg"
          alt="Logo"
        />
        <h2
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
            "
        >
          Welcome SNEAKER Admin
        </h2>
        <h3
          className="
            mt-2 
            text-center 
            text-1xl 
            font-bold 
            tracking-tight 
            text-gray-900
            cursor-pointer
            "
        >
          <Link href="https://github.com/rayhannn11" target="_blank">
            {" "}
            Created By Rayhan Arrafi
          </Link>
        </h3>
      </div>
      <AdminAuth />
    </div>
  );
}
