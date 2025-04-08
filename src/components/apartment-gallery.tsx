"use client";

import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type ApartmentGalleryProps = {
  images: string[];
};

export function ApartmentGallery({ images }: ApartmentGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextFullscreenImage = () => {
    setFullscreenIndex((prev) => (prev + 1) % images.length);
  };

  const prevFullscreenImage = () => {
    setFullscreenIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-8 overflow-hidden rounded-xl border">
      <div className="relative aspect-[16/8] w-full">
        <Image
          src={images[currentIndex]}
          alt={`Apartment image ${currentIndex + 1}`}
          fill
          className="object-cover"
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
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/80 hover:bg-background/90 absolute right-2 bottom-2"
              onClick={() => setFullscreenIndex(currentIndex)}
            >
              <Expand className="h-5 w-5" />
              <span className="sr-only">View fullscreen</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={images[fullscreenIndex] || "/placeholder.svg"}
                alt={`Apartment image ${fullscreenIndex + 1}`}
                fill
                className="object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="bg-background/80 hover:bg-background/90 absolute top-1/2 left-2 -translate-y-1/2"
                onClick={prevFullscreenImage}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-background/80 hover:bg-background/90 absolute top-1/2 right-2 -translate-y-1/2"
                onClick={nextFullscreenImage}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
              <div className="bg-background/80 absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm">
                {fullscreenIndex + 1} / {images.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div className="bg-background/80 absolute bottom-2 left-2 px-2 py-1 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <div className="mt-4 flex flex-row gap-2 overflow-hidden p-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-[4/3] basis-40 overflow-hidden rounded-md border ${
              index === currentIndex ? "ring-primary ring-2" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
