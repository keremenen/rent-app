import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Location</CardTitle>
        <CardDescription>Find us on the map</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted aspect-[16/5] w-full overflow-hidden rounded-md border">
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
  );
}
