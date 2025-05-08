import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";

export default function ApartmentActionHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Edit apartment</h1>
      </div>
    </div>
  );
}
