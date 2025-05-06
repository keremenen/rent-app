import { PageHeader } from "@/components/page-headers";
import NeighborhoodGuide from "@/components/neighborhood-guide";
import NeighborhoodsList from "@/components/neighborhoods-list";
import prisma from "@/lib/db";
import { convertNeighborhoodsToPlain } from "@/lib/utils";

export default function NeighborhoodsListPage() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Explore Neighborhoods"
        description="Discover the perfect neighborhood for your lifestyle and preferences"
      />

      <main className="container px-4 py-8">
        <NeighborhoodsList />
        <NeighborhoodGuide />
      </main>
    </div>
  );
}
