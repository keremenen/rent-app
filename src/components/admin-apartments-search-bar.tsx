import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function AdminApartmentsSearchBar() {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
      <Input
        type="search"
        placeholder="Search apartments..."
        className="w-full pl-8"
      />
    </div>
  );
}
