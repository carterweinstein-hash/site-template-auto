"use client";

import Link from "next/link";
import { useState } from "react";
import business from "@/content/business.json";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const phoneHref = `tel:${business.phone.replace(/\D/g, "")}`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          {business.business_name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={phoneHref}
            className="bg-secondary text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-secondary-light transition-colors"
          >
            {business.cta_text}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-700 hover:text-primary font-medium border-b border-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={phoneHref}
            className="block mt-3 text-center bg-secondary text-white px-5 py-3 rounded-lg font-semibold hover:bg-secondary-light transition-colors"
          >
            {business.cta_text}
          </a>
        </nav>
      )}
    </header>
  );
}
