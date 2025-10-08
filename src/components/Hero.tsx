import { ArrowRight, PlayCircle, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-10 items-center justify-between bg-white">
      {/* 🔹 Left Side - Text & Buttons (6/10 bagian) */}
      <div className="md:col-span-6 text-center md:text-left px-6 md:px-32 py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          The kind of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-lime-800">
            furniture
          </span>{" "}
          you have been looking for
        </h1>

        {/* 🔹 Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <button className="flex items-center gap-2 bg-[#E5F0B6] hover:bg-[#d8e4a4] text-[#553B33] font-medium px-6 py-3 rounded-md transition cursor-pointer">
            <Search className="w-5 h-5" />
            SEARCH CATALOG
          </button>

          <button className="flex items-center gap-2 border border-[#553B33] hover:bg-gray-200 px-6 py-3 rounded-md text-[#553B33] font-medium transition cursor-pointer">
            <PlayCircle className="w-5 h-5" />
            WATCH VIDEOS
          </button>
        </div>
      </div>

      {/* 🔹 Right Side - Product Highlight (4/10 bagian) */}
      <div className="md:col-span-4 relative w-full md:mt-0 flex justify-center">
        {/* 🔸 Mobile Image */}
        <img
            src="/images/sofa-mobile.png"
            alt="Highlighted Product Mobile"
            className="block md:hidden w-full h-[233px] object-cover"
        />

        {/* 🔸 Desktop Image */}
        <img
            src="/images/sofa.png"
            alt="Highlighted Product Desktop"
            className="hidden md:block w-[522px] h-[709px] object-cover"
        />
          
          {/* 🔹 Overlay content */}
          <div
            className="
              absolute
              top-4 left-4 
              md:bottom-6 md:left-6 md:top-auto 
              text-white
            "
          >
            <p className="text-xs uppercase tracking-wide text-gray-200 mb-2 block md:hidden">
              Highlighted Product
            </p>
            <div className="inline-block bg-white/80 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
              $329
            </div>
            <h2 className="text-2xl font-light mb-3">Pösht Sofa</h2>
            <button className="flex items-center gap-2 bg-[#2A211C] text-white px-5 py-2 rounded-md text-sm hover:bg-[#3c3029] transition cursor-pointer">
              VIEW DETAILS <ArrowRight className="w-4 h-4" />
            </button>
          </div>

      </div>
    </section>
  );
}
