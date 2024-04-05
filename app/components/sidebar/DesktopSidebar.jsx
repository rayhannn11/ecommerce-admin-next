"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSidebar from "../../hook/useSidebar";
import DesktopItem from "./DesktopItem";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const DesktopSidebar = () => {
  const routes = useSidebar();
  const session = useSession();
  const router = useRouter();

  console.log(session);

  useEffect(() => {
    if (session?.status !== "authenticated") {
      router.push("/");
    }
  }, [session?.status, router]);

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-80 lg:px-6 lg:overflow-y-auto lg:bg-[#ffffff] lg:text-black lg:text-2xl lg:pb-4 lg:flex lg:flex-col justify-between">
      {/* Sidebar Header */}
      <nav className="mt-3 flex flex-col justify-between p-3">
        {/* Logo */}
        <div className="text-[#dc691d] flex gap-4  mb-8 items-center">
          <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 ">
            <Image fill src="/images/logo.jpg" alt="Avatar" />
          </div>
          <h1 className="text-2xl font-bold italic">SNEAKER</h1>
        </div>
        {/* Sidebar Items */}
        <ul role="list" className="flex flex-col items-center space-y-1 w-full">
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </ul>
      </nav>
      {/* Footer Sidebar */}
      <nav className="mt-4 pb-4 flex justify-start gap-3 items-center ">
        {/* Image Admin */}
        <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 ">
          <Image
            fill
            src={session?.data?.user?.image || "/images/placeholder.jpg"}
            alt="Avatar"
          />
        </div>
        {/* Admin Info */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold">{session?.data?.user?.name}</p>
          <h2 className="text-sm">{session?.data?.user?.email}</h2>
        </div>
        <button className="ml-1 cursor-pointer" onClick={() => signOut()}>
          {" "}
          <HiArrowLeftOnRectangle />
        </button>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
