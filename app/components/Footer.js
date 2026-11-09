
"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
   <footer className="border-t border-[#D1D5DB] bg-[#f9f9f9] text-[#1F2937]">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="inline-block text-3xl font-bold tracking-tight text-[#B5541F] transition duration-300 hover:text-[#943F14]"
            >
              HH <span>Traders</span>

              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                Filters and Lubricants Dealer
              </div>
            </Link>

            <p className="mt-4 max-w-sm leading-relaxed text-[#4B5563]">
              Premium oil change services designed to keep your vehicle
              running smoothly, efficiently, and reliably.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#1F2937]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="w-fit text-[#4B5563] transition-all duration-300 hover:translate-x-1 hover:text-[#B5541F]"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="w-fit text-[#4B5563] transition-all duration-300 hover:translate-x-1 hover:text-[#B5541F]"
              >
                Products
              </Link>

              <Link
                href="/about"
                className="w-fit text-[#4B5563] transition-all duration-300 hover:translate-x-1 hover:text-[#B5541F]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="w-fit text-[#4B5563] transition-all duration-300 hover:translate-x-1 hover:text-[#B5541F]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact + Social Section */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#1F2937]">
              Get In Touch
            </h3>

            {/* Email */}
            <a
              href="mailto:sami1981.rot@gmail.com"
              className="group inline-flex items-center gap-3 text-[#4B5563] transition duration-300 hover:text-[#B5541F]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#B5541F] transition-all duration-300 group-hover:border-[#B5541F] group-hover:bg-[#FFF4EF]">
                <MessageCircle size={20} />
              </span>

              <span>sami1981.rot@gmail.com</span>
            </a>

            {/* Social Media */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-[#6B7280]">
                Follow us
              </p>

              <div className="flex gap-4">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/HH-Traders-Filters-and-Lubricants-Dealer/61592741620981/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white font-semibold text-[#4B5563] transition-all duration-300 hover:-translate-y-1 hover:border-[#B5541F] hover:bg-[#B5541F] hover:text-white"
                >
                  f
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E5E7EB] pt-6 text-sm text-[#6B7280] md:flex-row">

          <p>
            © {new Date().getFullYear()} HH Traders. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
