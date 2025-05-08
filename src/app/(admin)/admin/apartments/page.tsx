import AdminApartmentsSearchBar from "@/components/admin-apartments-search-bar";
import AdminPageHeader from "@/components/admin-page-header";
import { ApartmentsTableActions } from "@/components/apartments-table-actions";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ApartmentsPage() {
  const apartments = [
    {
      id: "apt-101",
      title: "Luxury Studio in Downtown",
      address: "123 Main St, New York",
      price: 1800,
      bedrooms: "Studio",
      bathrooms: 1,
      status: "Available",
      neighborhood: "Downtown",
      createdAt: "2025-03-15",
    },
    {
      id: "apt-202",
      title: "Modern 1-Bedroom with Balcony",
      address: "456 Park Ave, New York",
      price: 2200,
      bedrooms: 1,
      bathrooms: 1,
      status: "Available",
      neighborhood: "Midtown",
      createdAt: "2025-03-10",
    },
    {
      id: "apt-303",
      title: "Spacious 2-Bedroom Corner Unit",
      address: "789 Broadway, New York",
      price: 3500,
      bedrooms: 2,
      bathrooms: 2,
      status: "Available",
      neighborhood: "Upper West Side",
      createdAt: "2025-03-05",
    },
    {
      id: "apt-404",
      title: "Renovated 3-Bedroom with Views",
      address: "101 River Rd, New York",
      price: 4200,
      bedrooms: 3,
      bathrooms: 2,
      status: "Pending",
      neighborhood: "Riverside",
      createdAt: "2025-02-28",
    },
    {
      id: "apt-505",
      title: "Cozy 1-Bedroom in Brooklyn",
      address: "202 Bedford Ave, Brooklyn",
      price: 2400,
      bedrooms: 1,
      bathrooms: 1,
      status: "Available",
      neighborhood: "Williamsburg",
      createdAt: "2025-02-20",
    },
  ];

  return (
    <main className="flex max-w-7xl flex-col gap-6">
      <AdminPageHeader
        title="Apartments"
        description="Manage all apartment listings across your platform."
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <AdminApartmentsSearchBar />
        <ApartmentsActions />
      </div>
      <ApartmentsList apartments={apartments} />
    </main>
  );
}

function ApartmentsActions() {
  return (
    <Button asChild className="w-full sm:w-auto">
      <Link href="/admin/apartments/new">
        <Plus className="mr-2 h-4 w-4" />
        Add Apartment
      </Link>
    </Button>
  );
}

type ApartmentsTableActionsProps = {
  apartments: {
    id: string;
    title: string;
    address: string;
    price: number;
    bedrooms: number | string;
    bathrooms: number;
    status: string;
    neighborhood: string;
    createdAt: string;
  }[];
};

function ApartmentsList({ apartments }: ApartmentsTableActionsProps) {
  return (
    <section className="overflow-auto rounded-md border p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Location</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="hidden sm:table-cell">Bedrooms</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden lg:table-cell">Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apartments.map((apartment) => (
            <TableRow key={apartment.id}>
              <TableCell className="font-medium">{apartment.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {apartment.neighborhood}
              </TableCell>
              <TableCell>${apartment.price}</TableCell>
              <TableCell className="hidden sm:table-cell">
                {apartment.bedrooms}
              </TableCell>
              <TableCell>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    apartment.status === "Available"
                      ? "bg-green-100 text-green-800"
                      : apartment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {apartment.status}
                </div>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                {new Date(apartment.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <ApartmentsTableActions apartment={apartment} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
