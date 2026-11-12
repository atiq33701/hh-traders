"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { products } from "../../data/products";
import { ProductTags, RoleTag, GroupChips } from "../../components/ProductTags";

export default function TotalProductsPage() {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* FILTER TOTAL PRODUCTS ONLY */
  const totalProducts = products
    .filter((product) => {
      const matchesCategory = product.category === "Total";

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const matchesGroup = group === "All" || product.group === group;

      return matchesCategory && matchesSearch && matchesGroup;
    });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#1C1A16]">

        {/* HERO */}
        <section className="relative overflow-hidden px-6 py-10">

          
          {/* BACK BUTTON */}
          <div className="relative mx-auto max-w-7xl">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E4DCC8] bg-white px-5 py-3 text-sm font-semibold text-[#B5541F] transition hover:border-[#B5541F] hover:bg-[#B5541F]/5"
            >
              ← Back to Products
            </Link>
            <RoleTag category="Total" className="ml-3" />
          </div>

          {/* HERO CONTENT */}
          <div className="relative mx-auto max-w-5xl text-center">

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-[#B5541F]">
              Total Products
            </p>

            <h1 className="mt-5 text-5xl font-bold md:text-7xl">
              Total
              <span className="block text-[#B5541F]">
                Oils & Lubricants
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg text-[#5C574B]">
              Explore available Total oils and lubricant products
              at HH Traders Filters and Lubricants Dealer.
            </p>

          </div>
        </section>

        {/* SEARCH */}
        <section className="px-6 pb-10">
          <div className="mx-auto max-w-4xl">

            <input
              type="text"
              placeholder="Search Total products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-[#E4DCC8] bg-white px-6 py-5 text-[#1C1A16] outline-none placeholder:text-[#ADA48E] focus:border-[#B5541F]"
            />

              <GroupChips category="Total" value={group} onChange={setGroup} />

          </div>
        </section>

        {/* PRODUCTS */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 flex items-end justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
                  Total Collection
                </p>

                <h2 className="mt-4 text-4xl font-bold text-[#1C1A16]">
                  Available Products
                </h2>
              </div>

              <p className="text-[#5C574B]">
                {totalProducts.length} Products Found
              </p>

            </div>

            {totalProducts.length > 0 ? (

              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                {totalProducts.map((product) => (

                  <div
                    key={product.id}
                    className="group overflow-hidden rounded-3xl border border-[#E4DCC8] bg-white transition duration-300 hover:-translate-y-2 hover:border-[#B5541F]/50 hover:shadow-xl"
                  >

                    {/* PRODUCT IMAGE */}
                    <div className="relative flex h-82.5 w-full items-center justify-center bg-white">

                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                    </div>

                    {/* PRODUCT DETAILS */}
                    <div className="p-7">

                      <h3 className="text-2xl font-bold text-[#1C1A16]">
                        {product.name}
                      </h3>

                      <ProductTags product={product} />

                      <p className="mt-4 line-clamp-2 text-[#5C574B]">
                        {product.description}
                      </p>

                      {/* PRICE */}
                      <div className="mt-6 rounded-2xl border border-[#B5541F]/20 bg-[#B5541F]/10 p-4">

                        <p className="text-sm text-[#5C574B]">
                          Price
                        </p>

                        <a href={`https://wa.me/923000140571?text=${encodeURIComponent(`Hello HH Traders, I would like to know the price of ${product.name}`)}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="mt-1 text-2xl font-bold text-[#B5541F] inline-block underline-offset-4 hover:underline">Learn More</a>

                      </div>

                      {/* VIEW PRODUCT */}
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="mt-6 w-full rounded-xl bg-[#B5541F] py-4 font-semibold text-white transition hover:bg-[#943F14]"
                      >
                        View Product →
                      </button>

                    </div>
                  </div>

                ))}

              </div>

            ) : (

              <div className="rounded-3xl border border-[#E4DCC8] bg-white py-20 text-center">

                <h3 className="text-2xl font-bold text-[#1C1A16]">
                  No Total Products Found
                </h3>

                <button
                  onClick={() => { setSearch(""); setGroup("All"); }}
                  className="mt-6 rounded-xl bg-[#B5541F] px-6 py-3 font-semibold text-white transition hover:bg-[#943F14]"
                >
                  Clear Search
                </button>

              </div>

            )}

          </div>
        </section>

        {/* PRODUCT MODAL */}
        {selectedProduct && (

          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >

            <div
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-5 top-5 z-20 rounded-full bg-white px-4 py-2 text-[#1C1A16] transition hover:bg-[#E4DCC8]"
              >
                ✕
              </button>

              <div className="grid lg:grid-cols-2">

                {/* MODAL IMAGE */}
                <div className="relative flex h-112.5 w-full items-center justify-center bg-white lg:h-150">

                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* PRODUCT INFORMATION */}
                <div className="bg-white p-10">

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
                    Total Product
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-[#1C1A16]">
                    {selectedProduct.name}
                  </h2>

                  <ProductTags product={selectedProduct} />

                  {/* PRICE */}
                  <div className="mt-6 rounded-2xl border border-[#B5541F]/20 bg-[#B5541F]/10 p-5">

                    <p className="text-sm text-[#5C574B]">
                      Price
                    </p>

                    <a href={`https://wa.me/923000140571?text=${encodeURIComponent(`Hello HH Traders, I would like to know the price of ${selectedProduct.name}`)}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="mt-1 text-3xl font-bold text-[#B5541F] inline-block underline-offset-4 hover:underline">Learn More</a>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-6 text-[#5C574B]">
                    {selectedProduct.description}
                  </p>

                  {/* SPECIFICATIONS */}
                  <div className="mt-8 space-y-3">

                    {selectedProduct.specifications?.map((spec) => (

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