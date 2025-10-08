export default function WhyChooseUs() {
  return (
    <section className="bg-[#2A211C] text-[#E5F0B6] px-6 md:px-24 py-16">
      {/* 🔹 Heading */}
      <div className="text-center md:text-left mb-10">
        <p className="uppercase text-lg md:text-2xl tracking-wider text-[#E5F0B6]/80">
          Why choose us?
        </p>
        <h2 className="text-2xl md:text-6xl font-bold leading-snug pt-6 md:pt-4">
          We care about details and 
          the quality of our products
        </h2>
      </div>

      {/* 🔹 Feature List */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-start md:items-center gap-6 md:gap-12">
        {/* Item 1 */}
        <div className="flex items-center gap-3">
          <div className="bg-[#E5F0B6]/50 text-[#2A211C] rounded-md">
            <img src="/images/search.png" alt="Search Icon" className="w-10 md:w-16 h-10 object-contain p-2" />
          </div>
          <p className="text-md md:text-2xl font-semibold text-[#E5F0B6]">
            MANUFACTURED WITH QUALITY MATERIALS
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-3">
          <div className="bg-[#E5F0B6]/50 text-[#2A211C] rounded-md">
            <img src="/images/five.png" alt="5 Years Icon" className="w-10 md:w-16 h-10 object-contain p-2" />
          </div>
          <p className="text-md md:text-2xl font-semibold text-[#E5F0B6]">
            5 YEARS OF WARRANTY FOR EACH PRODUCT
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-3">
          <div className="bg-[#E5F0B6]/50 text-[#2A211C] rounded-md">
            <img src="/images/work.png" alt="Work Icon" className="w-10 h-10 object-contain p-2" />
          </div>
          <p className="text-md md:text-2xl font-semibold text-[#E5F0B6]">
            20 YEARS OF EXPERTISE
          </p>
        </div>
      </div>
    </section>
  );
}
