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
import { addCity, editCity, uploadThumbnailImage } from "@/actions/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";

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

type MediaSectionProps = {
  register: UseFormRegister<TCityForm>;
  errors: FieldErrors<TCityForm>;
  values: (fieldName: string) => string;
};

function MediaSection({ register, errors, values }: MediaSectionProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    uploadThumbnailImage(file, values("id"));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Thumbnail</CardTitle>
        <CardDescription>Upload a main image for this city.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative mx-auto aspect-video w-full max-w-[700px] overflow-hidden rounded-lg border">
            <Image
              src={values("coverImage")}
              alt="City cover image"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 500px, 700px"
              fill
            />
          </div>

          <input type="file" onChange={handleFileChange} />

          {/* <div className="flex w-full items-center justify-center">
            <label
              htmlFor="thumbnail-upload"
              className="bg-muted/20 hover:bg-muted/30 flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="text-muted-foreground mb-3 h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="text-muted-foreground mb-1 text-sm">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-muted-foreground text-xs">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="thumbnail-upload" type="file" className="hidden" />
            </label>
            </div> */}
          <button onClick={handleUpload}>Upload</button>
        </div>
      </CardContent>
    </Card>
  );
}
