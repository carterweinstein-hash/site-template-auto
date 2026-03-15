import business from "@/content/business.json";

export default function CTABanner() {
  const phoneHref = `tel:${business.phone.replace(/\D/g, "")}`;

  return (
    <section className="bg-secondary text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/90 mb-6">
          {business.cta_text} &mdash; {business.phone}
        </p>
        <a
          href={phoneHref}
          className="inline-flex items-center justify-center bg-white text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          {business.cta_text}
        </a>
      </div>
    </section>
  );
}
