"use client";

import { Bath, BedDouble, Calendar, Heart, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import { Decimal } from "@prisma/client/runtime/library";

type ApartmentCardProps = {
  id: string;
  title: string;
  address: string;
  bathrooms: number;
  bedrooms: number;
  squareFootage: number;
  thumbnail: string;
  availableFrom: Date;
  amenities: string[];
  monthlyRent: number;
};

export function ApartmentCard({
  id,
  thumbnail,
  title,
  address,
  monthlyRent,
  bedrooms,
  bathrooms,
  amenities,
  availableFrom,
  squareFootage,
}: ApartmentCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative">
        <Link href={`/apartments/${id}`}>
          <ApartmentCardBackgroundImage
            backgroundImage={thumbnail}
            title={title}
          />
        </Link>
        <FavouriteIndicator isFavorite={false} />
        <ApartmentBadge available={true} />
      </div>

      <CardContent className="p-4">
        <ApartmentCardMainInfo
          id={id}
          title={title}
          address={address}
          monthlyRent={monthlyRent}
        />
        <AparrtmendCardDetails
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          squareFeet={squareFootage}
        />
        <ApartmentCardAvailableFrom availableFrom={availableFrom} />
        <ApartmentAmenities amenities={amenities} />
      </CardContent>

      <CardFooter className="mt-auto grid grid-cols-2 gap-2 p-4 pt-0">
        <Button variant="outline" asChild>
          <Link href={`/apartments/${id}`}>View Details</Link>
        </Button>
        <Button asChild>
          <Link href={`/apartments/${id}#contact`}>Contact</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ApartmentCardBackgroundImage({
  backgroundImage,
  title,
}: {
  backgroundImage: string;
  title: string;
}) {
  return (
    <div className="relative aspect-[4/3] w-full bg-gray-500">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform hover:scale-105"
      />
    </div>
  );
}

function ApartmentBadge({ available }: { available: boolean }) {
  if (available) {
    return (
      <Badge className="absolute top-2 left-2 bg-green-700 hover:bg-green-600">
        Available
      </Badge>
    );
  } else {
    return (
      <Badge className="absolute top-2 left-2 bg-amber-700 hover:bg-amber-600">
        Coming Soon
      </Badge>
    );
  }
}

function FavouriteIndicator({ isFavorite }: { isFavorite: boolean }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="bg-background/80 hover:bg-background/90 absolute top-2 right-2"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Heart
              className={`h-5 w-5 ${isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}`}
            />
            <span className="sr-only">
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isFavorite ? "Remove from favorites" : "Add to favorites"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ApartmentAmenities({ amenities }: { amenities: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1">
      {amenities.slice(0, 3).map((amenity: string) => (
        <Badge key={amenity} variant="outline" className="text-xs">
          {amenity}
        </Badge>
      ))}
      {amenities.length > 3 && (
        <Badge variant="outline" className="text-xs">
          +{amenities.length - 3} more
        </Badge>
      )}
    </div>
  );
}

function ApartmentCardMainInfo({
  id,
  title,
  address,
  monthlyRent,
}: {
  id: string;
  title: string;
  address: string;
  monthlyRent: number;
}) {
  return (
    <>
      <Link href={`/apartments/${id}`} className="hover:underline">
        <h3 className="mb-1 font-semibold">{title}</h3>
      </Link>
      <p className="text-muted-foreground mb-2 text-sm">{address}</p>
      <p className="mb-3 text-xl font-bold">${monthlyRent}/mo</p>
    </>
  );
}

function AparrtmendCardDetails({
  bedrooms,
  bathrooms,
  squareFeet,
}: {
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
}) {
  return (
    <div className="text-muted-foreground grid grid-cols-3 gap-2 text-sm">
      <div className="flex items-center gap-1">
        <BedDouble className="h-4 w-4" />
        <span>{bedrooms}</span>
      </div>
      <div className="flex items-center gap-1">
        <Bath className="h-4 w-4" />
        <span>{bathrooms}</span>
      </div>
      <div className="flex items-center gap-1">
        <Maximize className="h-4 w-4" />
        <span>{squareFeet} sq ft</span>
      </div>
    </div>
  );
}

function ApartmentCardAvailableFrom({
  availableFrom,
}: {
  availableFrom: Date;
}) {
  return (
    <div className="text-muted-foreground mt-3 flex items-center gap-1 text-sm">
      <Calendar className="h-4 w-4" />
      <span>
        Available{" "}
        {new Date(availableFrom).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </span>
    </div>
  );
}
