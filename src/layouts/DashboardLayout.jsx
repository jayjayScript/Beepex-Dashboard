import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen pt-4 pr-4">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#FFFFFF] rounded-[20px] p-5 pb-[26px] border border-[#EAECF0]">
        <Topbar />

        <main className="flex-1 overflow-y-auto py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
