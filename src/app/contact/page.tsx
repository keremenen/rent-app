import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { PageHeader } from "@/components/page-headers";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Have questions or need assistance? We're here to help you find your perfect home."
      />
      <main className="container px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
