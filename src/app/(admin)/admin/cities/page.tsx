import AdminPageHeader from "@/components/admin-page-header";
import AdminCitiesList from "@/components/admin/admin-cities-list";

export default function AdminCitiesPage() {
  return (
    <main className="flex max-w-7xl flex-col gap-6">
      <AdminPageHeader
        title="Cities"
        description="Manage all cities listings across your platform."
      />

      <AdminCitiesList />
    </main>
  );
}
