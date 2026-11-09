
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
  ];

  return (
  <nav className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-[#f5f9f9]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
          {/* Logo Icon */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#B5541F]/20 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Image
              className="h-full w-full object-cover"
              src="/images/logo/logo.jpeg"
              width={200}
              height={200}
              alt="HH Traders Logo"
            />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[#B5541F] transition duration-300 group-hover:text-[#943F14] sm:text-xl">
              HH <span className="text-[#B5541F]">Traders</span>
            </span>

            <span className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#6B7280] sm:text-[10px] sm:tracking-[0.2em]">
              Filters and Lubricants Dealer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#FFF4EF] text-[#B5541F]"
                    : "text-[#374151] hover:bg-[#FFF4EF] hover:text-[#B5541F]"
                }`}
              >
                {link.name}

                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#B5541F] transition-all duration-300 ${
                    isActive ? "w-2/3" : "w-0 group-hover:w-2/3"
                  }`}
                />
              </Link>
            );
          })}

          {/* Contact Button */}
          <Link
            href="/contact"
            className="ml-3 flex items-center gap-2 rounded-xl bg-[#B5541F] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#B5541F]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#943F14] hover:shadow-lg active:translate-y-0 active:scale-95"
          >
            Contact Us
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-2xl text-[#374151] transition duration-300 hover:border-[#B5541F] hover:bg-[#FFF4EF] hover:text-[#B5541F] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#E5E7EB] bg-white px-4 pb-6 pt-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-5 py-3 font-medium transition ${
                    isActive
                      ? "bg-[#FFF4EF] text-[#B5541F]"
                      : "text-[#374151] hover:bg-[#FFF4EF] hover:text-[#B5541F]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {link.name}

                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#B5541F]" />
                    )}
                  </div>
                </Link>
              );
            })}

            {/* Contact Button */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-[#B5541F] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#943F14]"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
