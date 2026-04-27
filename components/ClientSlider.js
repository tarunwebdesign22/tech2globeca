"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';



export default function ClientSlider({ clients = [] }) {
  return (
    <section className="py-8 bg-gray-50 dark:bg-zinc-900 border-y border-gray-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className="relative">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-50 dark:from-zinc-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-50 dark:from-zinc-900 to-transparent z-10 pointer-events-none"></div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={3000} // Continuous speed
            autoplay={{
              delay: 0, // No delay for smooth continuous scroll
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="client-swiper !ease-linear"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id} className="flex items-center justify-center">
                <div className="w-40 h-20 flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter opacity-100  transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
