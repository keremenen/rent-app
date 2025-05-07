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
import { useCityContext } from "@/lib/hooks";

const GALLERY_MAX_LENGTH = 8;

export default function CityGallery() {
  const { selectedCity } = useCityContext();
  const { name: cityName, gallery } = selectedCity!;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Photo Gallery</CardTitle>
        <CardDescription>Explore {cityName} through photos</CardDescription>
      </CardHeader>
      <CardContent>
        <GalleryGrid>
          {gallery.slice(0, GALLERY_MAX_LENGTH).map((imageUrl, index) => (
            <GalleryImage imageUrl={imageUrl} key={index} index={index} />
          ))}
        </GalleryGrid>
      </CardContent>
    </Card>
  );
}

type GalleryGridProps = {
  children?: React.ReactNode;
};

function GalleryGrid({ children }: GalleryGridProps) {
  return (
    <section className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {children}
    </section>
  );
}

type GalleryImageProps = {
  imageUrl: string;
  index: number;
};

function GalleryImage({ imageUrl, index }: GalleryImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative aspect-16/12 overflow-hidden rounded-lg">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`City gallery image no ${index + 1}`}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="w-full !max-w-7xl rounded-2xl p-2">
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
    <section className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt="City image"
        fill
        className="object-cover"
      />
    </section>
  );
}
