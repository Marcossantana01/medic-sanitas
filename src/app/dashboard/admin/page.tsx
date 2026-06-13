import DashboardHeader from "@/dashboard/components/DashboardHeader";
import DashboardCards from "@/dashboard/components/DashboardCards";

export default function AdminDashboardPage() {
  return (
    <main className="p-4">
      <DashboardHeader />
      <DashboardCards />
    </main>
  );
}
