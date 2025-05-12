"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCityContext, useNeighborhoodContext } from "@/lib/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Edit, Eye, MoreHorizontalIcon, Trash } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { deleteCity } from "@/actions/actions";
import { useRouter } from "next/navigation";

export default function AdminCitiesList() {
  const { cities } = useCityContext();
  const { getTotalNeighborhoodsByCityId } = useNeighborhoodContext();

  return (
    <section className="overflow-auto rounded-md border p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">
              Neighborhoods
            </TableHead>

            <TableHead className="hidden lg:table-cell">Created at</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cities &&
            cities.map((city) => {
              const totalNeighborhoods = getTotalNeighborhoodsByCityId(city.id);
              return (
                <TableRow key={city.id}>
                  <TableCell className="font-normal">{city.id}</TableCell>
                  <TableCell className="flex items-center justify-start">
                    <div className="relative h-12 w-20">
                      <Image
                        src={city.coverImage}
                        alt={city.name}
                        fill
                        sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{city.name}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {totalNeighborhoods}
                  </TableCell>

                  <TableCell className="hidden lg:table-cell">
                    {new Date(city.createdAt).toDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <CitiesTableActions city={city} />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </section>
  );
}

type CitiesTableActionsProps = {
  city: {
    id: string;
  };
};

function CitiesTableActions({ city }: CitiesTableActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/cities/${city.id}`}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/admin/cities/${city.id}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600"
          onClick={async () => {
            await deleteCity(city.id);
          }}
        >
          <Trash className="mr-2 h-4 w-4 text-red-500" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
