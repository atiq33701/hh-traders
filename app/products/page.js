"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";

const brands = [
  {
    name: "Honda",
    href: "/products/honda",
    logo: "/images/logo/honda.png",
    description: "Honda genuine oils and lubricants",
  },
  {
    name: "Pak Suzuki",
    href: "/products/pak-suzuki",
    logo: "/images/logo/pak-suzuki.png",
    description: "Lubricants for Suzuki vehicles",
  },
  {
    name: "Caltex Delo",
    href: "/products/caltex-delo",
    logo: "/images/logo/caltex-delo.png",
    description: "Caltex and Delo lubricant products",
  },
  {
    name: "Toyota",
    href: "/products/toyota",
    logo: "/images/logo/toyota.png",
    description: "Toyota genuine motor oils",
  },
  {
    name: "Total",
    href: "/products/total",
    logo: "/images/logo/total-logo.png",
    description: "Total automotive lubricants",
  },
  {
    name: "SK ZIC",
    href: "/products/sk-zic",
    logo: "/images/logo/sk-zic.jpg",
    description: "SK ZIC engine oils and lubricants",
  },
  {
    name: "Totachi",
    href: "/products/totachi",
    logo: "/images/logo/totachi.png",
    description: "Premium Totachi motor oils",
  },
  {
    name: "Kixx",
    href: "/products/kixx",
    logo: "/images/logo/kixx-logo.png",
    description: "Brilliant Kixx products here",
  },
  {
    name: "Hagan",
    href: "/products/hagan",
    logo: "/images/logo/hagan.png",
    description: "Extra-ordinary Hagan products",
  },
  {
    name: "Castrol",
    href: "/products/castrol",
    logo: "/images/logo/castrol.png",
    description: "Special oils and lubricants",
  },
  {
    name: "Atlas",
    href: "/products/atlas",
    logo: "/images/logo/atlas.png",
    description: "Atlas all-season coolant with anti-rust and anti-freeze protection.",
  },
  {
    name: "Bearing",
    href: "/products/bearing",
    logo: "/images/logo/bear.png",
    description: "Bear Max bearings for dependable, smooth rotation.",
  },
  {
    name: "Koyo Bearings",
    href: "/products/koyo-bearing",
    logo: "/images/logo/koyo.png",
    description: "Genuine Koyo ball and wheel bearings.",
  },
  {
    name: "Shell",
    href: "/products/shell",
    logo: "/images/logo/shell.png",
    description: "Shell Helix and Rimula engine oils.",
  },
  {
    name: "Harris",
    href: "/products/harris",
    logo: "/images/logo/harris.png",
    description: "Klink car care, gasket maker and brake pads.",

    description: "Klink car care products and Genuine Gray gasket maker.",
  },
  {
    name: "MK Disk",
    href: "/products/mk-disk",
    logo: "/images/logo/mk disk.jpg",
    description: "MK Kashiyama brake pads and brake shoes.",
  },
  {
    name: "Grease",
    href: "/products/grease",
    logo: "/images/logo/grease.png",
    description: "Multipurpose and high temperature greases.",
  },
  {
    name: "Guard Filters",
    href: "/products/guard-filter",
    logo: "/images/logo/guard filter.png",
    description: "Guard oil filters, diesel filters and disc brake pads.",
  },
  {
    name: "Leppon Filters",
    href: "/products/leppon-filter",
    logo: "/images/logo/leppon1.png",
    description: "Leppon ECO and standard oil filters.",
  },
  {
    name: "Zix Filters",
    href: "/products/zix-filter",
    logo: "/images/logo/zix.png",
    description: "Zix performance oil filters.",
  },
];

export default function ProductsPage() {

  const [selectedProduct, setSelectedProduct] = useState(null);


  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-white text-[#1C1A16]">

        {/* ================= HERO ================= */}

        <section className="relative px-6 py-16">

          
          
          <div className="relative mx-auto max-w-5xl text-center">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#B5541F]">
              HH Traders Products
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Quality Products For

              <span className="block text-[#B5541F]">
                Better Engine Performance
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#5C574B]">
              Explore our range of engine oils, lubricants, automotive
              products, and genuine brand products available at HH Traders
              Filters and Lubricants Dealer.
            </p>

          </div>

        </section>




        {/* ================= BRAND CARDS ================= */}

        <section className="px-6 pb-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
                Browse By Brand
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Explore Our Lubricant Brands
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[#5C574B]">
                Select a brand to open a dedicated page containing only
                products from that brand.
              </p>

            </div>


            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {brands.map((brand) => (
  <Link
    key={brand.name}
    href={brand.href}
    className="group relative overflow-hidden rounded-2xl border border-[#E4DCC8] bg-white p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:border-[#B5541F]/50 hover:bg-[#B5541F]/5"
  >
    
    <div className="relative flex h-16 w-16 items-center justify-center rounded border border-[#E4DCC8] text-lg font-bold text-[#B5541F] transition-all duration-500 group-hover:scale-110 group-hover:border-[#B5541F]/50  group-hover:text-white">
      <Image
  src={brand.logo}
  alt={`${brand.name} logo`}
  width={100}
  height={100}
  className="object-cover rounded"
/>
    </div>

    <h3 className="relative mt-6 text-xl font-bold transition duration-300 group-hover:text-[#B5541F]">
      {brand.name}
    </h3>

    <p className="relative mt-3 text-sm leading-relaxed text-[#5C574B]">
      {brand.description}
    </p>

    <div className="relative mt-5 flex items-center gap-2 text-sm font-semibold text-[#B5541F] transition-all duration-300 group-hover:gap-3">
      View Products
      <span>→</span>
    </div>
  </Link>
))}

            </div>

          </div>

        </section>


        {/* ================= WHOLESALE CTA ================= */}

        <section className="relative overflow-hidden border-t border-[#E4DCC8] px-6 py-24">

          
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-[#B5541F]/20 bg-[#B5541F]/5 px-8 py-16 text-center backdrop-blur-xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">

              Wholesale Inquiries

            </p>


            <h2 className="mt-5 text-4xl font-bold md:text-5xl">

              Looking For Products In Bulk?

            </h2>


            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5C574B]">

              Contact HH Traders for information about product availability,
              wholesale inquiries, lubricants, filters, and automotive
              products.

            </p>


            <div className="mt-10 flex justify-center">

              <a
                href="https://wa.me/923000140571"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500"
              >

                WhatsApp Us

              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
