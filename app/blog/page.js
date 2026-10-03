import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { blogs } from "../data/blogs";

export default function BlogPage() {
  const featuredBlog = blogs[0];

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#F5F1E8] text-[#1C1A16]">

        {/* HERO */}
        <section className="relative px-6 py-16 md:py-24">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#B5541F]/10 blur-3xl" />
          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#B5541F]/5 blur-3xl" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#B5541F]">
              HH Traders Blog
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Automotive Knowledge
              <span className="block text-[#B5541F]">
                You Can Trust
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-[#5C574B]">
              Explore helpful articles about engine oils, lubricants,
              automotive filters, and everyday vehicle maintenance from
              HH Traders Filters and Lubricants Dealer.
            </p>
          </div>
        </section>


        {/* FEATURED BLOG */}
        <section className="relative px-6 pb-16">
          <div className="mx-auto max-w-7xl">

            <div className="group grid overflow-hidden rounded-3xl border border-[#E4DCC8] bg-white shadow-xl transition-all duration-500 hover:border-[#B5541F]/40 hover:shadow-[#B5541F]/10 lg:grid-cols-2">

              {/* Featured Image */}
              <div className="relative min-h-[320px] overflow-hidden bg-[#EDE6D4]">
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  priority
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>


              {/* Featured Content */}
              <div className="flex flex-col justify-center p-8 md:p-12">

                <span className="w-fit rounded-full border border-[#B5541F]/20 bg-[#B5541F]/10 px-4 py-2 text-xs font-semibold text-[#B5541F]">
                  Featured Article
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                  {featuredBlog.title}
                </h2>

                <p className="mt-5 leading-relaxed text-[#5C574B]">
                  {featuredBlog.excerpt}
                </p>

                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#B5541F] px-6 py-4 font-semibold text-[#F5F1E8] shadow-lg shadow-[#B5541F]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#943F14] hover:shadow-[#B5541F]/40"
                >
                  Read Article
                  <span>→</span>
                </Link>

              </div>
            </div>
          </div>
        </section>


        {/* BLOGS */}
        <section className="px-6 pb-24">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
                Latest Articles
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Helpful Automotive Insights
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[#5C574B]">
                Learn more about vehicle care, engine oils, lubricants,
                filters, and basic automotive maintenance.
              </p>
            </div>


            {/* BLOG GRID */}
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group overflow-hidden rounded-3xl border border-[#E4DCC8] bg-white transition-all duration-500 hover:-translate-y-3 hover:border-[#B5541F]/40 hover:shadow-2xl hover:shadow-[#B5541F]/10"
                >

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-[#EDE6D4]">

                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Category */}
                    <div className="absolute bottom-5 left-5">
                      <span className="rounded-lg border border-white/20 bg-white/80 px-3 py-2 text-xs font-semibold text-[#943F14] backdrop-blur-md">
                        {blog.category}
                      </span>
                    </div>

                  </div>


                  {/* Content */}
                  <div className="p-7">

                    <p className="text-sm text-[#8A8270]">
                      {blog.date}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-tight transition duration-300 group-hover:text-[#B5541F]">
                      {blog.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-[#5C574B]">
                      {blog.excerpt}
                    </p>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-[#B5541F] transition duration-300 hover:gap-3 hover:text-[#943F14]"
                    >
                      Read More
                      <span>→</span>
                    </Link>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="relative overflow-hidden border-t border-[#E4DCC8] px-6 py-24">

          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#B5541F]/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl rounded-3xl border border-[#B5541F]/20 bg-[#B5541F]/5 px-8 py-16 text-center backdrop-blur-xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
              Need Product Advice?
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Talk With HH Traders
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5C574B]">
              Contact HH Traders Filters and Lubricants Dealer for product
              availability and general information about our engine oils,
              lubricants, and automotive filters.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="https://wa.me/923000140571"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:shadow-green-500/40"
              >
                WhatsApp Us
              </a>

              <Link
                href="/products"
                className="rounded-xl border border-[#E4DCC8] bg-white px-8 py-4 font-semibold text-[#1C1A16] transition duration-300 hover:-translate-y-1 hover:bg-[#B5541F]/5"
              >
                Explore Products
              </Link>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
