import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-on-background">
        <div className="hidden md:block">
            <Sidebar />
        </div>
      <div className="flex-1 md:ml-64">
        <Topbar />
        <main className="pt-16 px-8">{children}</main>
      </div>
    </div>
  );
}