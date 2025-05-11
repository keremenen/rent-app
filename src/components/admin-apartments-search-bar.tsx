import { Plus, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AdminApartmentsSearchBar({
  type,
}: {
  type?: "city" | "apartments";
}) {
  return (
    <section className="flex w-full justify-between">
      <div className="relative w-full sm:max-w-xs">
        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
        <Input
          type="search"
          placeholder="Search apartments..."
          className="w-full pl-8"
        />
      </div>
      <Button asChild className="w-full sm:w-auto">
        {type === "city" ? (
          <Link href="/admin/cities/add">
            <Plus className="mr-2 h-4 w-4" />
            Add new city
          </Link>
        ) : (
          <Link href="/admin/apartments/add">
            <Plus className="mr-2 h-4 w-4" />
            Add new apartment
          </Link>
        )}
      </Button>
    </section>
  );
}
