const Partner: React.FC = () => {
  const brands = [
    { src: "/images/gusto.png", alt: "Gusto" },
    { src: "/images/stripe.png", alt: "Stripe" },
    { src: "/images/treehouse.png", alt: "Treehouse" },
    { src: "/images/upwork.png", alt: "Upwork" },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-20 flex flex-col items-center md:flex-row md:justify-center md:gap-20">
      {/* Kiri (Judul) */}
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-4xl md:text-6xl font-bold text-[#2A211C]">25+</h2>
        <p className="text-sm md:text-base tracking-wider text-[#2A211C] mt-1">
          PARTNERED BRANDS
        </p>
      </div>

      {/* Kanan (Logo) */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="w-20 md:w-28 h-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Partner;
