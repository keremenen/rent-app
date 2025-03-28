"use client";

import type React from "react";

import { Calendar, Mail, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

interface ApartmentContactProps {
  apartment: {
    id: string;
    title: string;
    price: number;
    availableFrom: string;
  };
}

export function ApartmentContact({ apartment }: ApartmentContactProps) {
  const [contactMethod, setContactMethod] = useState("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Card className="sticky top-20 mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">
          Interested in this apartment?
        </CardTitle>
        <CardDescription>
          Contact us to schedule a viewing or apply now
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted mb-8 rounded-lg p-4">
          <p className="text-muted-foreground text-sm">Monthly Rent</p>
          <p className="text-2xl font-bold">${apartment.price}</p>
          <p className="text-muted-foreground text-sm">
            Available from{" "}
            {new Date(apartment.availableFrom).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="mb-8 space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" />
          </div>

          <div className="mb-8 space-y-4">
            <Label>Preferred Contact Method</Label>
            <RadioGroup
              defaultValue={contactMethod}
              onValueChange={setContactMethod}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-contact" />
                <Label htmlFor="email-contact" className="cursor-pointer">
                  Email
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone-contact" />
                <Label htmlFor="phone-contact" className="cursor-pointer">
                  Phone
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text" id="text-contact" />
                <Label htmlFor="text-contact" className="cursor-pointer">
                  Text
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="I'm interested in this apartment and would like to schedule a viewing..."
              className="min-h-[100px]"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full" type="submit">
          <Mail className="mr-2 h-4 w-4" />
          Contact via Email
        </Button>
        <Button variant="outline" className="w-full">
          <Phone className="mr-2 h-4 w-4" />
          Call (555) 123-4567
        </Button>
      </CardFooter>
    </Card>
  );
}
