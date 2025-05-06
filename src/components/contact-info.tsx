import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Our Office</CardTitle>
          <CardDescription>Visit us or get in touch</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-md">
            <Image
              src="/assets/contact-image.jpg"
              alt="Office building"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-0.5 h-5 w-5" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">
                  123 Apartment Way, Suite 500
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-primary mt-0.5 h-5 w-5" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-primary mt-0.5 h-5 w-5" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">
                  contact@apartmenthub.com
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <section>
            <div className="mb-2 flex items-start gap-3">
              <Clock className="text-primary mt-0.5 h-5 w-5" />
              <p className="font-medium">Office Hours</p>
            </div>
            <ul className="space-y-1 pl-8">
              {officeHours.map((item) => (
                <li key={item.day} className="grid grid-cols-2">
                  <span className="text-muted-foreground">{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </section>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Location</CardTitle>
          <CardDescription>Find us on the map</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted aspect-square w-full overflow-hidden rounded-md border">
            {/* In a real app, you would integrate with Google Maps or similar */}
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-muted-foreground text-center">
                Map showing location at
                <br />
                123 Apartment Way, New York, NY 10001
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
