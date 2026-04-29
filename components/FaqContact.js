"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';



export default function FaqContact({ faqs = [] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <section className="bg-[#1c1c1c] py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-8">FAQ's</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white">
                <button
                  className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none transition-colors hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-[15px] font-normal text-gray-800">{faq.question}</span>
                  <span className="text-gray-800 text-sm">
                    {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-4 text-[14px] text-gray-600 border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-8">Contact Us</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full bg-white px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300"
                required
              />
              <input
                type="tel"
                placeholder="Phone *"
                className="w-full bg-white px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="E-mail *"
                className="w-full bg-white px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300"
                required
              />
              <div className="relative">
                <select className="w-full bg-white px-4 py-3 text-[14px] text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300 appearance-none">
                  <option>Canada (+1)</option>
                  <option>USA (+1)</option>
                  <option>UK (+44)</option>
                  <option>India (+91)</option>
                  <option>Australia (+61)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600">
                  <FaChevronDown className="text-xs" />
                </div>
              </div>
            </div>
            <textarea
              placeholder="Type a message"
              rows={4}
              className="w-full bg-white px-4 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
            ></textarea>

            {/* Mock Cloudflare Captcha */}
            <div className="bg-white px-4 py-2 flex items-center justify-between border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 rounded-full p-[2px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[13px] text-gray-800">Success!</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-[#f38020] text-[10px] tracking-wider">CLOUDFLARE</span>
                <span className="text-[9px] text-gray-400">Privacy • Terms</span>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#c7010c] hover:bg-[#a00008] text-white font-semibold py-3 px-8 text-sm transition-colors duration-300 mt-2"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
