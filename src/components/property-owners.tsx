import { ArrowRight, BarChart, Clock, DollarSign, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PropertyOwners() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Maximize Rental Income",
      description:
        "Our market analysis tools help you set the optimal price for your property.",
    },
    {
      icon: Clock,
      title: "Reduce Vacancy Time",
      description:
        "Fill vacancies faster with our wide reach and qualified tenant matching.",
    },
    {
      icon: Shield,
      title: "Verified Tenants",
      description:
        "All applicants go through our thorough screening process for your peace of mind.",
    },
    {
      icon: BarChart,
      title: "Performance Insights",
      description:
        "Get detailed analytics on your listing performance and tenant engagement.",
    },
  ];

  return (
    <section className="bg-primary/5 py-16">
      <div className="container px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Property Owners
            </h2>
            <p className="text-muted-foreground mb-6">
              List your property with us and connect with thousands of qualified
              tenants looking for their next home.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-primary/10 py-0">
                  <CardContent className="flex flex-col items-start p-4">
                    <div className="bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-full">
                      <benefit.icon className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="mb-1 font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/list-property">
                  List Your Property
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/owner-resources">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="bg-primary/10 absolute top-1/4 -left-4 h-64 w-64 rounded-full blur-3xl" />
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/placeholder-image.jpg"
                alt="Property owner using the platform"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
