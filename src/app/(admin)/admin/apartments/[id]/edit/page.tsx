"use client";

import type React from "react";

import { useState } from "react";

import {
  CalendarIcon,
  ChevronLeft,
  ImagePlus,
  Plus,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ApartmentActionHeader from "@/components/admin/apartment-action-header";

export default function EditApartmentPage() {
  const neighborhoods = [
    { id: "downtown", name: "Downtown" },
    { id: "midtown", name: "Midtown" },
    { id: "uptown", name: "Uptown" },
    { id: "brooklyn", name: "Brooklyn" },
    { id: "queens", name: "Queens" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                onChange={() => {}}
                id="title"
                name="title"
                value={"apartment.title"}
                placeholder="Enter apartment title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="neighborhood">Neighborhood</Label>
              <Select value={"value"}>
                <SelectTrigger>
                  <SelectValue placeholder="Select neighborhood" />
                </SelectTrigger>
                <SelectContent>
                  {neighborhoods.map((neighborhood) => (
                    <SelectItem key={neighborhood.id} value={neighborhood.id}>
                      {neighborhood.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              onChange={() => {}}
              name="address"
              value={"adres"}
              placeholder="Enter full address"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Select value={"bedrooms"}>
                <SelectTrigger>
                  <SelectValue placeholder="Select bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Studio</SelectItem>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedrooms</SelectItem>
                  <SelectItem value="3">3 Bedrooms</SelectItem>
                  <SelectItem value="4">4 Bedrooms</SelectItem>
                  <SelectItem value="5">5+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Select value={"bathrooms"}>
                <SelectTrigger>
                  <SelectValue placeholder="Select bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Bathroom</SelectItem>
                  <SelectItem value="1.5">1.5 Bathrooms</SelectItem>
                  <SelectItem value="2">2 Bathrooms</SelectItem>
                  <SelectItem value="2.5">2.5 Bathrooms</SelectItem>
                  <SelectItem value="3">3 Bathrooms</SelectItem>
                  <SelectItem value="3.5">3.5+ Bathrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="squareFootage">Square Footage</Label>
              <Input
                onChange={() => {}}
                id="squareFootage"
                name="squareFootage"
                type="number"
                value={"apartment.squareFootage"}
                placeholder="Enter square footage"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="rent">Monthly Rent ($)</Label>
              <Input
                onChange={() => {}}
                id="rent"
                name="rent"
                type="number"
                value={"apartment.rent"}
                placeholder="Enter monthly rent"
              />
            </div>

            <div className="space-y-2">
              <Label>Available From</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />

                    <span>Pick a date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              onChange={() => {}}
              id="description"
              name="description"
              value={"apartment.description"}
              placeholder="Enter apartment description"
              rows={6}
            />
          </div>
        </TabsContent>

        <TabsContent value="amenities" className="space-y-6 pt-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-medium">Standard Amenities</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="airConditioning" />
                  <Label htmlFor="airConditioning">Air Conditioning</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="heating" />
                  <Label htmlFor="heating">Heating</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="washerDryer" />
                  <Label htmlFor="washerDryer">Washer/Dryer</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="dishwasher" />
                  <Label htmlFor="dishwasher">Dishwasher</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="parking" />
                  <Label htmlFor="parking">Parking</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="gym" />
                  <Label htmlFor="gym">Gym</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="pool" />
                  <Label htmlFor="pool">Pool</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="petFriendly" />
                  <Label htmlFor="petFriendly">Pet Friendly</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="balcony" />
                  <Label htmlFor="balcony">Balcony</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="furnished" />
                  <Label htmlFor="furnished">Furnished</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="wifi" />
                  <Label htmlFor="wifi">WiFi Included</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="cableTv" />
                  <Label htmlFor="cableTv">Cable TV</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-medium">Custom Amenities</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Add unique amenities that aren&apos;t in the standard list
                above.
              </p>

              <div className="mb-6 flex gap-2">
                <Input
                  placeholder="Enter new amenity"
                  value={"newAmenity"}
                  onChange={() => {}}
                  // onChange={(e) => setNewAmenity(e.target.value)}
                  // onKeyDown={(e) => {
                  //   if (e.key === "Enter") {
                  //     e.preventDefault();
                  //     handleAddCustomAmenity();
                  //   }
                  // }}
                />
                <Button type="button">
                  <Plus className="mr-2 h-4 w-4" />
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1.5"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-4 w-4 p-0"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove </span>
                  </Button>
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="space-y-4 pt-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Thumbnail Image</h3>
              <p className="text-muted-foreground text-sm">
                This image will be used as the main image for the apartment
                listing.
              </p>

              <div className="mt-4">
                <div className="relative">
                  <div className="absolute right-2 bottom-2 flex gap-2">
                    <Button variant="secondary" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium">Gallery Images</h3>
              <p className="text-muted-foreground text-sm">
                Add multiple images to showcase the apartment.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {Array(8).map((image, index) => (
                  <div key={index} className="relative">
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                <div className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed">
                  <Button variant="outline">
                    <ImagePlus className="mr-2 h-4 w-4" />
                    Add Image
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
