import { BiBell } from "react-icons/bi";
import DataTable from "../../../../../components/data-table/DataTable";
import DashboardCard from "../../../../../components/ui/dashboardCard";
import StatCardGrid from "../../../../../components/stat-card/StatCardGrid";

export default function UsersPage() {
  const dashboardStats = [
    {
      type: "users" as const,
      value: 2453,
    },
    {
      type: "activeUsers" as const,
      value: 2453,
    },
    {
      type: "usersWithLoans" as const,
      value: 12453,
    },
    {
      type: "usersWithSavings" as const,
      value: 102453,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px", color: "#213f7d" }}>Users</h1>
      <StatCardGrid stats={dashboardStats} />
      <DataTable />
    </div>
  );
}
