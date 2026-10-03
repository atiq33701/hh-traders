import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function AboutPage() {
return (
<> <Navbar />


  <main className="overflow-hidden bg-[#F5F1E8] text-[#1C1A16]">

    {/* ================= HERO SECTION ================= */}
    <section className="relative px-6 py-16">

      {/* Background Glow */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#B5541F]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#B5541F]/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl text-center">

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#B5541F]">
          About HH Traders
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Quality Products.
          <span className="block text-[#B5541F]">
            Trusted Service.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#5C574B]">
          HH Traders Filters and Lubricants Dealer is committed to providing
          quality lubricants, automotive filters, and reliable products for
          customers and businesses in Layyah.
        </p>

      </div>

    </section>


    {/* ================= ABOUT BUSINESS ================= */}
    <section className="px-6 py-20">

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Image Placeholder */}
        <div className="group relative">

          <div className="flex min-h-[450px] items-center justify-center rounded-3xl border border-dashed border-[#B5541F]/30 bg-white p-8 transition-all duration-500 hover:border-[#B5541F]/60 hover:bg-[#B5541F]/5">

            {/* Replace this with your image later */}
            <div className="text-center">

<Image
  src="/shop.jpeg"
  alt="HH Traders Filters and Lubricants Dealer"
  width={800}
  height={600}
/>


            </div>

          </div>

          <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-[#B5541F]/15 blur-3xl"></div>

        </div>


        {/* Content */}
        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
            Who We Are
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Your Trusted Automotive Products Partner
          </h2>

          <p className="mt-6 leading-relaxed text-[#5C574B]">
            HH Traders Filters and Lubricants Dealer is a wholesaler based
            in Layyah, Pakistan. We provide lubricants, multigrade engine
            oils, automotive filters, and other products that support
            everyday vehicle maintenance.
          </p>

          <p className="mt-5 leading-relaxed text-[#5C574B]">
            Our goal is simple: provide quality products at reasonable
            rates while maintaining professional and friendly dealing with
            every customer.
          </p>

          <p className="mt-5 leading-relaxed text-[#5C574B]">
            We understand that customers need reliable products for their
            vehicles. That is why we focus on maintaining a useful inventory
            and helping customers choose products suitable for their
            everyday automotive needs.
          </p>


          {/* Stats */}
          <div className="mt-5 grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-[#E4DCC8] bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-[#B5541F]/40">

              <p className="text-3xl font-bold text-[#B5541F]">
                5.0 ★
              </p>

              <p className="mt-2 text-sm text-[#5C574B]">
                Customer Rating
              </p>

            </div>


            <div className="rounded-2xl border border-[#E4DCC8] bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-[#B5541F]/40">

              <p className="text-3xl font-bold text-[#B5541F]">
                Layyah
              </p>

              <p className="mt-2 text-sm text-[#5C574B]">
                Proudly Serving Our Local Community
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>




    {/* ================= WHAT WE OFFER ================= */}
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Products For Everyday Vehicle Maintenance
            </h2>

            <p className="mt-6 leading-relaxed text-[#5C574B]">
              HH Traders supports smooth engine maintenance by providing
              automotive products designed for everyday vehicle needs.
            </p>


            <div className="mt-10 space-y-5">

              <div className="flex gap-4 rounded-2xl border border-[#E4DCC8] bg-white p-5 transition duration-300 hover:border-[#B5541F]/40">

                <div className="text-2xl text-[#B5541F]">✓</div>

                <div>
                  <h3 className="font-bold">
                    Multigrade Engine Oils
                  </h3>

                  <p className="mt-1 text-sm text-[#5C574B]">
                    Lubricants formulated for gasoline engines and everyday
                    vehicle performance.
                  </p>
                </div>

              </div>


              <div className="flex gap-4 rounded-2xl border border-[#E4DCC8] bg-white p-5 transition duration-300 hover:border-[#B5541F]/40">

                <div className="text-2xl text-[#B5541F]">✓</div>

                <div>
                  <h3 className="font-bold">
                    Automotive Filters
                  </h3>

                  <p className="mt-1 text-sm text-[#5C574B]">
                    Filters and related automotive maintenance products.
                  </p>
                </div>

              </div>


              <div className="flex gap-4 rounded-2xl border border-[#E4DCC8] bg-white p-5 transition duration-300 hover:border-[#B5541F]/40">

                <div className="text-2xl text-[#B5541F]">✓</div>

                <div>
                  <h3 className="font-bold">
                    Wholesale Supply
                  </h3>

                  <p className="mt-1 text-sm text-[#5C574B]">
                    Competitive wholesale availability for customers and
                    businesses.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Image Placeholder */}
          <div className="flex max-w-[450px] max-h-150 items-center justify-center rounded-3xl border border-dashed py-4 border-[#B5541F]/30 bg-white transition-all duration-500 hover:border-[#B5541F]/60 hover:bg-[#B5541F]/5">

            {/* Add product image here */}

<Image
  src="/oil.jpeg"
  alt="HH Traders Filters and Lubricants Dealer"
  width={400}
  height={400}
/>

          </div>

        </div>

      </div>

    </section>



    {/* ================= CONTACT CTA ================= */}
    <section className="relative overflow-hidden px-6 py-24">

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#B5541F]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl rounded-3xl border border-[#B5541F]/20 bg-[#B5541F]/5 px-8 py-16 text-center backdrop-blur-xl">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
          Get In Touch
        </p>

        <h2 className="mt-5 text-4xl font-bold md:text-5xl">
          Visit HH Traders in Layyah
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-[#5C574B]">
          Contact us today for quality lubricants, filters, and automotive
          products at competitive rates.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

               <a
                href="https://wa.me/923000140571"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500"
              >
                <span className="flex gap-2">
                <Phone />
                <span>
                  Call us
                  </span>
                </span>
              </a>

          <Link
            href="/contact"
            className="rounded-xl border border-[#E4DCC8] bg-white px-8 py-4 font-semibold text-[#1C1A16] transition duration-300 hover:-translate-y-1 hover:bg-[#B5541F]/5"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>

  </main>

  <Footer />
</>


);
}
