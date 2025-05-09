import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import ApartmentForm from "@/components/admin/apartment-form";

export default function AdminAddApartmentPage() {
  return (
    <main className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <section className="w-full max-w-7xl">
        <ApartmentForm actionType={"add"} />
      </section>
    </main>
  );
}
