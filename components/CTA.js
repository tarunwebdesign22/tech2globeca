export default function CTA() {
  return (
    <section className="bg-[#c7010c] py-[2.4rem]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8">
          Discover How We Can Help Your Business Grow
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:info@tech2globe.ca"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-[#c7010c] transition-colors"
          >
            SEND A MAIL
          </a>
          <a
            href="tel:+1-778-382-9628"
            className="px-8 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
          >
            CALL US
          </a>
        </div>
      </div>
    </section>
  );
}
