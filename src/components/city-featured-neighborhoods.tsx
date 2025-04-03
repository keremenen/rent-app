import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CityNeighborhoods } from "./city-neighborhoods";

type CityFeaturedNeighborhoodsProps = {
  cityName: string;
  neighborhoods: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    cityId: string;
  }[];
};

export default function CityFeaturedNeighborhoods({
  cityName,
  neighborhoods,
}: CityFeaturedNeighborhoodsProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Featured Neighborhoods</CardTitle>
        <CardDescription>Popular areas to live in {cityName}</CardDescription>
      </CardHeader>
      <CardContent>
        <CityNeighborhoods neighborhoods={neighborhoods} />
      </CardContent>
    </Card>
  );
}
