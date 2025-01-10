// components/HeroCarousel.jsx

import React from 'react';

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Swipper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: false }}
      autoplay={{ delay: 2000 }}
      loop
      className="h-screen"
    >
      <SwiperSlide>
        <div
          className="bg-cover bg-center lg:h-screen h-[20vh] text-center flex items-center justify-center"
          style={{ backgroundImage: 'url(./assets/hero-bg-1.webp)' }}
        >
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 p-10 h-full w-full mx-0 rounded-lg">

          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="bg-cover bg-center lg:h-screen h-[20vh] text-center flex items-center justify-center"
          style={{ backgroundImage: 'url(./assets/hero-bg-2.webp)' }}
        >
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 p-10 h-full w-full mx-0 rounded-lg">

          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipper;