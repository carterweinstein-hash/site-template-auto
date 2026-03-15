import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import business from "@/content/business.json";

export const metadata: Metadata = {
  title: `Services | ${business.business_name}`,
  description: `HVAC and plumbing services in ${business.city}, ${business.state}. ${business.services.map((s) => s.name).join(", ")}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-gray-600 mb-10 max-w-2xl">
            From emergency repairs to new installations, {business.business_name}{" "}
            has you covered. Serving {business.service_area}.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {business.services.map((service) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
