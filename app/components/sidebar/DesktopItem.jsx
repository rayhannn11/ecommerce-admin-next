"use client";

import clsx from "clsx";
import Link from "next/link";

const DesktopItem = ({ label, icon: Icon, href, active }) => {
  return (
    <li key={label} className=" w-full">
      <Link
        href={href}
        className={clsx(
          `
            group 
            flex 
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-black 
            hover:text-white 
            hover:bg-[#fc9a61]
            `,
          active && "bg-[#fc6914] text-white"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="text-1xl">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
