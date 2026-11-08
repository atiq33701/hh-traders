import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Map from "./components/Map";

import {
  Phone,
  BadgeCheck,
  PackageCheck,
  Handshake,
  MapPin,
  Timer,
} from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-[#1C1A16]">

        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:py-20">

          {/* Background Effects */}
          
          
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">

            {/* Left Content */}
            <div className="text-center lg:text-left">

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Premium Care

                <span className="block text-[#B5541F]">
                  For Your Engine
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5C574B] sm:mt-7 sm:text-lg lg:mx-0">
                HH Traders Filters and Lubricants Dealer provides quality
                lubricants, multigrade engine oils, automotive filters, and
                reliable oil change solutions in Layyah.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-start">

                <a
                  href="https://wa.me/923000140571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-[#B5541F] px-7 py-4 text-center font-semibold text-[#F5F1E8] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#943F14] hover:shadow-[#B5541F]/30 sm:w-auto"
                >
                  Call Us
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=HH+Traders+Filters+and+Lubricants+Dealer+Layyah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl border border-[#E4DCC8] bg-white px-7 py-4 text-center font-semibold text-[#1C1A16] transition-all duration-300 hover:-translate-y-1 hover:border-[#B5541F]/50 hover:bg-[#B5541F]/5 sm:w-auto"
                >

                  Find Our Location →
                </a>

              </div>

              {/* Quick Trust Info */}
              <div className="mt-10 grid grid-cols-3 gap-4 text-center text-sm sm:flex sm:flex-wrap sm:justify-center sm:gap-8 lg:justify-start">

                <div>
                  <p className="text-xl font-bold text-[#1C1A16] sm:text-2xl">
                    5.0 ★
                  </p>

                  <p className="mt-1 text-xs text-[#5C574B] sm:text-sm">
                    Customer Rating
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold text-[#1C1A16] sm:text-2xl">
                    Trusted
                  </p>

                  <p className="mt-1 text-xs text-[#5C574B] sm:text-sm">
                    Dealer in Layyah
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold text-[#1C1A16] sm:text-2xl">
                    Best Rates
                  </p>

                  <p className="mt-1 text-xs text-[#5C574B] sm:text-sm">
                    Competitive Pricing
                  </p>
                </div>

              </div>

            </div>


            {/* Right Card */}
            <div className="relative">

              <div className="rounded-2xl border border-[#E4DCC8] bg-white p-5 shadow-xl transition duration-500 hover:-translate-y-2 hover:border-[#B5541F]/40 sm:rounded-3xl sm:p-8">

                {/* Logo */}
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-[#B5541F]/30 bg-[#B5541F]/10 shadow-lg shadow-[#B5541F]/10">

                  <Image
                    className="rounded-xl object-cover"
                    src="/images/logo/logo.jpeg"
                    width={200}
                    height={200}
                    alt="HH Traders Logo"
                  />

                </div>


                <h2 className="mt-6 text-2xl font-bold sm:text-3xl text-[#B5541F]">
                  HH{" "}

                  <span className="text-[#B5541F]">
                    Traders
                  </span>
                </h2>


                <p className="mt-2 text-sm text-[#B5541F]/80 sm:text-base">
                  Filters & Lubricants Dealer
                </p>


                <div className="mt-8 space-y-6 border-t border-[#E4DCC8] pt-6">

                  {/* Location */}
                  <div className="flex items-start gap-3 sm:gap-4">

                    <span className="mt-1 text-xl">
                      <MapPin className="text-[#B5541F]"/>
                    </span>

                    <div>

                      <p className="font-semibold">
                        Our Location
                      </p>

                      <p className="mt-1 text-sm leading-relaxed text-[#5C574B]">
                        <a
                  href="https://www.google.com/maps/search/?api=1&query=HH+Traders+Filters+and+Lubricants+Dealer+Layyah"
                  target="_blank"
                  rel="noopener noreferrer">
                        General Bus Stand, Layyah, 31200, Pakistan
                  </a>
                      </p>

                    </div>

                  </div>


                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-4">

                    <Phone className="mt-1 h-5 w-5 shrink-0 text-[#B5541F]" />

                    <div>

                      <p className="font-semibold text-[#1C1A16]">
                        Call Us
                      </p>

                         <a
                  href="https://wa.me/923000140571"
                  target="_blank"
                  rel="noopener noreferrer"
                        className="mt-1 block text-sm text-[#5C574B] transition hover:text-[#B5541F]"
                      >
                        +92 300 0140571
                      </a>

                    </div>

                  </div>


                  {/* Business Hours */}
                  <div className="flex items-start gap-3 sm:gap-4">

                    <span className="mt-1 text-xl">
                      🕘
                    </span>

                    <div>

                      <p className="font-semibold text-[#1C1A16]">
                        Business Hours
                      </p>

                      <p className="mt-1 text-sm text-[#5C574B]">
                        Opens from 9:00 AM to 8:00 PM
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* Decorative Glow */}
              
            </div>

          </div>

        </section>


        {/* ================= WHY CHOOSE US ================= */}
        <section className="border-y border-[#E4DCC8] bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5541F] sm:text-sm sm:tracking-[0.3em]">
                Why HH Traders
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                Quality Products. Better Service.
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-[#5C574B] sm:text-base">
                We focus on providing genuine products, reasonable rates,
                professional dealing, and a better customer experience.
              </p>

            </div>


            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">

              {/* Card 1 */}
              <div className="group rounded-2xl border border-[#E4DCC8] bg-white p-6 transition-all duration-500 hover:-translate-y-3 hover:border-[#B5541F]/50 hover:bg-white sm:p-7">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B5541F]/10 text-[#B5541F] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#B5541F] group-hover:text-white">
                  <BadgeCheck size={30} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Best Rates
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#5C574B] sm:text-base">
                  Competitive and reasonable wholesale rates for quality
                  lubricants and automotive products.
                </p>

              </div>


              {/* Card 2 */}
              <div className="group rounded-2xl border border-[#E4DCC8] bg-white p-6 transition-all duration-500 hover:-translate-y-3 hover:border-[#B5541F]/50 hover:bg-white sm:p-7">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B5541F]/10 text-[#B5541F] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#B5541F] group-hover:text-white">
                  <PackageCheck size={30} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Quality Products
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#5C574B] sm:text-base">
                  Reliable lubricants, multigrade oils, and automotive filters
                  for everyday vehicle maintenance.
                </p>

              </div>


              {/* Card 3 */}
              <div className="group rounded-2xl border border-[#E4DCC8] bg-white p-6 transition-all duration-500 hover:-translate-y-3 hover:border-[#B5541F]/50 hover:bg-white sm:p-7">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B5541F]/10 text-[#B5541F] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#B5541F] group-hover:text-white">
                  <Handshake size={30} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Good Behavior
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#5C574B] sm:text-base">
                  Friendly and professional dealing with helpful advice for
                  customers and businesses.
                </p>

              </div>


              {/* Card 4 */}
              <div className="group rounded-2xl border border-[#E4DCC8] bg-white p-6 transition-all duration-500 hover:-translate-y-3 hover:border-[#B5541F]/50 hover:bg-white sm:p-7">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B5541F]/10 text-[#B5541F] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#B5541F] group-hover:text-white">
                  <Timer size={30} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Fast Service
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#5C574B] sm:text-base">
                  Well-stocked inventory and efficient order handling for a
                  smooth and reliable experience.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= REVIEWS ================= */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5541F] sm:text-sm sm:tracking-[0.3em]">
                Customer Reviews
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
                Trusted By Our Customers
              </h2>

              <div className="mt-5 text-xl text-yellow-500 sm:text-2xl">
                ★★★★★
              </div>

              <p className="mt-2 text-sm text-[#5C574B] sm:text-base">
                5.0 Rating from customer reviews
              </p>

            </div>


            <div className="grid gap-5 md:grid-cols-2 sm:gap-8">

              {/* Review 1 */}
              <div className="rounded-2xl border border-[#E4DCC8] bg-white p-6 transition duration-500 hover:border-[#B5541F]/40 hover:shadow-md sm:p-8">

                <div className="text-xl text-yellow-500">
                  ★★★★★
                </div>

                <p className="mt-6 text-base leading-relaxed text-[#3A362E] sm:text-lg">
                  "Best Rates, Best Products, Good Behavior, Best Environment."
                </p>

                <p className="mt-6 font-semibold text-[#1C1A16]">
                  Syed Waseem
                </p>

              </div>


              {/* Review 2 */}
              <div className="rounded-2xl border border-[#E4DCC8] bg-white p-6 transition duration-500 hover:border-[#B5541F]/40 hover:shadow-md sm:p-8">

                <div className="text-xl text-yellow-500">
                  ★★★★★
                </div>

                <p className="mt-6 text-base leading-relaxed text-[#3A362E] sm:text-lg">
                  "Excellent experience with HH Traders. Their product quality,
                  reasonable wholesale rates, and professional dealing make
                  them a trusted wholesaler in Layyah."
                </p>

                <p className="mt-6 font-semibold text-[#1C1A16]">
                  Liaqat Ali Liaqat
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= MAP ================= */}
        <div id="location">
          <Map />
        </div>

      </main>

      <Footer />
    </>
  );
}
