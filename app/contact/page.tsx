import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import business from "@/content/business.json";

export const metadata: Metadata = {
  title: `Contact | ${business.business_name}`,
  description: `Contact ${business.business_name} in ${business.city}, ${business.state}. Call ${business.phone} or fill out our form.`,
};

export default function ContactPage() {
  const phoneHref = `tel:${business.phone.replace(/\D/g, "")}`;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Phone
                </h3>
                <a
                  href={phoneHref}
                  className="text-lg text-secondary font-semibold hover:underline"
                >
                  {business.phone}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Email
                </h3>
                <a
                  href={`mailto:${business.email}`}
                  className="text-lg text-secondary font-semibold hover:underline"
                >
                  {business.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Address
                </h3>
                <p className="text-lg text-gray-700">
                  {business.address}
                  <br />
                  {business.city}, {business.state} {business.zip}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Service Area
                </h3>
                <p className="text-lg text-gray-700">{business.service_area}</p>
              </div>
            </div>

            {/* Google Maps embed */}
            {business.google_maps_embed_url && (
              <div className="mt-8">
                <iframe
                  src={business.google_maps_embed_url}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title={`${business.business_name} location`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
