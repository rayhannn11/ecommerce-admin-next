import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { LuPackagePlus, LuArchive } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

// This Hook Use For Sidebar Items
const useSidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Products",
        href: "/admin/products",
        icon: LuArchive,
        active: pathname === "/admin/products",
      },
      {
        label: "Orders",
        href: "/admin/orders",
        icon: LuPackagePlus,
        active: pathname === "/admin/orders",
      },
    ],
    [pathname]
  );

  return routes;
};

export default useSidebar;
