import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { FaChevronDown } from 'react-icons/fa';

export const metadata = {
  title: "Contact Us - Tech2Globe Canada",
  description: "Get in touch with Tech2Globe Canada. We have offices in Canada and USA.",
};

export default function ContactUs() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <Header />
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />

      {/* Contact Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 p-8 flex flex-col items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <img src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" className="w-8 h-auto mb-5 border border-gray-100" />
              <h3 className="text-[17px] font-bold text-gray-800 mb-3 uppercase tracking-wide">Canada</h3>
              <p className="text-gray-500 mb-6 text-[15px] leading-relaxed">
                975 Mid-Way Blvd UNIT 12,<br />
                Mississauga, ON L5T 2C6, Canada
              </p>
              <div className="mt-auto space-y-1.5 text-[15px]">
                <p><span className="font-bold text-gray-700">P:</span> <a href="tel:+15168584836" className="text-gray-500 hover:text-[#c7010c] transition-colors">+1-516-858-4836</a></p>
                <p><span className="font-bold text-gray-700">E:</span> <a href="mailto:info@tech2globe.ca" className="text-gray-500 hover:text-[#c7010c] transition-colors">info@tech2globe.ca</a></p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 p-8 flex flex-col items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <img src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" className="w-8 h-auto mb-5 border border-gray-100" />
              <h3 className="text-[17px] font-bold text-gray-800 mb-3 uppercase tracking-wide">Canada</h3>
              <p className="text-gray-500 mb-6 text-[15px] leading-relaxed">
                3620 3rd Avenue,<br />
                Port Alberni, V9Y 4E8
              </p>
              <div className="mt-auto space-y-1.5 text-[15px]">
                <p><span className="font-bold text-gray-700">P:</span> <a href="tel:+17783829628" className="text-gray-500 hover:text-[#c7010c] transition-colors">+1-778-382-9628</a></p>
                <p><span className="font-bold text-gray-700">E:</span> <a href="mailto:info@tech2globe.ca" className="text-gray-500 hover:text-[#c7010c] transition-colors">info@tech2globe.ca</a></p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 p-8 flex flex-col items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="w-8 h-auto mb-5 border border-gray-100" />
              <h3 className="text-[17px] font-bold text-gray-800 mb-3 uppercase tracking-wide">USA</h3>
              <p className="text-gray-500 mb-6 text-[15px] leading-relaxed">
                1538, Old Country Road,<br />
                Plainview, New York, 11803
              </p>
              <div className="mt-auto space-y-1.5 text-[15px]">
                <p><span className="font-bold text-gray-700">P:</span> <a href="tel:+15168585840" className="text-gray-500 hover:text-[#c7010c] transition-colors">+1-516-858-5840</a></p>
                <p><span className="font-bold text-gray-700">E:</span> <a href="mailto:info@tech2globe.com" className="text-gray-500 hover:text-[#c7010c] transition-colors">info@tech2globe.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row shadow-lg overflow-hidden bg-white">
            
            {/* Form Column */}
            <div className="w-full lg:w-1/2 bg-[#1c1c1c] p-8 md:p-12 text-white">
              <h2 className="text-3xl font-semibold mb-3">Send us a Message</h2>
              <p className="text-gray-400 mb-8 text-sm">We would love to hear from you. Fill out the form below and we will get back to you shortly.</p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full bg-white text-gray-900 px-4 py-3.5 text-[14px] focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    className="w-full bg-white text-gray-900 px-4 py-3.5 text-[14px] focus:outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="email"
                    placeholder="E-mail *"
                    className="w-full bg-white text-gray-900 px-4 py-3.5 text-[14px] focus:outline-none"
                    required
                  />
                  <div className="relative">
                    <select className="w-full bg-white text-gray-500 px-4 py-3.5 text-[14px] focus:outline-none appearance-none cursor-pointer">
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
                  rows={5}
                  className="w-full bg-white text-gray-900 px-4 py-3.5 text-[14px] focus:outline-none resize-none"
                ></textarea>

                {/* Mock Cloudflare Captcha */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border border-gray-200 text-gray-900 w-full sm:w-2/3">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 rounded-full p-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[14px]">Success!</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-[#f38020] text-[10px] tracking-wider">CLOUDFLARE</span>
                    <span className="text-[10px] text-gray-500">Privacy • Terms</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#c7010c] hover:bg-[#a00008] text-white font-semibold py-3.5 px-8 text-sm transition-colors duration-300 mt-2 inline-block"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Map Column */}
            <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.673892440336!2d-79.67385968450148!3d43.67576597912061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3eb27e69cdd5%3A0x6e2dbfcf3a1e4d0!2s975%20Midway%20Blvd%20Unit%2012%2C%20Mississauga%2C%20ON%20L5T%202C6%2C%20Canada!5e0!3m2!1sen!2sus!4v1684000000000!5m2!1sen!2sus" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
