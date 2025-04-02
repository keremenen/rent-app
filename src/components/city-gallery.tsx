"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CityGalleryProps = {
  gallery: {
    imageUrl: string;
  }[];
};

export function CityGallery({ gallery }: CityGalleryProps) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {gallery.slice(0, 6).map((galleryItem, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div
                className={`relative cursor-pointer overflow-hidden rounded-md ${
                  index === 5 && gallery.length > 6 ? "relative" : ""
                }`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={galleryItem.imageUrl || "/placeholder.svg"}
                    alt={`City image ${index + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  {index === 5 && gallery.length > 6 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                      <span className="text-lg font-medium">
                        +{gallery.length - 6} more
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogTitle>
                {/* <FullscreenGallery images={gallery} initialIndex={index} /> */}
              </DialogTitle>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}

function FullscreenGallery({
  images,
  initialIndex,
}: {
  images: string[];
  initialIndex: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`City image ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
        <Button
          variant="ghost"
          size="icon"
          className="bg-background/80 hover:bg-background/90 absolute top-1/2 left-2 -translate-y-1/2"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-background/80 hover:bg-background/90 absolute top-1/2 right-2 -translate-y-1/2"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next image</span>
        </Button>
        <div className="bg-background/80 absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
