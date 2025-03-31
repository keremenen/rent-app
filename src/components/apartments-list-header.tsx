"use client";
import { List, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ApartmentListHeaderProps = {
  totalCount: number;
  viewMode: "list" | "map";
  onViewModeChange: () => void;
};

export function ApartmentListHeader({
  totalCount,
  viewMode,
  onViewModeChange,
}: ApartmentListHeaderProps) {
  return (
    <div className="bg-muted/50 py-8">
      <div className="container px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Apartments for Rent
            </h1>
            <p className="text-muted-foreground">
              {totalCount} {totalCount === 1 ? "apartment" : "apartments"}{" "}
              available
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Select defaultValue="new-york">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York, NY</SelectItem>
                  <SelectItem value="brooklyn">Brooklyn, NY</SelectItem>
                  <SelectItem value="queens">Queens, NY</SelectItem>
                  <SelectItem value="bronx">Bronx, NY</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex rounded-md border">
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                className="rounded-r-none"
                onClick={viewMode === "map" ? onViewModeChange : undefined}
              >
                <List className="mr-2 h-4 w-4" />
                List
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "ghost"}
                size="sm"
                className="rounded-l-none"
                onClick={viewMode === "list" ? onViewModeChange : undefined}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Map
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
