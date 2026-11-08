import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { blogs } from "@/app/data/blogs";


export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (blog) => blog.slug === slug
  );

  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: blog.title,

    description: blog.excerpt,

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [
        {
          url: blog.image,
          alt: blog.title,
        },
      ],
    },
  };
}


export default async function BlogArticlePage({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (blog) => blog.slug === slug
  );


  if (!blog) {
    notFound();
  }


  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.category === blog.category &&
        item.slug !== blog.slug
    )
    .slice(0, 3);


  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-white text-[#1C1A16]">


        {/* ================= ARTICLE HERO ================= */}

        <section className="relative overflow-hidden px-6 py-8 md:py-16 ">

          
          <div className="relative mx-auto max-w-5xl ">

            {/* Back Button */}
<div className="flex justify-between ite#">



            {/* Category */}

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
              {blog.category}
            </p>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5C574B] transition hover:text-[#B5541F]"
              >
              ← Back to Blog
            </Link>
                </div>

            {/* Title */}

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {blog.title}
            </h1>


            {/* Date */}

            <p className="mt-6 text-[#8A8270]">
              Published {blog.date} · HH Traders Filters and Lubricants Dealer
            </p>

          </div>

        </section>


        {/* ================= FEATURED IMAGE ================= */}

        <section className="px-6">

          <div className="mx-auto max-w-6xl">

            <div className="relative h-75 overflow-hidden rounded-3xl border border-[#E4DCC8] md:h-137.5">

              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

            </div>

          </div>

        </section>


        {/* ================= ARTICLE CONTENT ================= */}

        <section className="px-6 py-20 md:py-28">

          <article className="mx-auto max-w-3xl">


            {/* Intro */}

            <p className="text-xl leading-relaxed text-[#3A362E] md:text-2xl">
              {blog.excerpt}
            </p>


            {/* Content */}

            <div className="mt-12 space-y-8">

              {blog.content.map((block, index) => {

                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="pt-4 text-2xl font-bold text-[#1C1A16] md:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                }


                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="text-lg leading-relaxed text-[#5C574B]"
                    >
                      {block.text}
                    </p>
                  );
                }


                if (block.type === "list") {
                  return (
                    <ul
                      key={index}
                      className="space-y-4 rounded-2xl border border-[#E4DCC8] bg-white p-7 text-[#3A362E]"
                    >
                      {block.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center gap-3"
                        >
                          <span className="text-[#B5541F]">
                            ✓
                          </span>

                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }


                return null;
              })}

            </div>


            {/* Contact CTA */}

            <div className="relative mt-16 overflow-hidden rounded-3xl border border-[#B5541F]/20 bg-[#B5541F]/5 p-8 md:p-10">

              
              <div className="relative">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B5541F]">
                  Need Product Information?
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Talk With HH Traders
                </h3>

                <p className="mt-4 leading-relaxed text-[#5C574B]">
                  Contact HH Traders Filters and Lubricants Dealer for
                  information about available engine oils, lubricants,
                  automotive filters, and related products.
                </p>


                <div className="mt-7 flex flex-col gap-4 sm:flex-row">

                  <a
                    href="https://wa.me/923000140571"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-500"
                  >
                    WhatsApp Us
                  </a>


                  <Link
                    href="/products"
                    className="rounded-xl border border-[#E4DCC8] bg-white px-6 py-3 text-center font-semibold text-[#1C1A16] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B5541F]/5"
                  >
                    View Products
                  </Link>

                </div>

              </div>

            </div>

          </article>

        </section>


        {/* ================= RELATED ARTICLES ================= */}

        {relatedBlogs.length > 0 && (

          <section className="border-t border-[#E4DCC8] px-6 py-20">

            <div className="mx-auto max-w-7xl">

              <div className="text-center">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
                  Continue Reading
                </p>

                <h2 className="mt-4 text-4xl font-bold">
                  Related Articles
                </h2>

              </div>


              <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                {relatedBlogs.map((item) => (

                  <Link
                    key={item.id}
                    href={`/blog/${item.slug}`}
                    className="group overflow-hidden rounded-3xl border border-[#E4DCC8] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#B5541F]/40"
                  >

                    <div className="relative h-52 overflow-hidden">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                    </div>


                    <div className="p-6">

                      <p className="text-sm text-[#B5541F]">
                        {item.category}
                      </p>

                      <h3 className="mt-3 text-xl font-bold transition group-hover:text-[#B5541F]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-[#5C574B]">
                        {item.excerpt}
                      </p>

                      <p className="mt-6 font-semibold text-[#B5541F]">
                        Read Article →
                      </p>

                    </div>

                  </Link>

                ))}

              </div>

            </div>

          </section>

        )}


        {/* ================= BOTTOM CTA ================= */}

        <section className="px-6 pb-24">

          <div className="mx-auto max-w-5xl rounded-3xl border border-[#E4DCC8] bg-white p-10 text-center md:p-16">

            <h2 className="text-3xl font-bold md:text-5xl">
              Looking for Quality Automotive Products?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[#5C574B]">
              Explore the range of products available from HH Traders Filters
              and Lubricants Dealer.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-xl bg-[#B5541F] px-8 py-4 font-semibold text-[#F5F1E8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#943F14]"
            >
              Explore Products →
            </Link>

          </div>

        </section>


      </main>

      <Footer />
    </>
  );
}
