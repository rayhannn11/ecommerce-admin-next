import DesktopSidebar from "./DesktopSidebar";

async function Sidebar({ children }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="lg:pl-80 h-full min-h-screen h-auto bg-[#fff9f5]">{children}</main>
    </div>
  );
}

export default Sidebar;
