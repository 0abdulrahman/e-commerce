"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function MainSlider() {
  return (
    <section className="container hidden md:block">
      <ul className="grid grid-cols-6 grid-rows-3 gap-3 h-[80vh]">
        {/* Slider ------------------------------------------------------------- */}
        <li className="col-span-4 row-span-2 rounded-lg overflow-hidden">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="h-full">
            <SwiperSlide className="relative">
              <Image src="/assets/1.jpg" alt="مستلزمات" sizes="50vw" fill priority className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image src="/assets/2.jpg" alt="أجهزة منزلية" sizes="50vw" fill priority className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <Image src="/assets/3.jpg" alt="موبايلات وهواتف" sizes="50vw" fill priority className="h-full w-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </li>
        {/* Drinks ------------------------------------------------------------- */}
        <li className="flex flex-col items-start rounded-lg overflow-hidden p-6 bg-lime-500">
          <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase bg-white/20 text-zinc-800">مشروبات</span>
          <p className="mt-3 uppercase font-bold text-lg text-zinc-800 max-w-[70%]">مشروبات باردة وغازية</p>
        </li>
        {/* Babies ------------------------------------------------------------- */}
        <li className="flex flex-col items-start p-6 relative before before:absolute before:bg-zinc-300 before:inset-0 before:rounded-lg">
          <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase bg-white/50 text-zinc-800 relative z-[1]">أطفال ورضّع</span>
          <p className="mt-3 uppercase font-bold text-lg text-zinc-800 max-w-[70%] relative z-[1]">منتجات ومستلزمات الأطفال</p>
          <Image
            src="/assets/baby.png"
            alt="الأطفال والرضع"
            width={180}
            height={200}
            priority
            className="absolute top-0 left-0 -translate-x-20 -translate-y-5"
          />
        </li>
        {/* Personal Care ------------------------------------------------------ */}
        <li className="flex flex-col items-start col-span-2 p-6 relative">
          <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase bg-black/30 text-white relative z-[1]">عناية الشخصية</span>
          <p className="mt-3 max-w-[200px] uppercase font-bold text-2xl drop-shadow text-white relative z-[1]">منتجات العناية الشخصية</p>
          <Image src="/assets/personal-care.jpg" alt="الأطفال والرضع" fill priority className="w-full h-full object-cover rounded-lg" />
        </li>
        {/* Electronics ------------------------------------------------------------- */}
        <li className="col-span-2 flex flex-col items-start p-6 relative before before:absolute before:bg-cyan-400 before:inset-0 before:rounded-lg">
          <span className="self-end px-3 py-1 rounded-sm text-xs font-bold uppercase bg-white/20 text-zinc-800 relative z-[1]">
            الكترونيات
          </span>
          <p className="self-end mt-3 text-left uppercase font-bold text-2xl text-zinc-800 max-w-[200px] relative z-[1]">
            لابتوب وموبايل وكمبيوتر
          </p>
          <Image
            src="/assets/baby.png"
            alt="الأطفال والرضع"
            width={180}
            height={200}
            priority
            className="absolute top-0 right-0 translate-x-10"
          />
        </li>
        {/* Home & Pet ------------------------------------------------------------- */}
        <li className="col-span-2 flex flex-col items-start p-6 relative before before:absolute before:bg-rose-600 before:inset-0 before:rounded-lg">
          <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase bg-white/20 text-white relative z-[1]">
            منزل وحيوانات أليفة
          </span>
          <p className="mt-3 uppercase font-bold text-2xl text-white max-w-[200px] relative z-[1]">طعام ومستلزمات الحيوانات الأليفة</p>
          <Image src="/assets/baby.png" alt="الأطفال والرضع" width={180} height={200} priority className="absolute top-0 left-0" />
        </li>
        {/* Cleaning ------------------------------------------------------------- */}
        <li className="col-span-2 flex flex-col items-start p-6 relative before before:absolute before:bg-yellow-500 before:inset-0 before:rounded-lg">
          <span className="px-3 py-1 rounded-sm text-xs font-bold uppercase bg-white/20 text-white relative z-[1]">منظفات</span>
          <p className="mt-3 uppercase font-bold text-2xl text-white max-w-[200px] relative z-[1]">منظفات وسوائل العناية بالجسم</p>
          <Image
            src="/assets/cleaning.png"
            alt="منظفات"
            width={300}
            height={200}
            priority
            className="absolute top-0 left-0 -translate-x-12"
          />
        </li>
      </ul>
    </section>
  );
}
