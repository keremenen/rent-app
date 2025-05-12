"use client";
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
import { cityFormSchema, TCityForm } from "@/lib/validations";

import { Button } from "../ui/button";
import { Save } from "lucide-react";
import { addCity, editCity } from "@/actions/actions";
import { zodResolver } from "@hookform/resolvers/zod";

type City = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  latitude: number;
  longitude: number;
  population: number;
  area: number;
  walkScore: number;
  commuteTime: number;
  coverImage: string;
};

type CityFormProps = { actionType: "add" } | { actionType: "edit"; city: City };

export default function CityForm(props: CityFormProps) {
  const { actionType } = props;
  const { city } = props as { city: City };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCityForm>({
    resolver: zodResolver(cityFormSchema),
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
      coverImage: actionType === "edit" ? city?.coverImage : "",
    },
  });

  const onSubmit = async (data: TCityForm) => {
    if (actionType === "edit") {
      const cityId = city.id;
      const error = await editCity(cityId, data);

      if (error) {
        console.error("Error editing city:", error);
      } else {
        console.log("City edited successfully");
      }
    }

    if (actionType === "add") {
      const error = await addCity(data);
      if (error) {
        console.error("Error adding city:", error);
      } else {
        console.log("City added successfully");
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <BasicSection register={register} errors={errors} />
      <StatisticsSection register={register} errors={errors} />
      <LocationSection register={register} errors={errors} />

      <div className="flex w-full items-center justify-between">
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
  register: UseFormRegister<TCityForm>;
  errors: FieldErrors<TCityForm>;
};

function BasicSection({ register, errors }: BasicSectionProps) {
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
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="shortDescription">Short Descritpion</Label>
            <Textarea
              rows={1}
              id="shortDescription"
              {...register("shortDescription")}
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
              rows={2}
              id="longDescription"
              {...register("longDescription")}
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
  register: UseFormRegister<TCityForm>;
  errors: FieldErrors<TCityForm>;
};

function StatisticsSection({ register, errors }: StatisticsSectionProps) {
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
            <Input id="population" {...register("population")} />
            {errors.population && (
              <p className="text-sm text-red-500">
                {errors.population.message}
              </p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="area">Area</Label>
            <Input id="area" type="number" {...register("area")} />
            {errors.area && (
              <p className="text-sm text-red-500">{errors.area.message}</p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="walkScore">WalkScore (0-100)</Label>
            <Input id="walkScore" {...register("walkScore")} />
            {errors.walkScore && (
              <p className="text-sm text-red-500">{errors.walkScore.message}</p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="commuteTime">Avg. commute Timne (min)</Label>
            <Input id="commuteTime" {...register("commuteTime")} />
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
  register: UseFormRegister<TCityForm>;
  errors: FieldErrors<TCityForm>;
};

function LocationSection({ register, errors }: LocationSectionProps) {
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
            <Input id="latitude" {...register("latitude")} />
            {errors.latitude && (
              <p className="text-sm text-red-500">{errors.latitude.message}</p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="longitude">Longitude</Label>
            <Input id="longitude" {...register("longitude")} />
            {errors.longitude && (
              <p className="text-sm text-red-500">{errors.longitude.message}</p>
            )}
          </GridItem>
        </section>
      </CardContent>
    </Card>
  );
}
