import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NeighborhoodGuide() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">
            Neighborhood Guide
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Learn more about different types of neighborhoods and what to look
            for
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How to choose the right neighborhood?
              </AccordionTrigger>
              <AccordionContent>
                Consider your lifestyle, commute, budget, and priorities. Visit
                neighborhoods at different times of day, talk to locals, and
                research amenities, safety, and future development plans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is a Walk Score?</AccordionTrigger>
              <AccordionContent>
                Walk Score measures the walkability of a neighborhood on a scale
                of 0-100 based on proximity to amenities like grocery stores,
                restaurants, parks, and schools. A higher score means more
                errands can be accomplished on foot.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Urban vs. Residential neighborhoods
              </AccordionTrigger>
              <AccordionContent>
                Urban neighborhoods typically offer more amenities, nightlife,
                and public transportation but may be noisier and more expensive.
                Residential neighborhoods tend to be quieter with more space but
                might require a car and have fewer nearby amenities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What to consider for families?
              </AccordionTrigger>
              <AccordionContent>
                Families should prioritize school quality, safety, parks and
                playgrounds, family-friendly activities, and proximity to
                childcare. Consider the presence of other families and community
                events.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Emerging neighborhoods: pros and cons
              </AccordionTrigger>
              <AccordionContent>
                Emerging neighborhoods often offer better value and investment
                potential but may lack some amenities and services. Research
                development plans and visit at different times to assess the
                current state and future potential.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link href="/resources/neighborhood-guide">
              Read Our Complete Neighborhood Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
