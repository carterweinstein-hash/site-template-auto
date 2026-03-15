import type { Metadata } from "next";
import Image from "next/image";
import business from "@/content/business.json";

export const metadata: Metadata = {
  title: `Gallery | ${business.business_name}`,
  description: `See our work — ${business.business_name} in ${business.city}, ${business.state}.`,
};

export default function GalleryPage() {
  const hasImages = business.gallery_images.length > 0;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Work</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Photos from jobs we&apos;ve completed across {business.service_area}.
        </p>

        {hasImages ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {business.gallery_images.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${business.business_name} project ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-12 text-center">
            <div className="text-5xl mb-4">📷</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Gallery Coming Soon
            </h2>
            <p className="text-gray-500">
              We&apos;re putting together photos of our recent projects. Check back
              soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
