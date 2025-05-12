"use client";
import { Button } from "../ui/button";
import { Save } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { neighborhoodFormSchema, TNeighborhoodForm } from "@/lib/validations";
import {
  FieldErrors,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { editNeighborhood } from "@/actions/actions";
import { useEffect, useState } from "react";

type Neighborhood = {
  id: string;
  name: string;
  cityId: string;
  description: string;
  averageRent: number;
  walkScore: number;
  commuteTime: number;
  features: string[];
};

type NeighborhoodFormProps =
  | { actionType: "add" }
  | { actionType: "edit"; neighborhood: Neighborhood };

export default function NeighborhoodForm(props: NeighborhoodFormProps) {
  const { actionType } = props;
  const { neighborhood } = props as { neighborhood: Neighborhood };

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<TNeighborhoodForm>({
    resolver: zodResolver(neighborhoodFormSchema),
    defaultValues: {
      name: actionType === "edit" ? neighborhood?.name : "",
      description: actionType === "edit" ? neighborhood?.description : "",
      averageRent: actionType === "edit" ? neighborhood?.averageRent : 0,
      walkScore: actionType === "edit" ? neighborhood?.walkScore : 0,
      commuteTime: actionType === "edit" ? neighborhood?.commuteTime : 0,
      features: actionType === "edit" ? neighborhood?.features : [],
      cityId: actionType === "edit" ? neighborhood?.cityId : "",
    },
  });

  const onSubmit = async (data: TNeighborhoodForm) => {
    console.log("data", data);
    if (actionType === "edit") {
      const neighborhoodId = neighborhood.id;
      const error = await editNeighborhood(neighborhoodId, data);

      if (error) {
        console.log("Error editing neighborhood:", error);
      } else {
        console.log("Neighborhood edited successfully");
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <BasicSection register={register} errors={errors} />
      <StatisticsSection register={register} errors={errors} />
      <FeaturesSection
        register={register}
        errors={errors}
        getValues={getValues}
        setValue={setValue}
      />
      {/* <LocationSection register={register} errors={errors} /> */}

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
  register: UseFormRegister<TNeighborhoodForm>;
  errors: FieldErrors<TNeighborhoodForm>;
};

function BasicSection({ register, errors }: BasicSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Info</CardTitle>
        <CardDescription>
          Enter the basic information about the neighborhood.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="grid grid-cols-1 space-y-6">
          <GridItem>
            <Label htmlFor="name">Neighborhood Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </GridItem>
          <GridItem>
            <Label htmlFor="name">CityID </Label>
            <Input id="name" {...register("cityId")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </GridItem>

          <GridItem>
            <Label htmlFor="shortDescription">Descritpion</Label>
            <Textarea rows={1} id="description" {...register("description")} />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
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

type StatisticsSectionProps = {
  register: UseFormRegister<TNeighborhoodForm>;
  errors: FieldErrors<TNeighborhoodForm>;
};

function StatisticsSection({ register, errors }: StatisticsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
        <CardDescription>
          Enter the statistics about the neighborhood.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <GridItem>
            <Label htmlFor="averageRent">Average Rent</Label>
            <Input
              id="averageRent"
              type="number"
              {...register("averageRent")}
            />
            {errors.averageRent && (
              <p className="text-sm text-red-500">
                {errors.averageRent.message}
              </p>
            )}
          </GridItem>

          <GridItem>
            <Label htmlFor="walkScore">Walk Score</Label>
            <Input id="walkScore" type="number" {...register("walkScore")} />
            {errors.walkScore && (
              <p className="text-sm text-red-500">{errors.walkScore.message}</p>
            )}
          </GridItem>

          <GridItem>
            <Label htmlFor="commuteTime">Commute Time</Label>
            <Input
              id="commuteTime"
              type="number"
              {...register("commuteTime")}
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

type FeaturesSectionProps = {
  register: UseFormRegister<TNeighborhoodForm>;
  errors: FieldErrors<TNeighborhoodForm>;
  getValues: () => TNeighborhoodForm;
  setValue: UseFormSetValue<TNeighborhoodForm>;
};

function FeaturesSection({
  register,
  errors,
  getValues,
  setValue,
}: FeaturesSectionProps) {
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    // Initialize features with default values from the form
    const defaultFeatures = getValues().features || [];
    setFeatures(defaultFeatures);
  }, [getValues]);

  const addFeature = () => {
    const updatedFeatures = [...features, ""];
    setFeatures(updatedFeatures);
    setValue("features", updatedFeatures); // Update form state
  };

  const updateFeature = (index: number, value: string) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
    setValue("features", updatedFeatures); // Update form state
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
    setValue("features", updatedFeatures); // Update form state
  };

  const isFormValid = () => {
    return features.every((feature) => feature.trim() !== "");
  };

  useEffect(() => {
    register("features"); // Register the field
  }, [register]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Features</CardTitle>
        <CardDescription>
          Add or remove features of the neighborhood.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={feature}
                onChange={(e) => updateFeature(index, e.target.value)}
                placeholder={`Feature ${index + 1}`}
              />
              <Button
                type="button"
                variant="destructive"
                onClick={() => removeFeature(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={addFeature}>
            Add Feature
          </Button>
          {errors.features && (
            <p className="text-sm text-red-500">{errors.features.message}</p>
          )}
        </section>
        {!isFormValid() && (
          <p className="text-sm text-red-500">
            Please ensure all feature inputs are filled.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
