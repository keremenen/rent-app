"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortByOptionsProps = {
  sortOption: string;
};

export default function SortByOptions({ sortOption }: SortByOptionsProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Sort By</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => {}}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle filters</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Select value={sortOption} onValueChange={() => {}}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="priceAsc">Price: Low to High</SelectItem>
            <SelectItem value="priceDesc">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
