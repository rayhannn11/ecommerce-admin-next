import Sidebar from "../../components/sidebar/Sidebar";

export default async function AdminLayout({ children }) {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
