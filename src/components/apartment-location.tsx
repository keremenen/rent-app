import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ApartmentLocation() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Location</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted aspect-[16/9] w-full overflow-hidden rounded-md border">
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-muted-foreground text-center">
              Map showing location at apartments location
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
