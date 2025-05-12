"use client";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";
import { useNeighborhoodContext } from "@/lib/hooks";

export default function AdminNeighborhoodsList() {
  const { neighborhoods } = useNeighborhoodContext();

  return (
    <section className="overflow-auto rounded-md border p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>City ID</TableHead>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Name</TableHead>
            {/* <TableHead className="hidden md:table-cell">
              Neighborhoods
            </TableHead> */}

            <TableHead className="hidden lg:table-cell">Created at</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {neighborhoods &&
            neighborhoods.map((neighborhood) => {
              // const totalNeighborhoods = getTotalNeighborhoodsByCityId(city.id);
              return (
                <TableRow key={neighborhood.id}>
                  <TableCell className="font-normal">
                    {neighborhood.id}
                  </TableCell>
                  <TableCell className="font-normal">
                    {neighborhood.cityId}
                  </TableCell>
                  <TableCell className="flex items-center justify-start">
                    <div className="relative h-12 w-20">
                      <Image
                        src={neighborhood.thumbnail}
                        alt={neighborhood.name}
                        fill
                        sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{neighborhood.name}</TableCell>
                  {/* <TableCell className="hidden md:table-cell">
                    {totalNeighborhoods}
                  </TableCell> */}

                  <TableCell className="hidden lg:table-cell">
                    {new Date(neighborhood.createdAt).toDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <NeighborhoodsTableActions neighborhood={neighborhood} />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </section>
  );
}

type NeighborhoodsTableActionsProps = {
  neighborhood: {
    id: string;
  };
};

function NeighborhoodsTableActions({
  neighborhood,
}: NeighborhoodsTableActionsProps) {
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
          <Link href={`/neighborhoods/${neighborhood.id}`}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/admin/neighborhoods/${neighborhood.id}/edit`}>
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
