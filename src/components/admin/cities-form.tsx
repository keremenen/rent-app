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

export default function CitiesForm() {
  return (
    <form className="space-y-4 pt-4">
      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>
        <TabsContent value="basic" className="space-y-4">
          <BasicSection />
        </TabsContent>
        <TabsContent value="details" className="space-y-4">
          <StatisticsSection />
          <LocationSection />
        </TabsContent>
      </Tabs>
    </form>
  );
}

function BasicSection() {
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
            <Label htmlFor="cityName">City Name</Label>
            <Input id="cityName" />
          </GridItem>
          <GridItem>
            <Label htmlFor="shortDescription">Short Descritpion</Label>
            <Textarea rows={5} id="shortDescription" />
          </GridItem>
          <GridItem>
            <Label htmlFor="shortDescription">Long Descritpion</Label>
            <Textarea
              rows={10}
              id="longDescription"
              className="min-h-[200px]"
            />
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

function LocationSection() {
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
            <Input id="latitude" />
          </GridItem>
          <GridItem>
            <Label htmlFor="longitude">Longitude</Label>
            <Input id="longitude" />
          </GridItem>
        </section>
      </CardContent>
    </Card>
  );
}

function StatisticsSection() {
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
            <Input id="population" />
          </GridItem>
          <GridItem>
            <Label htmlFor="area">Area</Label>
            <Input id="area" />
          </GridItem>
          <GridItem>
            <Label htmlFor="walkScore">WalkScore (0-100)</Label>
            <Input id="walkScore" />
          </GridItem>
          <GridItem>
            <Label htmlFor="commuteTime">Avg. commute Timne (min)</Label>
            <Input id="commuteTime" />
          </GridItem>
        </section>
      </CardContent>
    </Card>
  );
}
