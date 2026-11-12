"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { products } from "../../data/products";
import { ProductTags, RoleTag, GroupChips } from "../../components/ProductTags";

export default function FlamingoProductsPage() {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // FILTER FLAMINGO PRODUCTS
  const brandProducts = products
    .filter((product) => {
      const matchesCategory = product.category === "Flamingo";

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const matchesGroup = group === "All" || product.group === group;

      return matchesCategory && matchesSearch && matchesGroup;
    })
    ;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#1C1A16]">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden px-6 py-12">

          {/* Background Glow */}
                    
          {/* Back Button */}
          <div className="relative mx-auto max-w-7xl">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E4DCC8] bg-white px-5 py-3 text-sm font-semibold text-[#B5541F] transition hover:border-[#B5541F] hover:bg-[#B5541F]/10"
            >
              ← Back to Products
            </Link>
            <RoleTag category="Flamingo" className="ml-3" />
          </div>

          {/* Hero Content */}
          <div className="relative mx-auto mt-6 max-w-5xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B5541F]">
              Flamingo Products
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
              Flamingo
              <span className="block text-[#B5541F]">
                Car Care & Additives
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#5C574B] sm:text-lg">
              Explore our available Flamingo fuel additives, engine and radiator flush, brake fluid, polishes and car care products.
            </p>

          </div>
        </section>

        {/* ================= SEARCH ================= */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-4xl">

            <div className="relative">
              <input
                type="text"
                placeholder="Search Flamingo products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-[#E4DCC8] bg-white px-6 py-5 text-[#1C1A16] outline-none transition placeholder:text-[#ADA48E] focus:border-[#B5541F] focus:ring-4 focus:ring-[#B5541F]/10"
              />

              <GroupChips category="Flamingo" value={group} onChange={setGroup} />
            </div>

          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl">

            {/* Section Heading */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
                  Flamingo Collection
                </p>

                <h2 className="mt-4 text-4xl font-bold">
                  Available Products
                </h2>
              </div>

              <p className="text-[#5C574B]">
                {brandProducts.length} Products Found
              </p>

            </div>

            {/* Product Grid */}
            {brandProducts.length > 0 ? (

              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                {brandProducts.map((product) => (

                  <div
                    key={product.id}
                    className="group overflow-hidden rounded-3xl border border-[#E4DCC8] bg-white transition duration-300 hover:-translate-y-2 hover:border-[#B5541F]/50 hover:shadow-lg"
                  >

                    {/* PRODUCT IMAGE */}
                    <div className="flex h-82.5 w-full items-center justify-center bg-white">

                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className=" max-w-full max-h-full object-cover transition duration-500 group-hover:scale-105"
                      />

                    </div>

                    {/* PRODUCT DETAILS */}
                    <div className="p-4">

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B5541F]">
                        {product.badge}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {product.name}
                      </h3>

                      <ProductTags product={product} />

                      <p className="mt-4 line-clamp-2 text-[#5C574B]">
                        {product.description}
                      </p>

                      {/* PRICE */}
                      <div className="mt-6 rounded-2xl border border-[#B5541F]/20 bg-[#B5541F]/5 p-4">

                        <p className="text-sm text-[#5C574B]">
                          Price
                        </p>

                        <a href={`https://wa.me/923000140571?text=${encodeURIComponent(`Hello HH Traders, I would like to know the price of ${product.name}`)}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="mt-1 text-2xl font-bold text-[#B5541F] inline-block underline-offset-4 hover:underline">Learn More</a>

                      </div>

                      {/* VIEW BUTTON */}
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="mt-6 w-full rounded-xl bg-[#B5541F] py-4 font-semibold text-[#F5F1E8] transition hover:bg-[#943F14]"
                      >
                        View Product →
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              /* NO PRODUCTS */
              <div className="rounded-3xl border border-[#E4DCC8] bg-white py-12 text-center">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B5541F]">
                  Flamingo Collection
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  No Flamingo Products Found
                </h3>

                <p className="mt-3 text-[#5C574B]">
                  Try searching with a different product name.
                </p>

                <button
                  onClick={() => { setSearch(""); setGroup("All"); }}
                  className="mt-6 rounded-xl bg-[#B5541F] px-6 py-3 font-semibold text-[#F5F1E8] transition hover:bg-[#943F14]"
                >
                  Clear Search
                </button>

              </div>

            )}

          </div>
        </section>

        {/* ================= PRODUCT MODAL ================= */}
        {selectedProduct && (

          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#1C1A16]/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >

            <div
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#E4DCC8] bg-white text-xl text-[#1C1A16] transition hover:bg-white"
              >
                ✕
              </button>

              <div className="grid lg:grid-cols-2">

                {/* MODAL IMAGE */}
              <div className="flex h-112.5 w-full items-center justify-center bg-white p-6 lg:h-150">

                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={700}
                    height={700}
                    className="max-h-full max-w-full object-contain"
                   />

                </div>

                {/* PRODUCT INFORMATION */}
                <div className="p-8 sm:p-10">

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
                    Flamingo Product
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    {selectedProduct.name}
                  </h2>

                  <ProductTags product={selectedProduct} />

                  {/* PRICE */}
                  <div className="mt-6 rounded-2xl border border-[#B5541F]/20 bg-[#B5541F]/5 p-5">

                    <p className="text-sm text-[#5C574B]">
                      Price
                    </p>

                    <a href={`https://wa.me/923000140571?text=${encodeURIComponent(`Hello HH Traders, I would like to know the price of ${selectedProduct.name}`)}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="mt-1 text-3xl font-bold text-[#B5541F] inline-block underline-offset-4 hover:underline">Learn More</a>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-6 leading-7 text-[#5C574B]">
                    {selectedProduct.description}
                  </p>

                  {/* SPECIFICATIONS */}
                  {selectedProduct.specifications?.length > 0 && (
                    <div className="mt-8">

                      <h3 className="mb-4 text-lg font-bold">
                        Specifications
                      </h3>

                      <div className="space-y-3">

                        {selectedProduct.specifications.map((spec) => (

                          <div
                            key={spec}
                            className="rounded-xl border border-[#E4DCC8] bg-white p-4 text-[#3A362E]"
                          >
                            <span className="mr-2 text-[#B5541F]">
                              ✓
                            </span>

                            {spec}
                          </div>

                        ))}

                      </div>

                    </div>
                  )}

                  {/* WHATSAPP BUTTON */}
                  <a
                    href={`https://wa.me/923000140571?text=${encodeURIComponent(
                      `Hello HH Traders, I am interested in ${selectedProduct.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block rounded-xl bg-green-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-500"
                  >
                    Ask About This Product
                  </a>

                </div>

              </div>

            </div>

          </div>

        )}

      </main>

      <Footer />
    </>
  );
}
