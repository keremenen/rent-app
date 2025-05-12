import AdminPageHeader from "@/components/admin-page-header";

import AdminNeighborhoodsList from "@/components/admin/admin-neighborhoods-list";

export default function ApartmentsPage() {
  return (
    <main className="flex max-w-7xl flex-col gap-6">
      <AdminPageHeader
        title="Neighborhoods"
        description="Manage all neighborhoods listings across your platform."
      />

      <AdminNeighborhoodsList />
    </main>
  );
}
