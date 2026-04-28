"use client";

import React from 'react';

export default function LocationContact({ mapSrc }) {
  return (
    <section className="bg-[#1c1c1c] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        
        {/* Visit Us Section (Map) */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 uppercase tracking-wide">
            Visit Us
          </h2>
          <div className="w-full h-[350px] md:h-[450px] bg-gray-200">
            {mapSrc ? (
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                Map location goes here
              </div>
            )}
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 uppercase tracking-wide">
            Send a Message
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full bg-white px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 border border-transparent"
                required
              />
              <input
                type="tel"
                placeholder="Phone *"
                className="w-full bg-white px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 border border-transparent"
                required
              />
            </div>
            
            <input
              type="email"
              placeholder="E-mail *"
              className="w-full bg-white px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 border border-transparent"
              required
            />
            
            <textarea
              placeholder="Type a message"
              rows={5}
              className="w-full bg-white px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 border border-transparent resize-none"
            ></textarea>

            {/* Mock Cloudflare Captcha */}
            <div className="bg-[#fafafa] px-4 py-3 flex items-center justify-between border border-gray-200 mt-2">
              <div className="flex items-center gap-3">
                <div className="bg-[#24b256] rounded-full p-[3px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[14px] text-gray-700">Success!</span>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                   {/* Cloudflare logo mock using cloud icon, or just text */}
                  <span className="font-bold text-[#f38020] text-[10px] tracking-wide">CLOUDFLARE</span>
                </div>
                <span className="text-[9px] text-gray-500 font-medium">Privacy • Help</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-3.5 px-8 text-xs tracking-widest transition-colors duration-300 rounded-[2px]"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </section>
  );
}
