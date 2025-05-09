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
  Control,
  Controller,
  FieldErrors,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apartmentFormSchema, TApartmentForm } from "@/lib/validations";
import { Button } from "../ui/button";
import { NEIGHBORHOODS_DATA } from "@/lib/constants";
import { Save } from "lucide-react";
import { useApartmentContext } from "@/lib/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "../ui/utils";

type ApartmentFormProps = {
  actionType: "add" | "edit";
  apartmentId: string;
};

export default function ApartmentForm({
  actionType,
  apartmentId,
}: ApartmentFormProps) {
  const { handleGetApartmentById, handleEditAparment } = useApartmentContext();
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
      neighborhoodId: actionType === "edit" ? apartment.neighborhoodId : "",
      address: actionType === "edit" ? apartment.address : "",
      bedrooms: actionType === "edit" ? apartment.bedrooms : 0,
      bathrooms: actionType === "edit" ? apartment.bathrooms : 0,
      squareFootage: actionType === "edit" ? apartment.squareFootage : 0,
      monthlyRent: actionType === "edit" ? apartment.monthlyRent : 0,
      description: actionType === "edit" ? apartment.description : "",
    },
  });

  const onSubmit = async (data: TApartmentForm) => {
    if (actionType === "add") {
      // Handle add apartment logic
      console.log("Adding apartment:", data);
    } else if (actionType === "edit") {
      await handleEditAparment(apartmentId, data);
    }
  };

  return (
    <form className="space-y-4 pt-4" onSubmit={handleSubmit(onSubmit)}>
      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="my-8">
          <DetailsSection
            register={register}
            apartment={apartment}
            control={control}
            errors={errors}
          />
        </TabsContent>

        <TabsContent value="amenities" className="space-y-6 pt-4"></TabsContent>

        <TabsContent value="images" className="space-y-4 pt-4"></TabsContent>
      </Tabs>

      <div className="flex gap-2">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">
          <Save />
          Save changes
        </Button>
      </div>
    </form>
  );
}

function DetailsSection({
  register,
  apartment,
  control,
  errors,
}: {
  register: UseFormRegister<TApartmentForm>;
  apartment: TApartmentForm;
  control: Control<TApartmentForm>;
  errors: FieldErrors<TApartmentForm>;
}) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-4">
      <GridItem className="col-span-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          {...register("title")}
          defaultValue={apartment.title}
          className="mb-0"
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </GridItem>

      <GridItem className="col-span-2">
        <Label htmlFor="neighborhood">Neighborhood</Label>
        <Controller
          name="neighborhoodId"
          control={control}
          render={({ field }) => (
            <Select
              defaultValue={apartment.neighborhoodId}
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
        {errors.neighborhoodId && (
          <p className="text-sm text-red-500">
            {errors.neighborhoodId.message}
          </p>
        )}
      </GridItem>

      <GridItem className="col-span-4">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          {...register("address")}
          defaultValue={apartment.address}
          className="mb-0"
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </GridItem>

      <GridItem>
        <Label htmlFor="bedrooms">Bedrooms</Label>
        <Input
          id="bedrooms"
          type="number"
          {...register("bedrooms", { valueAsNumber: true })}
          defaultValue={apartment.bedrooms}
          className="mb-0"
        />
        {errors.bedrooms && (
          <p className="text-sm text-red-500">{errors.bedrooms.message}</p>
        )}
      </GridItem>

      <GridItem>
        <Label htmlFor="bathrooms">Bathrooms</Label>
        <Input
          id="bathrooms"
          type={"number"}
          {...register("bathrooms", { valueAsNumber: true })}
          defaultValue={apartment.bathrooms}
          className="mb-0"
        />
        {errors.bathrooms && (
          <p className="text-sm text-red-500">{errors.bathrooms.message}</p>
        )}
      </GridItem>

      <GridItem>
        <Label htmlFor="squareFootage">Square Footage</Label>
        <Input
          id="squareFootage"
          type="number"
          {...register("squareFootage", { valueAsNumber: true })}
          defaultValue={apartment.squareFootage}
          className="mb-0"
        />
        {errors.squareFootage && (
          <p className="text-sm text-red-500">{errors.squareFootage.message}</p>
        )}
      </GridItem>

      <GridItem>
        <Label htmlFor="rent">Monthly Rent ($)</Label>
        <Input
          id="rent"
          type="number"
          {...register("monthlyRent", { valueAsNumber: true })}
          defaultValue={apartment.monthlyRent}
          className="mb-0"
        />
        {errors.monthlyRent && (
          <p className="text-sm text-red-500">{errors.monthlyRent.message}</p>
        )}
      </GridItem>

      <GridItem className="col-span-4">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register("description")}
          rows={6}
          className="mb-0"
          defaultValue={apartment.description}
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </GridItem>
    </section>
  );
}

function GridItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-2", className)}>{children}</div>;
}
