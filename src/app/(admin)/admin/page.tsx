export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Manage your properties, users, and
          more.
        </p>
      </div>

      {/* <DashboardStats /> */}
    </div>
  );
}
