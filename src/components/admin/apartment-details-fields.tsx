import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { PopoverContent } from "@radix-ui/react-popover";
import { Textarea } from "../ui/textarea";
import { Calendar } from "../ui/calendar";

const neighborhoods = [
  { id: "downtown", name: "Downtown" },
  { id: "midtown", name: "Midtown" },
  { id: "uptown", name: "Uptown" },
  { id: "brooklyn", name: "Brooklyn" },
  { id: "queens", name: "Queens" },
];

export default function ApartmentDetailsFields() {
  return (
    <section className="space-y-4 pt-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            onChange={() => {}}
            id="title"
            name="title"
            value={"apartment.title"}
            placeholder="Enter apartment title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="neighborhood">Neighborhood</Label>
          <Select value={"value"}>
            <SelectTrigger>
              <SelectValue placeholder="Select neighborhood" />
            </SelectTrigger>
            <SelectContent>
              {neighborhoods.map((neighborhood) => (
                <SelectItem key={neighborhood.id} value={neighborhood.id}>
                  {neighborhood.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          onChange={() => {}}
          name="address"
          value={"adres"}
          placeholder="Enter full address"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <Select value={"bedrooms"}>
            <SelectTrigger>
              <SelectValue placeholder="Select bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Studio</SelectItem>
              <SelectItem value="1">1 Bedroom</SelectItem>
              <SelectItem value="2">2 Bedrooms</SelectItem>
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4">4 Bedrooms</SelectItem>
              <SelectItem value="5">5+ Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bathrooms">Bathrooms</Label>
          <Select value={"bathrooms"}>
            <SelectTrigger>
              <SelectValue placeholder="Select bathrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Bathroom</SelectItem>
              <SelectItem value="1.5">1.5 Bathrooms</SelectItem>
              <SelectItem value="2">2 Bathrooms</SelectItem>
              <SelectItem value="2.5">2.5 Bathrooms</SelectItem>
              <SelectItem value="3">3 Bathrooms</SelectItem>
              <SelectItem value="3.5">3.5+ Bathrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="squareFootage">Square Footage</Label>
          <Input
            onChange={() => {}}
            id="squareFootage"
            name="squareFootage"
            type="number"
            value={"apartment.squareFootage"}
            placeholder="Enter square footage"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="rent">Monthly Rent ($)</Label>
          <Input
            onChange={() => {}}
            id="rent"
            name="rent"
            type="number"
            value={"apartment.rent"}
            placeholder="Enter monthly rent"
          />
        </div>

        <div className="space-y-2">
          <Label>Available From</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />

                <span>Pick a date</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          onChange={() => {}}
          id="description"
          name="description"
          value={"apartment.description"}
          placeholder="Enter apartment description"
          rows={6}
        />
      </div>
    </section>
  );
}
