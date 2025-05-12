import AdminPageHeader from "@/components/admin-page-header";
import AdminCitiesList from "@/components/admin/admin-cities-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function AdminCitiesPage() {
  return (
    <main className="flex max-w-7xl flex-col gap-6">
      <AdminPageHeader
        title="Cities"
        description="Manage all cities listings across your platform."
      />
      <div className="flex w-full justify-end">
        <Button asChild className="w-full sm:w-auto">
          <Link href="/admin/cities/add">
            <Plus className="mr-2 h-4 w-4" />
            Add new city
          </Link>
        </Button>
      </div>

      <AdminCitiesList />
    </main>
  );
}
