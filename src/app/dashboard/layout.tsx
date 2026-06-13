import type { ReactNode } from "react";
import DashboardSidebar from "@/dashboard/components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-layout d-lg-flex min-vh-100 bg-light">
      <DashboardSidebar />
      <div className="flex-fill p-4">{children}</div>
    </div>
  );
}
