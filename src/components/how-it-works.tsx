import { Building, CheckCircle, Search, UserCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Filter",
    description:
      "Browse thousands of verified listings with detailed filters to find your perfect match.",
  },
  {
    icon: Building,
    title: "Tour Properties",
    description:
      "Take a virtual tour of your favorite apartments at your convenience.",
  },
  {
    icon: CheckCircle,
    title: "Apply Online",
    description:
      "Complete your rental application online with our secure, streamlined process.",
  },
  {
    icon: UserCheck,
    title: "Move In",
    description:
      "Get approved quickly and move into your new home with our hassle-free process.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container px-4">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Finding and renting your perfect apartment has never been easier
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100/80">
                <step.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
