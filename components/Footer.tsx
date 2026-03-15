import Link from "next/link";
import business from "@/content/business.json";

export default function Footer() {
  const phoneHref = `tel:${business.phone.replace(/\D/g, "")}`;

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-3">{business.business_name}</h3>
            <p className="text-gray-300 text-sm">{business.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href={phoneHref} className="hover:text-white transition-colors">
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-white transition-colors"
                >
                  {business.email}
                </a>
              </li>
              <li>
                {business.address}, {business.city}, {business.state}{" "}
                {business.zip}
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {business.business_name}. All
          rights reserved. Serving {business.service_area}.
        </div>
      </div>
    </footer>
  );
}
