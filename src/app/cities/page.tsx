import CityList from "@/components/city-list";
import { PageHeader } from "@/components/page-headers";
import { getAllCities } from "@/lib/utils";

export default async function CitiesPage() {
  return (
    <div className="bg-background pb-8">
      <PageHeader
        title="Explore Cities"
        description="Discover the perfect city for your next home"
      />
      <main className="container flex flex-1 flex-col px-4 py-8">
        <CityList />
      </main>
    </div>
  );
}
