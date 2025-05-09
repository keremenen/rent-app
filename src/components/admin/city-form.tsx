"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../ui/utils";
import { Textarea } from "../ui/textarea";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { TCityForm } from "@/lib/validations";
import { useCityContext } from "@/lib/hooks";
import { Button } from "../ui/button";
import { Save } from "lucide-react";

type CityFormProps = {
  actionType: "add" | "edit";
  id: string;
};

export default function CityForm({ actionType, id }: CityFormProps) {
  id = "gdansk";

  const { handleGetCityById, handleEditCity } = useCityContext();
  const city = handleGetCityById(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCityForm>({
    defaultValues: {
      name: actionType === "edit" ? city?.name : "",
      shortDescription: actionType === "edit" ? city?.shortDescription : "",
      longDescription: actionType === "edit" ? city?.longDescription : "",
      latitude: actionType === "edit" ? city?.latitude : undefined,
      longitude: actionType === "edit" ? city?.longitude : undefined,
      population: actionType === "edit" ? city?.population : undefined,
      area: actionType === "edit" ? city?.area : undefined,
      walkScore: actionType === "edit" ? city?.walkScore : undefined,
      commuteTime: actionType === "edit" ? city?.commuteTime : undefined,
    },
  });

  const onSubmit = (data: TCityForm) => {
    console.log("Form submitted", data);

    if (actionType === "add") {
    } else if (actionType === "edit") {
      // @ts-expect-error wip
      handleEditCity(id, data);
    }
  };
  if (!city) return null;
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Tabs defaultValue="basic">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>
        <TabsContent value="basic" className="space-y-4">
          <BasicSection city={city} register={register} errors={errors} />
        </TabsContent>
        <TabsContent value="details" className="space-y-4">
          <StatisticsSection city={city} register={register} errors={errors} />
          <LocationSection city={city} register={register} errors={errors} />
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

type BasicSectionProps = {
  city: TCityForm;
  register: UseFormRegister<TCityForm>;
  errors: FieldErrors<TCityForm>;
};

function BasicSection({ city, register, errors }: BasicSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Info</CardTitle>
        <CardDescription>
          Enter the basic information about the city.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="grid grid-cols-1 space-y-6">
          <GridItem>
            <Label htmlFor="name">City Name</Label>
            <Input id="name" {...register("name")} defaultValue={city.name} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="shortDescription">Short Descritpion</Label>
            <Textarea
              rows={5}
              id="shortDescription"
              {...register("shortDescription")}
              defaultValue={city.shortDescription}
            />
            {errors.shortDescription && (
              <p className="text-sm text-red-500">
                {errors.shortDescription.message}
              </p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="shortDescription">Long Descritpion</Label>
            <Textarea
              rows={10}
              id="longDescription"
              className="min-h-[200px]"
              {...register("longDescription")}
              defaultValue={city.longDescription}
            />
            {errors.longDescription && (
              <p className="text-sm text-red-500">
                {errors.longDescription.message}
              </p>
            )}
          </GridItem>
        </section>
      </CardContent>
    </Card>
  );
}

type StatisticsSectionProps = {
  city: TCityForm;
  register: UseFormRegister<TCityForm>;
  errors: FieldErrors<TCityForm>;
};

function StatisticsSection({ city, register, errors }: StatisticsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
        <CardDescription>
          Enter the statistics information about the city.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="grid grid-cols-2 gap-6">
          <GridItem>
            <Label htmlFor="population">Population</Label>
            <Input
              id="population"
              {...register("population")}
              defaultValue={city.population}
            />
            {errors.population && (
              <p className="text-sm text-red-500">
                {errors.population.message}
              </p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="area">Area</Label>
            <Input id="area" {...register("area")} defaultValue={city.area} />
          </GridItem>
          <GridItem>
            <Label htmlFor="walkScore">WalkScore (0-100)</Label>
            <Input
              id="walkScore"
              {...register("walkScore")}
              defaultValue={city.walkScore}
            />
            {errors.walkScore && (
              <p className="text-sm text-red-500">{errors.walkScore.message}</p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="commuteTime">Avg. commute Timne (min)</Label>
            <Input
              id="commuteTime"
              {...register("commuteTime")}
              defaultValue={city.commuteTime}
            />
            {errors.commuteTime && (
              <p className="text-sm text-red-500">
                {errors.commuteTime.message}
              </p>
            )}
          </GridItem>
        </section>
      </CardContent>
    </Card>
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

type LocationSectionProps = {
  city: TCityForm;
  register: UseFormRegister<TCityForm>;
  errors: FieldErrors<TCityForm>;
};

function LocationSection({ city, register, errors }: LocationSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Location</CardTitle>
        <CardDescription>
          Enter the location information about the city.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="grid grid-cols-2 gap-6">
          <GridItem>
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              id="latitude"
              {...register("latitude")}
              defaultValue={city.latitude}
            />
            {errors.latitude && (
              <p className="text-sm text-red-500">{errors.latitude.message}</p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              id="longitude"
              {...register("longitude")}
              defaultValue={city.longitude}
            />
            {errors.longitude && (
              <p className="text-sm text-red-500">{errors.longitude.message}</p>
            )}
          </GridItem>
        </section>
      </CardContent>
    </Card>
  );
}
