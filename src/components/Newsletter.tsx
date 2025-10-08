// import { Mail } from "lucide-react";

// export default function Newsletter() {
//   return (
//     <section className="justify-center py-16 px-5 md:px-10 bg-[#FCFAF8] md:py-20">
//       {/* Label */}
//       <p className="text-sm md:text-base tracking-wide text-[#3B312C] mb-4 font-medium">
//         LIMITED DEALS
//       </p>

//       {/* Heading */}
//       <h2 className="text-2xl md:text-6xl font-bold text-[#2E2622] max-w-xl leading-snug mb-8">
//         Become a member and get 10% off of your first purchase
//       </h2>

//       {/* Input Email */}
//       <div className="flex items-center w-full max-w-md rounded-lg overflow-hidden shadow-sm border border-transparent focus-within:border-[#E3E3E3]">
//         <input
//           type="email"
//           placeholder="Enter your email here"
//           className="flex-1 py-3 px-5 text-base text-[#3B312C] bg-white focus:outline-none"
//         />
//         <button
//           aria-label="Subscribe"
//           className="bg-[#E6F1BE] flex items-center justify-center px-4 py-3 hover:bg-[#DBEBA6] transition-colors"
//         >
//           <Mail className="text-[#3B312C]" />
//         </button>
//       </div>
//     </section>
//   );
// }

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="w-full bg-[#FCFAF8] py-16 px-6 md:py-20 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Kiri dan Kanan - Text dan Input */}
        <div className="w-full text-center md:text-left">
          {/* Text Section (Full Width) */}
          <div className="w-full mb-8">
            <p className="text-sm md:text-base tracking-wide text-[#2F241F] mb-4 font-medium uppercase">
              LIMITED DEALS
            </p>

            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-[#2F241F] leading-snug max-w-none">
              Become a member and get 10% off of your first purchase
            </h2>
          </div>

          {/* Input Section (Half Width di Desktop) */}
          <div className="w-full flex justify-center md:justify-start">
            <div className="flex items-center w-full md:w-1/2 max-w-md md:max-w-none rounded-lg overflow-hidden shadow-sm border border-transparent focus-within:border-[#E3E3E3]">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 py-3 px-5 text-base text-[#553B33] placeholder-[#553B33]/70 bg-white focus:outline-none"
              />
              <button
                aria-label="Subscribe"
                className="bg-[#E6F1BE] flex items-center justify-center px-4 py-3 hover:bg-[#DBEBA6] transition-colors cursor-pointer"
              >
                <Mail className="text-[#2F241F]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
