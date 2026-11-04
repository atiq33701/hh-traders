"use client";

import { useState } from "react";
import { Phone, MessageCircle, PackageCheck, MapPin } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {

    const [formData, setFormData] = useState({
  name: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappNumber = "923000140571";

  const whatsappMessage = `Hello HH Traders,

*Name:* ${formData.name}

*Message:*
${formData.message}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");
};


return (
<> <Navbar />


  <main className="min-h-screen overflow-hidden bg-[#F5F1E8] text-[#1C1A16]">

    {/* ================= HERO SECTION ================= */}
    <section className="relative px-6 py-16">

      {/* Background Glow */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#B5541F]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#B5541F]/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl text-center">

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#B5541F]">
          Contact HH Traders
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Let's Keep Your
          <span className="block text-[#B5541F]">
            Engine Running Smoothly
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#5C574B]">
          Contact HH Traders Filters and Lubricants Dealer for quality
          engine oils, automotive filters, lubricants, and wholesale
          automotive products in Layyah.
        </p>

      </div>

    </section>


    {/* ================= CONTACT INFORMATION ================= */}
    <section className="px-6 pb-24">

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">


        {/* Phone */}
           <a
                href="https://wa.me/923000140571"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-[#E4DCC8] bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-green-500/50 hover:bg-green-50"
              >


          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:bg-green-600">
            <Phone className="h-5 w-5 text-green-600 group-hover:text-white" />
          </div>

          <h2 className="mt-7 text-2xl font-bold">
            Call Us
          </h2>

          <p className="mt-3 text-[#5C574B]">
            Speak directly with HH Traders for product information and
            availability.
          </p>

          <p className="mt-6 text-lg font-semibold text-green-700">
            +92 300 0140571
          </p>

        </a>


        {/* Email */}
        <a
          href="mailto:your-email@example.com"
          className="group rounded-3xl border border-[#E4DCC8] bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#B5541F]/50 hover:bg-[#B5541F]/5"
        >

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B5541F]/10 text-3xl text-[#B5541F] transition duration-500 group-hover:scale-110 group-hover:bg-[#B5541F] group-hover:text-white">
            <MessageCircle />
          </div>

          <h2 className="mt-7 text-2xl font-bold">
            Email Us
          </h2>

          <p className="mt-3 text-[#5C574B]">
            Send us your questions and inquiries about our products and
            services.
          </p>

          <p className="mt-6 text-lg font-semibold text-[#B5541F]">
            sami1981.rot@gmail.com
          </p>

        </a>


        {/* Location */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=HH+Traders+Filters+and+Lubricants+Dealer+Layyah"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl border border-[#E4DCC8] bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#B5541F]/50 hover:bg-[#B5541F]/5"
        >

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B5541F]/10 text-3xl text-[#B5541F] transition duration-500 group-hover:scale-110 group-hover:bg-[#B5541F] group-hover:text-white">
            <MapPin />
          </div>

          <h2 className="mt-7 text-2xl font-bold">
            Visit Us
          </h2>

          <p className="mt-3 text-[#5C574B]">
            Visit our business location for quality lubricants and
            automotive filters.
          </p>

          <p className="mt-6 text-sm font-semibold leading-relaxed text-[#B5541F]">
            General Bus Stand, Layyah, 31200, Pakistan
          </p>

        </a>

      </div>

    </section>


    {/* ================= MAIN CONTACT SECTION ================= */}
    <section className="border-y border-[#E4DCC8] bg-white px-6 py-12">
    <div className="flex flex-col items-center">
 <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            We're Here To Help
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-[#5C574B]">
            Whether you are looking for engine oils, lubricants,
            automotive filters, or wholesale products, contact HH Traders
            and our team will be happy to assist you.
          </p>
          </div>
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">


        {/* LEFT CONTENT */}
        <div>




          {/* Contact Details */}
          <div className="mt-5 space-y-5">


                <Link
                href="https://wa.me/923000140571"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-5 rounded-2xl border border-[#E4DCC8] bg-[#F5F1E8] p-5 transition duration-300 hover:border-green-500/40"
              >


              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600/10 text-xl">
                <Phone className="h-5 w-5 text-green-600" />
              </div>

              <div>
                <p className="font-semibold">
                  Phone Number
                </p>
<span className="text-[#5C574B]">+92 3000140571</span>
            </div>
              </Link>


              <Link
          href="https://www.google.com/maps/search/?api=1&query=HH+Traders+Filters+and+Lubricants+Dealer+Layyah"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-5 rounded-2xl border border-[#E4DCC8] bg-[#F5F1E8] p-5 transition duration-300 hover:border-[#B5541F]/40"
        >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B5541F]/10 text-xl text-[#B5541F]">
                <MapPin />
              </div>

              <div>
                <p className="font-semibold">
                  Business Location
                </p>

                <p className="mt-1 text-[#5C574B]">
                  General Bus Stand, Layyah, 31200, Pakistan
                </p>

              </div>

            </Link>


            <div className="flex gap-5 rounded-2xl border border-[#E4DCC8] bg-[#F5F1E8] p-5 transition duration-300 hover:border-[#B5541F]/40">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B5541F]/10 text-xl">
                🕘
              </div>

              <div>
                <p className="font-semibold">
                  Business Hours
                </p>

                <p className="mt-1 text-[#5C574B]">
                 Opens from 9 AM to 8 PM
                </p>

              </div>

            </div>


            <Link href={'/products'} className="flex gap-5 rounded-2xl border border-[#E4DCC8] bg-[#F5F1E8] p-5 transition duration-300 hover:border-[#B5541F]/40">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B5541F]/10 text-xl">
                <PackageCheck className="text-[#B5541F]"/>
              </div>

              <div>
                <p className="font-semibold">
                  Our Products
                </p>

                <p className="mt-1 text-[#5C574B]">
                  Engine oils, lubricants, automotive filters, and
                  wholesale automotive products.
                </p>

              </div>

            </Link>

          </div>

        </div>


        {/* RIGHT CONTACT FORM */}
        <div className="relative mt-5">

          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#B5541F]/15 blur-3xl"></div>

          <div className="relative rounded-3xl border border-[#E4DCC8] bg-[#F5F1E8] p-8 shadow-xl md:p-10">

            <h2 className="text-3xl font-bold">
              Send Us A Message
            </h2>

            <p className="mt-3 text-[#5C574B]">
              Fill out the form below and we will get back to you.
            </p>


           <form
  onSubmit={handleSubmit}
  className="mt-4 space-y-2"
>
  {/* Name */}
  <div>
    <label
      htmlFor="name"
      className="mb-2 block text-sm font-medium text-[#5C574B]"
    >
      Your Name
    </label>

    <input
      id="name"
      name="name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      required
      placeholder="Enter your name"
      className="w-full rounded-xl border border-[#E4DCC8] bg-white px-5 py-3 text-[#1C1A16] outline-none transition duration-300 placeholder:text-[#ADA48E] focus:border-[#B5541F] focus:ring-4 focus:ring-[#B5541F]/10"
    />
  </div>

  {/* Message */}
  <div>
    <label
      htmlFor="message"
      className="mb-2 block text-sm font-medium text-[#5C574B]"
    >
      Your Message
    </label>

    <textarea
      id="message"
      name="message"
      rows="3"
      value={formData.message}
      onChange={handleChange}
      required
      placeholder="Tell us how we can help you..."
      className="w-full resize-none rounded-xl border border-[#E4DCC8] bg-white px-5 py-3 text-[#1C1A16] outline-none transition duration-300 placeholder:text-[#ADA48E] focus:border-[#B5541F] focus:ring-4 focus:ring-[#B5541F]/10"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:shadow-green-500/40 active:translate-y-0 active:scale-[0.98]"
  >
    Send via WhatsApp
  </button>
</form>

          </div>

        </div>

      </div>

    </section>




    {/* ================= BACK TO HOME ================= */}
    <section className="px-6 pt-6 pb-12 text-center">

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#5C574B] transition duration-300 hover:text-[#B5541F]"
      >
        ← Back to Home
      </Link>

    </section>

  </main>

  <Footer />
</>


);
}
