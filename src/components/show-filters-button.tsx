import { useState } from "react";
import { Button } from "./ui/button";

export default function ShowFiltersButton({ length }: { length: number }) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>
      <div className="text-muted-foreground text-sm">
        {length} {length === 1 ? "apartment" : "apartments"}
      </div>
    </div>
  );
}
