"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Paid Search Advertisements",
    description: "Paid search ads are the most typical and the best PPC services. When experimenting with PPC advertising, this is the ad type that most advertisers begin with. They then choose the highest price they are ready to pay if their ad is clicked on and get listed on Google Ads for the ad copy they want to appear for when a user searches for their keywords",
    buttonText: "ABOUT COMPANY",
    buttonLink: "#"
  },
  {
    id: 2,
    title: "Retargeting Ads",
    description: "A remarketing campaign displays advertisements to users who have previously visited your website. Remarketing is mainly the best PPC service because the user has already expressed interest in your company. It is frequently used to re-engage clients on the verge of leaving the sales to funnel or upsell or cross-sell more products to your current customers. When running a remarketing campaign with Google Adverts, picture ads are frequently displayed to visitors as they explore Google Display Network websites. To remarket to users, we here employ image or video advertising.",
    buttonText: "ABOUT COMPANY",
    buttonLink: "#"
  }
];

export default function ConsultancySlider() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Why Would You Seek Amazon Consultancy Services?
          </h2>
          <div className="w-16 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg">
            Without leveraging Amazon consultancy services, there might be chances to miss on the aspects that are important for a seller to be aware of.
          </p>
        </div>

        {/* Split Section with Slider */}
        <div className="flex flex-col md:flex-row min-h-[500px] overflow-hidden">
          {/* Left Side: Content Slider */}
          <div className="w-full md:w-1/2 bg-[#1a1a1a] text-white flex items-center p-8 md:p-12 lg:px-20 lg:py-14 relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet bg-white" }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="w-full h-full pb-12 consultancy-swiper"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="text-center md:text-left h-full flex flex-col justify-center pb-8">
                    <h3 className="text-3xl md:text-4xl font-medium mb-6">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                      {slide.description}
                    </p>
                    <div>
                      <Link
                        href={slide.buttonLink}
                        className="inline-block bg-white text-black font-semibold text-xs tracking-wider px-8 py-3 hover:bg-[#c7010c] hover:text-white transition-colors duration-300"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side: Static Image */}
          <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-full">
            <img
              src="/images/services/parallax-bg8.jpg"
              alt="Consultancy Services"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Add global styles for pagination bullets to be white */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .consultancy-swiper .swiper-pagination-bullet {
          background-color: #ffffff;
          opacity: 0.5;
        }
        .consultancy-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #ffffff;
        }
      `}} />
    </section>
  );
}
