import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import CTA from "@/components/CTA";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import ClientSlider from "@/components/ClientSlider";
import AvailableLocations from "@/components/AvailableLocations";
import {
  FiMonitor,
  FiTool,
  FiMessageCircle,
  FiUsers,
  FiMegaphone,
  FiDollarSign,
  FiBriefcase,
  FiBarChart2,
  FiTrendingUp
} from "react-icons/fi";

import LocationContact from "@/components/LocationContact";
import ServiceCards from "@/components/ServiceCards";

export const metadata = {
  title: "Digital Marketing Agency in Vancouver | Tech2Globe Canada",
  description:
    "Looking for a top-rated digital marketing agency in Vancouver? Tech2Globe Canada offers expert SEO, PPC, and social media marketing services to grow your business.",
  keywords: [
    "digital marketing agency vancouver",
    "seo services vancouver",
    "ppc management vancouver",
    "social media marketing vancouver"
  ],
};

const servicesData = [
  {
    id: 1,
    title: "Larger Audience",
    description:
      "Because of the internet, businesses can now reach customers all over the world...",
    icon: <FiMessageCircle className="text-white text-3xl" />
  },
  {
    id: 2,
    title: "Effectiveness Of Campaigns",
    description:
      "The amount of clicks, views, and click-throughs yielded by a digital marketing campaign can be tracked...",
    icon: <FiBarChart2 className="text-white text-3xl" />
  },
  {
    id: 3,
    title: "Affordable Marketing",
    description:
      "Traditional marketing techniques can be quite costly...",
    icon: <FiTrendingUp className="text-white text-3xl" />
  },
  {
    id: 4,
    title: "Beneficial Marketing Services",
    description:
      "A strong internet presence is critical...",
    icon: <FiBriefcase className="text-white text-3xl" />
  },
];

const clientsData = [
  { id: 1, name: 'Abrams', logo: 'images/clients/abrams.png' },
  { id: 2, name: 'Absolute Toner', logo: 'images/clients/absolute-toner-logo.png' },
  { id: 3, name: 'Aniss', logo: 'images/clients/aniss-logo.png' },
  { id: 4, name: 'Aon Hewitt', logo: 'images/clients/aonHewit.png' },
  { id: 5, name: 'Aquatech', logo: 'images/clients/aquatech.png' },
  { id: 6, name: 'Creative Arcades', logo: 'images/clients/creative-arcades.png' },
  { id: 7, name: 'Follett', logo: 'images/clients/follett.png' },
  { id: 8, name: 'GBS', logo: 'images/clients/gbs-logo.png' },
  { id: 9, name: 'HP', logo: 'images/clients/hp.png' },
  { id: 10, name: 'Wellist', logo: 'images/clients/wellist.png' },
];

const clientsData2 = [
  { id: 1, name: 'Yelp', logo: 'images/clients/yelp.png' },
  { id: 2, name: 'Bing', logo: 'images/clients/bing.png' },
  { id: 3, name: 'Hotfrog', logo: 'images/clients/hotfrog.png' },
  { id: 4, name: 'Goodfirm', logo: 'images/clients/goodfirm.png' },
];

const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.png' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.png' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.png' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.png' },
  { id: 5, name: 'Trustpilot', logo: 'images/clients/trust-pilot.png' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.png' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.png' },
];

const faqsData = [
  {
    question: "Why do I need a digital marketing agency in Vancouver?",
    answer: "A local digital marketing agency understands the Vancouver market dynamics, competition, and consumer behavior, helping you tailor your strategies for maximum local impact."
  },
  {
    question: "What digital marketing services do you offer in Vancouver?",
    answer: "We offer a full suite of services including SEO, PPC Management, Social Media Marketing, Content Marketing, and Web Development specifically for Vancouver-based businesses."
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy. Typically, businesses in Vancouver start seeing significant improvements in rankings and traffic within 3 to 6 months of consistent effort."
  },
  {
    question: "Do you provide customized marketing plans?",
    answer: "Yes, we create bespoke digital marketing strategies based on your specific business goals, industry, and budget to ensure the best ROI."
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "L",
    name: "LISA",
    subname: "Business Owner",
    text: "Tech2Globe is a top-notch digital marketing agency. Their team is professional, creative. They have helped us to increase our brand awareness and drive more sales through targeted digital marketing campaigns. We highly recommend them."
  },
  {
    id: 2,
    letter: "M",
    name: "MANDY",
    subname: "E-commerce Manager",
    text: "If you're looking for a digital marketing agency that can deliver results, look no further than Tech2Globe. Their team is knowledgeable, responsive, and always willing to go the extra mile to ensure our campaigns are successful."
  },
  {
    id: 3,
    letter: "A",
    name: "ALEX",
    subname: "Marketing Director",
    text: "Tech2Globe has completely transformed our online presence. Their team of experts in digital marketing helped us to reach new customers. Their strategy was tailored to our specific needs, their constant dedication to our success was impressive."
  }
];

const vancouverMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887...YOUR_MAP_URL...&output=embed";

export default function DigitalMarketingVancouver() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "Digital Marketing Vancouver", href: "/locations/digital-marketing-vancouver" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHeader
        title="Digital Marketing Vancouver"
        breadcrumbs={breadcrumbs}
      />

      <ClientSlider title="Awards & Recognition" clients={clientsData3} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Vancouver Digital Marketing Agency
              </h2>
              <p className="text-[#c7010c] font-bold text-lg md:text-xl mb-8">
                Don't get lost in the search engine shuffle - Let our digital marketing experts put you on top!
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                From startups to medium-sized organisations to multi-location businesses, a digital marketing company can help you expand your niche market reach to offer goods and services to your target clientele regardless of time differences or geography. Hiring a Digital Marketing Agency in Vancouver is one of the most efficient ways to reach out to prospects while keeping current clients happy. Customers will always find you if your company has a strong online presence. Since 2014, our digital marketing firm has assisted hundreds of businesses in Canada in meeting their conversion objectives.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tech2Globe is a full-service digital marketing agency that is adaptable and creative in its approach to attracting new clients. Tech2Globe, on the other hand, relies on its own search engine optimization (SEO) and marketing abilities to bring in new customers. We do not operate with a fixed mindset! Tech2Globe has the experience and expertise to design a custom website and implement a variety of digital marketing services to assist any size business in any industry. So many other businesses take a one-size-fits-all approach, giving you the same strategy and cookie-cutter website as your next-door neighbour.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We work with you to provide personalised internet marketing services and a plan that is tailored to your specific business needs. We become an extension of your team, a partner who understands your market and goals, rather than simply being an SEO Company Vancouver that executes strategy blindly. Unlike other services, Tech2Globe prioritises client connections and results over bling and spark to win contracts and then fail to deliver. We never make empty promises and always try harder to maximise your money so that you get the best return on investment (ROI). We can help you improve your organic rankings and visibility in search results by conducting extensive keyword research and employing white hat SEO strategies.
              </p>
            </div>

          </div>
        </div>
      </section>

      <LocationContact mapSrc={vancouverMapUrl} />

      <AvailableLocations title="Other Locations We Serve" />

      <section className="pt-[3.2rem] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222222]">
              Why We Need Digital Marketing in Vancouver, Canada
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">Digital Marketing Vancouver has evolved into an important component of any company's overall marketing strategy. It enables businesses to reach a larger audience, save money, track and measure campaign success, improve their online presence, and keep up with the latest trends and technologies. Businesses must have a strong online presence and use digital marketing services to reach and engage with customers in today's digital age. Here are some of the reasons why every industry should use digital marketing services:</p>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-6"></div>
          </div>
        </div>
      </section>
      <ServiceCards services={servicesData} />

      <Industries />

      <ClientSlider title="Whom We’ve Partnered With" clients={clientsData} />

      {/* Tools and Technologies Section */}
      <section className="bg-white py-[3.2rem] lg:py-[4.8rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222222]">
              Tools And Technologies We Make Use Of
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-[#c7010c] text-lg sm:text-xl font-medium">
              Empowering your brand in a digital world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiMonitor size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                Increasing Website Traffic
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiTool size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                Advanced Analytics Tools
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiMessageCircle size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                24/7 Customer Support
              </h3>
            </div>
          </div>
        </div>
      </section>

      <ClientSlider title="List Your Brand On Popular Platforms" clients={clientsData2} />

      <Testimonials testimonials={testimonialsData} />

      <div id="contact">
        <FaqContact faqs={faqsData} />
      </div>

      <CTA />

      <Footer />
    </main>
  );
}
