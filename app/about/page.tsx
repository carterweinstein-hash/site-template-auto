import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import business from "@/content/business.json";

export const metadata: Metadata = {
  title: `About | ${business.business_name}`,
  description: `Learn about ${business.business_name} — ${business.tagline}. Serving ${business.service_area}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-8">
            {business.about_headline}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {business.about_text}
          </p>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Why Choose {business.business_name}
            </h2>
            <ul className="space-y-4">
              {business.why_us_points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700 text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
