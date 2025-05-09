"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useApartmentContext } from "@/lib/hooks";
import Image from "next/image";

export default function AdminApartmentsList() {
  const { apartments } = useApartmentContext();

  // sort by id
  apartments.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });

  return (
    <section className="overflow-auto rounded-md border p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">
              Neighborhood ID
            </TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="hidden sm:table-cell">Bedrooms</TableHead>

            <TableHead className="hidden lg:table-cell">Created at</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apartments.map((apartment) => (
            <TableRow key={apartment.id}>
              <TableCell className="font-normal">{apartment.id}</TableCell>
              <TableCell className="flex items-center justify-center">
                <Image
                  src={apartment.thumbnail}
                  alt={apartment.title}
                  width={60}
                  height={20}
                />
              </TableCell>
              <TableCell className="font-medium">{apartment.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {apartment.neighborhoodId}
              </TableCell>
              <TableCell>${apartment.monthlyRent}</TableCell>
              <TableCell className="hidden sm:table-cell">
                {apartment.bedrooms}
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

type ApartmentsTableActionsProps = {
  apartment: {
    id: string;
    neighborhoodId: string;
    title: string;
    address: string;
    bathrooms: number;
    bedrooms: number;
    gallery: string[];
    squareFootage: number;
    thumbnail: string;
    availableFrom: Date;
    amenities: string[];
    monthlyRent: number;
    description: string;
    createdAt: Date;
  };
};

function ApartmentsTableActions({ apartment }: ApartmentsTableActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/apartments/${apartment.id}`}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/admin/apartments/${apartment.id}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          <Trash className="mr-2 h-4 w-4 text-red-500" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
