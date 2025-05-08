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
import { Controller, FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apartmentFormSchema, TApartmentForm } from "@/lib/validations";
import { Button } from "../ui/button";
import { NEIGHBORHOODS_DATA } from "@/lib/constants";
import { Save } from "lucide-react";
import { useApartmentContext } from "@/lib/hooks";

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
      description: actionType === "edit" ? apartment.description : "",
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
          <Input id="title" {...register("title")} className="mb-0" />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
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
                <SelectTrigger className="mb-0 w-full">
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
            <p className="text-sm text-red-500">
              {errors.neighborhood.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" {...register("address")} className="mb-0" />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="space-y-2">
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <Input id="bedrooms" {...register("bedrooms")} className="mb-0" />
          {errors.bedrooms && (
            <p className="text-sm text-red-500">{errors.bedrooms.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="bathrooms">Bathrooms</Label>
            <Input id="bathrooms" {...register("bathrooms")} className="mb-0" />
            {errors.bathrooms && (
              <p className="text-sm text-red-500">{errors.bathrooms.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="squareFootage">Square Footage</Label>
          <Input
            id="squareFootage"
            {...register("squareFootage")}
            className="mb-0"
          />
          {errors.squareFootage && (
            <p className="text-sm text-red-500">
              {errors.squareFootage.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="rent">Monthly Rent ($)</Label>
          <Input
            type="number"
            id="rent"
            {...register("monthlyRent")}
            className="mb-0"
          />
          {errors.monthlyRent && (
            <p className="text-sm text-red-500">{errors.monthlyRent.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register("description")}
          rows={6}
          className="mb-0"
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="mt-8 flex gap-2">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">
          <Save />
          Save changes
        </Button>
      </div>
    </form>
  );
}
