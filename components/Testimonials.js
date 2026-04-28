"use client";

import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials({
  testimonials = [],
  title = "Testimonials",
  subtitle = "We Turn Clicks Into Customers!"
}) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-14 bg-[#f9fafb] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Heading & Subheading */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222222]">
              {title}
            </h2>
            <p className="text-[#c7010c] font-bold text-lg md:text-xl tracking-[0.2em] mb-8">
              {subtitle}
            </p>
            <div className="w-24 h-1.5 bg-[#c7010c] rounded-full mb-8"></div>
            <p className="text-gray-500 text-lg max-w-md">
              Hear what our amazing clients have to say about their experience working with us.
            </p>
          </div>

          {/* Right Column: Vertical Testimonial Slider */}
          {/* Reduced fixed height and centered content to fix the gap issue */}
          <div className="relative h-[380px] md:h-[350px]">
            <Swiper
              direction="vertical"
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass: 'testimonial-bullet-vertical',
                bulletActiveClass: 'testimonial-bullet-active-vertical',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="h-full !overflow-visible"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="h-full flex items-center">
                  <div className="flex flex-col group items-start text-left w-full py-2">
                    {/* Testimonial Card (Speech Bubble) */}
                    <div className="relative bg-white p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-gray-50 mb-8 transition-all duration-500 flex flex-col items-start w-full">

                      <p className="text-gray-600 leading-relaxed text-base italic mb-0">
                        {item.text}
                      </p>

                      {/* Speech Bubble Pointer */}
                      <div className="absolute -bottom-4 left-14 w-8 h-8 bg-white border-r border-b border-gray-50 transform rotate-45"></div>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-5 pl-8">
                      {/* Letter Avatar - restored a nice rounded shape for "attractiveness" */}
                      <div className="w-14 h-14 bg-[#c7010c] flex items-center justify-center text-white text-xl font-black shadow-lg shadow-red-100 transform rotate-3 transition-all duration-500 group-hover:rotate-0">
                        {item.letter}
                      </div>

                      <div className="flex flex-col">
                        <span className="text-[#222222] font-extrabold text-lg tracking-tight leading-none mb-1">
                          {item.name}
                        </span>
                        <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">
                          {item.subname}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-bullet-vertical {
          width: 8px;
          height: 8px;
          display: block;
          border-radius: 50%;
          background: #d1d5db;
          margin: 12px 0 !important;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .testimonial-bullet-active-vertical {
          background: #c7010c !important;
          height: 24px !important;
          border-radius: 4px !important;
        }
        .swiper-pagination-vertical {
          right: -20px !important;
          left: auto !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
        @media (max-width: 1024px) {
           .swiper-pagination-vertical {
              right: -10px !important;
           }
        }
      `}</style>
    </section>
  );
}
