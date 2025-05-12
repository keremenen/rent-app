import AdminPageHeader from "@/components/admin-page-header";
import AdminApartmentsList from "@/components/admin/admin-apartments-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ApartmentsPage() {
  return (
    <main className="flex max-w-7xl flex-col gap-6">
      <AdminPageHeader
        title="Apartments"
        description="Manage all apartment listings across your platform."
      />
      <div className="flex w-full justify-end">
        <Button asChild className="w-full sm:w-auto">
          <Link href="/admin/apartments/add">
            <Plus className="mr-2 h-4 w-4" />
            Add new apartment
          </Link>
        </Button>
      </div>

      <AdminApartmentsList />
    </main>
  );
}
