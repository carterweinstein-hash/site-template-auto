import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import business from "@/content/business.json";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Serving {business.service_area} with reliable HVAC and plumbing solutions.
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

      {/* Why Us section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-10">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {business.why_us_points.map((point) => (
              <div key={point} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
