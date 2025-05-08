"use client";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useApartmentContext } from "@/lib/hooks";

export function ApartmentHeader() {
  const { selectedApartment } = useApartmentContext();

  if (!selectedApartment) return null;

  const { title, address, monthlyRent } = selectedApartment!;

  return (
    <header className="bg-background sticky top-0 z-10 w-full border-t border-b">
      <section className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-muted-foreground text-sm">{address}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-2">
            <p className="text-muted-foreground text-sm">Monthly Rent</p>
            <p className="text-lg font-bold">${monthlyRent}</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            aria-label="Copy apartments URL details"
          >
            <Copy className="h-5 w-5" />
            <span className="sr-only">Copy</span>
          </Button>
        </div>
      </section>
      <section className="bg-background border-t px-4 py-2 md:hidden">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">{address}</p>
          <p className="text-lg font-bold">${monthlyRent}/mo</p>
        </div>
      </section>
    </header>
  );
}
