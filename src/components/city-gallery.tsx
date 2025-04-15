"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CityGalleryProps = {
  cityName: string;
  gallery: string[];
};

export default function CityGallery({ gallery, cityName }: CityGalleryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Photo Gallery</CardTitle>
        <CardDescription>Explore {cityName} through photos</CardDescription>
      </CardHeader>
      <CardContent>
        <GalleryGrid gallery={gallery} />
      </CardContent>
    </Card>
  );
}

type GalleryGridProps = {
  gallery: string[];
};

function GalleryGrid({ gallery }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {gallery.slice(0, 8).map((imageUrl, index) => (
        <GalleryImage imageUrl={imageUrl} key={index} />
      ))}
    </div>
  );
}

type GalleryImageProps = {
  imageUrl: string;
};

function GalleryImage({ imageUrl }: GalleryImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative aspect-16/12 overflow-hidden rounded-lg">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="City image"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogTitle>
          <FullscreenImage imageUrl={imageUrl} />
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}

type FullscreenImageProps = {
  imageUrl: string;
};

function FullscreenImage({ imageUrl }: FullscreenImageProps) {
  return (
    <div className="relative">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="City image"
          fill
          className="object-contain"
        />
        <div className="bg-background/80 absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm"></div>
      </div>
    </div>
  );
}
