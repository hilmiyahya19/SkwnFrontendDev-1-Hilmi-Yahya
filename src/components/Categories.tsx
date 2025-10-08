import { useState } from "react";

export default function Categories() {
  const categories = [
    {
      name: "Bedroom",
      desc: "Relax and unwind in your cozy personal space. Discover designs that enhance comfort and tranquility.",
      images: [
        "/images/living1.png",
        "/images/living2.png",
        "/images/living3.png",
      ],
    },
    {
      name: "Living Room",
      desc: "Enjoy a great living room aesthetics with your family. Designs created for increased comfortability.",
      images: [
        "/images/living1.png",
        "/images/living2.png",
        "/images/living3.png",
      ],
    },
    {
      name: "Home Office",
      desc: "Boost productivity with workspace setups tailored to your needs. Smart, stylish, and efficient.",
      images: [
        "/images/living1.png",
        "/images/living2.png",
        "/images/living3.png",
      ],
    },
    {
      name: "Gaming Room",
      desc: "Create your ultimate gaming setup. Designs that merge style, focus, and comfort for long sessions.",
      images: [
        "/images/living1.png",
        "/images/living2.png",
        "/images/living3.png",
      ],
    },
  ];

  const [selected, setSelected] = useState(1); // default Living Room

  return (
    <div className="flex flex-col-reverse md:flex-row items-start gap-8 px-6 py-10 bg-white">
      {/* ========== Images area ========== */}
      <div className="w-full md:w-2/3">
        {/* Mobile: horizontal scroll (all images same portrait size) */}
        <div className="md:hidden grid grid-cols-3 gap-4 pb-2">
        {categories[selected].images.map((src, i) => (
            <div
            key={i}
            className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm" // 3:4 = vertikal
            >
            <img
                src={src}
                alt={`${categories[selected].name}-${i}`}
                className="w-full h-full object-cover"
            />
            </div>
        ))}
        </div>

        {/* Desktop: 2 small (1/6) + 1 big (2/3) */}
        <div className="hidden md:flex gap-6 items-stretch">
          {/* small 1 */}
          <div className="w-1/6 rounded-2xl overflow-hidden shadow-sm">
            <img
              src={categories[selected].images[0]}
              alt={`${categories[selected].name}-0`}
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* small 2 */}
          <div className="w-1/6 rounded-2xl overflow-hidden shadow-sm">
            <img
              src={categories[selected].images[1]}
              alt={`${categories[selected].name}-1`}
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* big */}
          <div className="w-2/3 rounded-2xl overflow-hidden shadow-md transform transition-transform duration-300">
            <img
              src={categories[selected].images[2]}
              alt={`${categories[selected].name}-2`}
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* ========== Categories / selector area ========== */}
      <div className="w-full md:w-1/3">
        <h3 className="text-center md:text-left text-md md:text-xl mb-2 text-[#2F241F] pt-2 md:pt-4">
          Categories
        </h3>
        <h2 className="pt-2 md:pt-4 pb-4 md:pb-6 text-center md:text-left text-2xl md:text-4xl font-bold mb-4 text-[#2F241F]">
          Furniture Sets Recommendations
        </h2>

        <div className="bg-neutral-50 rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              onClick={() => setSelected(i)}
              className={`cursor-pointer px-6 py-4 transition-all select-none ${
                selected === i
                  ? "bg-lime-100"
                  : "hover:bg-neutral-100"
              }`}
            >
              <p className="font-bold text-lg">{cat.name}</p>
              {selected === i && (
                <p className="text-sm mt-2">{cat.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
