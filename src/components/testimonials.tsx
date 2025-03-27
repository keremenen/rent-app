import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tenant",
      image: "/placeholder-image.jpg",
      quote:
        "I found my dream apartment in just two days using ApartmentHub. The search filters made it easy to find exactly what I was looking for, and the application process was seamless.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Property Owner",
      image: "/placeholder-image.jpg",
      quote:
        "As a property owner, I've been able to find reliable tenants quickly. The platform's screening tools have saved me countless hours and helped me find the perfect match for my properties.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Tenant",
      image: "/placeholder-image.jpg",
      quote:
        "The virtual tours feature was a game-changer during my apartment hunt. I was able to narrow down my options without leaving my current home, making the process so much more efficient.",
      rating: 4,
    },
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="container px-4">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Hear from tenants and property owners who have found success with
            our platform
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden py-0">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
