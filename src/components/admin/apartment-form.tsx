"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import {
  useApartmentContext,
  useCityContext,
  useNeighborhoodContext,
  useNeighborhoodList,
} from "@/lib/hooks";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apartmentFormSchema, TApartmentForm } from "@/lib/validations";
import { Button } from "../ui/button";
import { NEIGHBORHOODS_DATA } from "@/lib/constants";

type ApartmentFormProps = {
  actionType: "edit";
  apartmentId: string;
};

export default function ApartmentForm({
  actionType,
  apartmentId,
}: ApartmentFormProps) {
  const { handleGetApartmentById } = useApartmentContext();
  const apartment = handleGetApartmentById(apartmentId);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TApartmentForm>({
    resolver: zodResolver(apartmentFormSchema),
    defaultValues: {
      title: actionType === "edit" ? apartment.title : "",
      neighborhood: actionType === "edit" ? apartment.neighborhoodId : "",
      address: actionType === "edit" ? apartment.address : "",
      bedrooms: actionType === "edit" ? apartment.bedrooms : 0,
      bathrooms: actionType === "edit" ? apartment.bathrooms : 0,
      squareFootage: actionType === "edit" ? apartment.squareFootage : 0,
      monthlyRent: actionType === "edit" ? apartment.monthlyRent : 0,
    },
  });

  const onSubmit = async (data: FieldValues) => {
    console.log("startred");
    console.log("data", data);
  };

  return (
    <form className="space-y-4 pt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title")} />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="neighborhood">Neighborhood</Label>
          <Controller
            name="neighborhood"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange} // Update RHF state on value change
                value={field.value} // Bind the current value from RHF
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select neighborhood" />
                </SelectTrigger>
                <SelectContent>
                  {NEIGHBORHOODS_DATA.map((neighborhood) => (
                    <SelectItem key={neighborhood.id} value={neighborhood.id}>
                      {neighborhood.cityName} - {neighborhood.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.neighborhood && (
            <p className="text-red-500">{errors.neighborhood.message}</p>
          )}
        </div>
      </div>

      <Button type="submit">save</Button>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" {...register("address")} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <Input id="bedrooms" {...register("bedrooms")} />
        </div>

        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="bathrooms">Bathrooms</Label>
            <Input id="bathrooms" {...register("bathrooms")} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="squareFootage">Square Footage</Label>
          <Input id="squareFootage" {...register("squareFootage")} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="rent">Monthly Rent ($)</Label>
          <Input type="number" id="rent" {...register("monthlyRent")} />
        </div>

        <div className="space-y-2">
          <Label>Available From</Label>
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />

                {availableFrom
                  ? new Date(availableFrom).toLocaleDateString()
                  : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar selected={new Date(availableFrom)} />
            </PopoverContent>
          </Popover> */}
        </div>
      </div>

      <div className="space-y-2">
        {/* <Label htmlFor="description">Description</Label>
        <Textarea
          onChange={() => {}}
          id="description"
          name="description"
          value={description}
          placeholder="Enter apartment description"
          rows={6}
        /> */}
      </div>
    </form>
  );
}
