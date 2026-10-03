export default function Map() {
return ( <section className=" relative overflow-hidden bg-[#F5F1E8] px-6 py-10">


  {/* Background glow */}
  <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#B5541F]/10 blur-3xl"></div>

  <div className="relative flex mx-auto max-w-7xl items-center">

<div>

    {/* Heading */}
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B5541F]">
        Find Us
      </p>

      <h2 className="text-3xl font-bold text-[#1C1A16] md:text-5xl">
        Visit Our Location
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#5C574B]">
        Visit HH Traders Filters and Lubricants Dealer for premium
        lubricants, filters, and professional oil change solutions.
      </p>
    </div>
</div>

    {/* Map Container */}
    <div className="group relative overflow-hidden rounded-2xl border border-[#E4DCC8] bg-white p-2 shadow-xl shadow-[#B5541F]/5 transition-all duration-500 hover:-translate-y-2 hover:border-[#B5541F]/40 hover:shadow-[#B5541F]/10">

      <div className="overflow-hidden rounded-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13684.356463245791!2d70.94453805541991!3d30.96799519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3925a7a6d9c2471f%3A0xb565747906383a69!2sHH%20Traders%20Filters%20and%20Lubricants%20Dealer!5e0!3m2!1sen!2s!4v1788456239944!5m2!1sen!2s"
          width="700"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="HH Traders Filters and Lubricants Dealer Location"
          className="transition duration-700 group-hover:scale-[1.02]"
        />
      </div>

    </div>


  </div>
</section>

);
}
