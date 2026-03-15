import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import business from "@/content/business.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: business.meta_title,
  description: business.meta_description,
  openGraph: {
    title: business.meta_title,
    description: business.meta_description,
    type: "website",
  },
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": business.schema_type,
    name: business.business_name,
    description: business.meta_description,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
    },
    areaServed: business.service_area,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.className} pb-16 md:pb-0`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
