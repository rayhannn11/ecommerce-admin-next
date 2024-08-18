import Sidebar from "../../components/sidebar/Sidebar";

export default async function AdminLayout({ children }) {
  return (
    <Sidebar>
      <div className="min-h-screen h-auto bg-[#FFF9F5]">{children}</div>
    </Sidebar>
  );
}
