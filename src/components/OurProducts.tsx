import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import type { NavigationOptions } from 'swiper/types'
import { getProducts } from "../lib/api/furnitureApi"; // ✅ IMPORT API
import type { Product } from "../types/product"; // ✅ IMPORT TYPE";

export default function OurProducts() {
  const [activeIndex, setActiveIndex] = useState(0)
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const [products, setProducts] = useState<Product[]>([]);

  // 🧩 Load data dari MockAPI
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  // 🧩 Gunakan ID agar Swiper bisa temukan tombol dari DOM
  useEffect(() => {
    prevRef.current = document.querySelector('#prevBtn')
    nextRef.current = document.querySelector('#nextBtn')
  }, [])

  return (
    <section className="bg-[#241C17] text-[#E9F5A6] py-16 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 px-6 md:px-16">
        <div>
          <p className="text-sm uppercase tracking-wider mb-2">Our Products</p>
          <h2 className="text-xl md:text-4xl font-semibold">
            This month’s best seller
          </h2>
        </div>
        <button className="bg-[#E9F5A6] text-[#241C17] px-5 py-2 rounded-md hover:opacity-90 transition cursor-pointer">
          SEE MORE
        </button>
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.3}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.3 },
            1280: { slidesPerView: 4.3 },
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as NavigationOptions
            navigation.prevEl = '#prevBtn'
            navigation.nextEl = '#nextBtn'
          }}
          navigation={{
            prevEl: '#prevBtn',
            nextEl: '#nextBtn',
          }}
          className="overflow-visible"
        >
          {products.map((p, index) => {
            const isActive = index === activeIndex
            return (
              <SwiperSlide key={p.id}>
                <div
                  className={`relative bg-[#2E241D] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                    isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-[350px] object-cover"
                  />
                  {isActive && (
                    <>
                      <span className="absolute bottom-14 left-4 bg-white/50 text-[#241C17] text-sm font-semibold px-3 py-1 rounded-md">
                        {p.price}
                      </span>
                      <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
                        {p.name}
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* 📱 Tombol Navigasi Mobile */}
        <button
          id="prevBtn"
          className="absolute top-1/2 -translate-y-1/2 left-2 w-14 h-14 flex items-center justify-center 
          bg-[#E9F5A6]/90 text-[#241C17] rounded-full hover:scale-105 transition cursor-pointer md:hidden z-10"
        >
          <FiChevronLeft size={20} />
        </button>

        <button
          id="nextBtn"
          className="absolute top-1/2 -translate-y-1/2 right-2 w-14 h-14 flex items-center justify-center 
          bg-[#E9F5A6]/90 text-[#241C17] rounded-full hover:scale-105 transition cursor-pointer md:hidden z-10"
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* 💻 Tombol Navigasi Desktop */}
      <div className="hidden md:flex gap-4 mt-10 justify-end px-6 md:px-16">
        <button
          id="prevBtn"
          className="w-10 h-10 flex items-center justify-center bg-[#E9F5A6] text-[#241C17] 
          rounded-full hover:scale-105 transition cursor-pointer"
        >
          <FiChevronLeft size={22} />
        </button>
        <button
          id="nextBtn"
          className="w-10 h-10 flex items-center justify-center bg-[#E9F5A6] text-[#241C17] 
          rounded-full hover:scale-105 transition cursor-pointer"
        >
          <FiChevronRight size={22} />
        </button>
      </div>
    </section>
  )
}
