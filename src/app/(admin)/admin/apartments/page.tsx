import AdminPageHeader from "@/components/admin-page-header";
import AdminApartmentsList from "@/components/admin/admin-apartments-list";

export default function ApartmentsPage() {
  return (
    <main className="flex max-w-7xl flex-col gap-6">
      <AdminPageHeader
        title="Apartments"
        description="Manage all apartment listings across your platform."
      />

      <AdminApartmentsList />
    </main>
  );
}
