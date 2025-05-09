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
import { AMENITIES_DATA, NEIGHBORHOODS_DATA } from "@/lib/constants";
import { ImagePlus, Save, Trash2 } from "lucide-react";
import { useApartmentContext } from "@/lib/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "../ui/utils";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
      amenities: actionType === "edit" ? apartment.amenities : [],
    },
  });

  const onSubmit = async (data: TApartmentForm) => {
    if (actionType === "add") {
      // Handle add apartment logic
      console.log("Adding apartment:", data);
    } else if (actionType === "edit") {
      console.log("Editing apartment:", data);
      await handleEditAparment(apartmentId, data);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="my-2">
          <DetailsSection
            register={register}
            apartment={apartment}
            control={control}
            errors={errors}
          />
        </TabsContent>

        <TabsContent value="amenities" className="my-2">
          <AmenitiesSection
            register={register}
            apartment={apartment}
            control={control}
            errors={errors}
          />
        </TabsContent>
        <TabsContent value="images" className="my-2">
          <ImagesSection apartment={apartment} />
        </TabsContent>
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
              defaultValue={apartment.monthlyRent}
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
              defaultValue={apartment.description}
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

function AmenitiesSection({
  apartment,
  control,
  errors,
}: AmenitiesSectionProps) {
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
                  defaultValue={apartment.amenities || []} // Initialize with existing amenities
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

function ImagesSection({ apartment }: { apartment: TApartmentForm }) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">Thumbnail Image</h3>
        <p className="text-muted-foreground text-sm">
          This image will be used as the main image for the apartment listing.
        </p>

        <div className="mt-4">
          <div className="relative h-[250px] w-1/3">
            <Image src={apartment.thumbnail} fill alt="cos tam" />
          </div>
          {/* <div className="relative">
            <div className="absolute right-2 bottom-2 flex gap-2">
              <Button variant="secondary" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Change
              </Button>
            </div>
          </div> */}
        </div>
      </div>

      <Separator />
      <div>
        <h3 className="text-lg font-medium">Gallery Images</h3>
        <p className="text-muted-foreground text-sm">
          Add multiple images to showcase the apartment.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array(8).map((image, index) => (
            <div key={index} className="relative">
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}

          <div className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed">
            <Button variant="outline">
              <ImagePlus className="mr-2 h-4 w-4" />
              Add Image
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
