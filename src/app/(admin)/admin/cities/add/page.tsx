import CityForm from "@/components/admin/city-form";

export default function AdminAddCityPage() {
  return (
    <main className="flex flex-col gap-6">
      <section className="w-full max-w-7xl">
        <CityForm actionType={"add"} />
      </section>
    </main>
  );
}
