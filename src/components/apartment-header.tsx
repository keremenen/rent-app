import { Heart, Share } from "lucide-react";

import { Button } from "@/components/ui/button";

type ApartmentHeaderProps = {
  apartment: {
    title: string;
    address: string;
    price: number;
  };
};

export function ApartmentHeader({ apartment }: ApartmentHeaderProps) {
  return (
    <header className="bg-background sticky top-0 z-10 w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {/* commented out temporarily - I need to think about final layout */}
          {/* <Button variant="ghost" size="icon" asChild>
            <Link href="/apartments">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to listings</span>
            </Link>
          </Button> */}
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold">{apartment.title}</h1>
            <p className="text-muted-foreground text-sm">{apartment.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <p className="text-muted-foreground text-sm">Monthly Rent</p>
            <p className="text-lg font-bold">${apartment.price}</p>
          </div>
          <Button variant="outline" size="icon">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Save</span>
          </Button>
          <Button variant="outline" size="icon">
            <Share className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </div>
      <div className="bg-background border-t px-4 py-2 md:hidden">
        <h1 className="text-lg font-semibold">{apartment.title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">{apartment.address}</p>
          <p className="text-lg font-bold">${apartment.price}/mo</p>
        </div>
      </div>
    </header>
  );
}
