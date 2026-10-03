"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-[#1C1A16]">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#B5541F]/10 blur-3xl"></div>
      <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-[#B5541F]/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="inline-block text-3xl font-bold tracking-tight transition duration-300 hover:scale-105 text-[#B5541F]"
            >
              HH <span className="text-[#B5541F]">Traders</span>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8A8270]">
             Filters and Lubricants Dealer
            </div>
            </Link>

            <p className="mt-4 max-w-sm leading-relaxed text-[#5C574B]">
              Premium oil change services designed to keep your vehicle
              running smoothly, efficiently, and reliably.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#1C1A16]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="w-fit text-[#5C574B] transition-all duration-300 hover:translate-x-2 hover:text-[#B5541F]"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="w-fit text-[#5C574B] transition-all duration-300 hover:translate-x-2 hover:text-[#B5541F]"
              >
                Products
              </Link>

              <Link
                href="/about"
                className="w-fit text-[#5C574B] transition-all duration-300 hover:translate-x-2 hover:text-[#B5541F]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="w-fit text-[#5C574B] transition-all duration-300 hover:translate-x-2 hover:text-[#B5541F]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact + Social Section */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#1C1A16]">
              Get In Touch
            </h3>

            {/* Email */}
            <a
              href="mailto:info@oilchange.com"
              className="group inline-flex items-center gap-3 text-[#5C574B] transition duration-300 hover:text-[#1C1A16]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B5541F]/10 text-[#B5541F] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B5541F] group-hover:text-white">
                <MessageCircle />
              </span>

              <span>info@oilchange.com</span>
            </a>

            {/* Social Media */}
            <div className="mt-8">
              <p className="mb-4 text-sm text-[#8A8270]">
                Follow us
              </p>

              <div className="flex gap-4">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/HH-Traders-Filters-and-Lubricants-Dealer/61592741620981/"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4DCC8] bg-[#F5F1E8] font-semibold text-[#5C574B] transition-all duration-300 hover:-translate-y-2 hover:border-[#B5541F] hover:bg-[#B5541F] hover:text-white hover:shadow-lg hover:shadow-[#B5541F]/30"
                >
                  f
                </a>


              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-3 flex flex-col items-center justify-between gap-4 border-t border-[#E4DCC8] pt-2 text-sm text-[#8A8270] md:flex-row `">

          <p>
            © {new Date().getFullYear()} HH Traders. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
