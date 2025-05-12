"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
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
import { AMENITIES_DATA } from "@/lib/constants";
import { Save } from "lucide-react";
import { cn } from "../ui/utils";
import { Checkbox } from "../ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { addApartment, editApartment } from "@/actions/actions";

type Apartment = {
  id: string;
  neighborhoodId: string;
  title: string;
  address: string;
  description: string;
  thumbnail: string;
  gallery: string[];
  amenities: string[];
  monthlyRent: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  availableFrom: Date;
  createdAt: Date;
};

type ApartmentFormProps =
  | { actionType: "add" }
  | { actionType: "edit"; apartment: Apartment };

export default function ApartmentForm(props: ApartmentFormProps) {
  const { actionType } = props;
  const { apartment } = props as { apartment: Apartment };

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
      amenities: actionType === "edit" ? apartment.amenities : [],
    },
  });

  const onSubmit = async (data: TApartmentForm) => {
    if (actionType === "edit") {
      const apartmentId = apartment.id;
      const error = await editApartment(apartmentId, data);

      if (error) {
        console.log("Error updating apartment:", error);
      } else {
        console.log("Apartment updated successfully");
      }
    }

    if (actionType === "add") {
      const error = await addApartment(data);

      if (error) {
        console.log("Error adding apartment:", error);
      } else {
        console.log("Apartment added successfully");
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <DetailsSection
        register={register}
        apartment={apartment}
        control={control}
        errors={errors}
      />

      <AmenitiesSection
        register={register}
        apartment={apartment}
        control={control}
        errors={errors}
      />

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
  errors,
}: {
  register: UseFormRegister<TApartmentForm>;
  apartment: TApartmentForm;
  control: Control<TApartmentForm>;
  errors: FieldErrors<TApartmentForm>;
}) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
          <CardDescription>
            Enter the basic information about the apartment.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <GridItem className="col-span-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register("title")} className="mb-0" />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </GridItem>

          <GridItem className="col-span-2">
            <Label htmlFor="neighborhood">NeighborhoodId</Label>
            <Input
              type="neighborhoodId"
              {...register("neighborhoodId")}
              className="mb-0"
            />
            {errors.neighborhoodId && (
              <p className="text-sm text-red-500">
                {errors.neighborhoodId.message}
              </p>
            )}
          </GridItem>

          <GridItem className="col-span-4">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address")} className="mb-0" />
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
              className="mb-0"
            />
            {errors.squareFootage && (
              <p className="text-sm text-red-500">
                {errors.squareFootage.message}
              </p>
            )}
          </GridItem>

          <GridItem>
            <Label htmlFor="rent">Monthly Rent ($)</Label>
            <Input
              id="rent"
              type="number"
              {...register("monthlyRent", { valueAsNumber: true })}
              className="mb-0"
            />
            {errors.monthlyRent && (
              <p className="text-sm text-red-500">
                {errors.monthlyRent.message}
              </p>
            )}
          </GridItem>

          <GridItem className="col-span-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              rows={6}
              className="mb-0"
            />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </GridItem>
        </CardContent>
      </Card>
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

type AmenitiesSectionProps = {
  register: UseFormRegister<TApartmentForm>;
  apartment: TApartmentForm;
  control: Control<TApartmentForm>;

  errors: FieldErrors<TApartmentForm>;
};

function AmenitiesSection({ control, errors }: AmenitiesSectionProps) {
  type handleAmenityChangeType = {
    checked: boolean;
    amenityId: string;
    field: {
      value: string[];
      onChange: (value: string[]) => void;
    };
  };

  const handleAmenityChange = ({
    checked,
    amenityId,
    field,
  }: handleAmenityChangeType) => {
    const newValue = checked
      ? [...field.value, amenityId]
      : field.value.filter((id: string) => id !== amenityId);
    field.onChange(newValue);
  };
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Amenities</CardTitle>
          <CardDescription>
            Select the amenities available in the apartment.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {AMENITIES_DATA.map((amenity) => (
            <GridItem key={amenity.id}>
              <div className="flex items-center space-x-2">
                <Controller
                  name="amenities"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id={amenity.id}
                      value={amenity.id}
                      checked={field.value.includes(amenity.id)} // Check if the amenity is selected
                      onCheckedChange={(checked) => {
                        handleAmenityChange({
                          checked: !!checked,
                          amenityId: amenity.id,
                          field,
                        });
                      }}
                    />
                  )}
                />
                <Label htmlFor={amenity.id}>{amenity.name}</Label>
                {errors.amenities && (
                  <p className="text-sm text-red-500">
                    {errors.amenities.message}
                  </p>
                )}
              </div>
            </GridItem>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
