import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FaqContact from "@/components/FaqContact";
import ClientSlider from "@/components/ClientSlider";
import ServiceCards from "@/components/ServiceCards";
import ExpertiseSection from "@/components/ExpertiseSection";
import { FiArrowUpRight, FiTarget } from 'react-icons/fi';
import {
  FiDatabase,
  FiMonitor,
  FiSmartphone,
  FiShoppingBag,
  FiPenTool,
  FiShoppingCart
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "Top Digital Marketing Agency in Canada & Web Development Services",
  description:
    "Tech2Globe Canada is an award-winning digital marketing agency in Toronto. We specialize in eCommerce solutions, web development, and data management services and we delivered more than 1500+ projects.",
  keywords: [
    "online marketing agency in Toronto",
    "digital marketing agency in Canada",
    "ui ux design services provider",
    "Amazon marketing services",
    "web development services",
    "ecommerce website development company",
    "mobile app development services",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Top Digital Marketing Agency in Canada & Web Development Services",
    description:
      "Tech2Globe Canada is an award-winning digital marketing agency in Toronto...",
    url: "https://www.tech2globe.ca/",
    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",
    images: [
      {
        url: "https://tech2globe.ca/images/logo.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Tech2Globe: Online Marketing | Ecommerce & IT Consulting | BPO/KPO",
    description:
      "Tech2Globe is Web Portal & Software Development Company...",
    images: ["https://tech2globe.ca/images/tech2globe.jpg"],
  },
};

const expertiseData = [
  {
    id: 1,
    title: "Mobile App Development Specialists",
    description:
      "Helping businesses around the world with the precision of human intelligence and the strength of automation. We are a trusted name in the mobile app development options available all across!",
    image: "/images/Mobile-App.jpg",
    list: [
      "5000+ successful project deliveries with almost 100% client retention.",
      "We have brought in the best mobile app developers for each of our projects.",
      "Our google certified professionals have got us hundreds of happy clients.",
      "On-time delivery and quality assurance is a part of our core strategies.",
      "Increased the company's revenue by over 86% with our mobile app development services."
    ],
    link: "/mobile-app-development-services"
  },
  {
    id: 2,
    title: "Digital Marketing Specialists",
    description:
      "Being the best digital marketing agency Toronto, we believe in embracing the digital era and staying ahead of all trends. We employ revolutionary tactics to help your brand and business develop digitally.",
    image: "/images/Digital-Marketing.jpg",
    list: [
      "We have delivered over 7000+ successful projects.",
      "Not only during the project but also we offer tracking reports post completion.",
      "Generated satisfactory leads and made sales for hundreds of our clients.",
      "Content marketing, site optimisation, or competitor analysis we’ve yielded 100% results.",
      "100% client retention as a result of our precise outcomes."
    ],
    link: "/digital-marketing-agency"
  },
  {
    id: 3,
    title: "Ecommerce Services Expertise",
    description:
      "We look forward to assisting you on the path to success with our best ecommerce solutions for the optimization of your store and better journey of your websites.",
    image: "/images/Ecommerce-Development.jpg",
    list: [
      "Our certified developers and ecommerce consultants onboard have years of industry experience.",
      "We helped over thousands of businesses improve their stalled functioning.",
      "Tech2Globe has been the perfect partner for startups requiring initial guidance.",
      "With advertising tools, videos, infographics, and others we targeted 100% ROI.",
      "Our Ecommerce website development services provided complete flexibility to customers."
    ],
    link: "/ecommerce-website-development"
  },
  {
    id: 4,
    title: "Web Development Solutions",
    description:
      "We have imaginative, experimental, and inventive minds and that's how we create quite amazing web designs. We are on a mission to deliver results that not only fits search engines but also human minds.",
    image: "/images/Web-Development.jpg",
    list: [
      "We helped over 1000+ websites rank up in search engine results.",
      "Our top notch graphics helped our clients to entice their new customers.",
      "Clients have experienced sudden jumps in their sales record.",
      "We are a 5 star business on search engines.",
      "Information on websites is easily accessible and navigable."
    ],
    link: "/web-development-agency"
  },
  {
    id: 5,
    title: "Data Entry Expertise",
    description:
      "We provide data support to businesses that encourage organisational growth. We have a global customer base with over 96% customer retention rate for an offshore data entry business.",
    image: "/images/data-entry.png",
    list: [
      "Medical data entry services have increased productivity and profitability.",
      "Accurate and high-quality data entry services with utmost precision.",
      "Reduced data loss and increased accessibility for almost 95%.",
      "99% data accuracy and 100% data security.",
      "Minimal procedural delays ensuring efficiency."
    ],
    link: "/medical-data-entry-services"
  }
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

const stats = [
  {
    id: 1,
    icon: FaSmile,
    value: "14+",
    label: "YEARS EXPERIENCE",
  },
  {
    id: 2,
    icon: FaLayerGroup,
    value: "7K+",
    label: "SUCCESSFUL PROJECTS",
  },
  {
    id: 3,
    icon: FaGlobe,
    value: "25+",
    label: "CUSTOMER BASED COUNTRIES",
  },
  {
    id: 4,
    icon: FaComments,
    value: "99%",
    label: "CUSTOMER SATISFACTION SCORE",
  },
];

const servicesData = [
  {
    id: 1,
    title: "BPO/KPO/Data Management",
    description:
      "Specifically tailored KPO, BPO and Data management solutions to substantially reduce costs with the assistance of specialized personnel smoothly executing the process. By entrusting your strategies to our team of proficient experts, you can discover new and improved ways to be more efficient and redistribute your resources as needed. This, in turn, boosts productivity and efficiency.",
    icon: <FiDatabase className="text-white text-3xl" />
  },
  {
    id: 2,
    title: "Online Marketing",
    description:
      "We are the top digital marketing agency in Canada, with the right approach to digital communications joined-up in a digital world where everything is connected. Our strategy combines creativity and technology, bringing together a wide range of digital marketing disciplines—from mobile and adaptable web design to search and social media campaigns — under one roof.",
    icon: <FiMonitor className="text-white text-3xl" />
  },
  {
    id: 3,
    title: "Web & App Development",
    description:
      "Cost-efficient development backed by advanced frameworks and automation specific to each business need. We provide customized web development services aligned with your business objectives and help you achieve optimum success. Our approach to web and app development combines efficiency and effectiveness, allowing you to get the most value out of your investment.",
    icon: <FiSmartphone className="text-white text-3xl" />
  },
  {
    id: 4,
    title: "Amazon Services",
    description:
      "We excel at understanding and working with Amazon's algorithms to create a highly functioning selling experience for our clients. We have a team of skilled Amazon marketing services experts who are proficient in navigating these complex algorithms and leveraging them to the advantage of our clients.",
    icon: <FiShoppingBag className="text-white text-3xl" />
  },
  {
    id: 5,
    title: "UI/UX & Graphic Designing",
    description:
      "Smooth and intuitive user interaction aligned to center on resolving problems with the UX vision and approach. The goal of our UI/UX design services is to create a positive experience for users that leads to increased conversion rates, reduced maintenance costs, and a consistent user experience.",
    icon: <FiPenTool className="text-white text-3xl" />
  },
  {
    id: 6,
    title: "Ecommerce Development",
    description:
      "Breaking free from brick-and-mortar and digitizing your business with top-notch advanced technologies to drive customer satisfaction. We use both new and tried-and-true methods to create high-performance eCommerce websites with all essential tools for an efficient online store.",
    icon: <FiShoppingCart className="text-white text-3xl" />
  }
];

const faqsData = [
  {
    question: "What is Tech2Globe all about?",
    answer: "Tech2Globe is an IT consulting and software development company focused on delivering innovative solutions to help businesses grow in the digital landscape."
  },
  {
    question: "What are the services that Tech2Globe offers?",
    answer: "We offer a wide range of services including web development, mobile app development, UI/UX design, digital marketing, e-commerce solutions, and dedicated hiring."
  },
  {
    question: "How will my project be handled at Tech2Globe?",
    answer: "Your project will be handled by a dedicated team of professionals with regular updates, transparent communication, and agile methodologies to ensure timely delivery."
  },
  {
    question: "How about security at Tech2Globe?",
    answer: "We prioritize security and follow industry best practices, including NDA agreements, secure coding standards, and data protection protocols to ensure your projects are safe."
  },
  {
    question: "I want to outsource to Tech2Globe. What should I do?",
    answer: "Simply contact us through this form with your requirements, and our business development team will get back to you shortly to discuss the next steps and provide a consultation."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <Header />
      {/* Main page content goes here */}

      <section className="relative w-full min-h-[52vh] sm:min-h-[62vh] lg:min-h-[72vh] flex items-center justify-center text-center">

        <div className="absolute inset-0">
          <img
            src="images/Banner-Tech2Globe.jpg"
            alt="IT Solutions Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8">

          <span className="inline-block bg-red-600 text-white 
                 text-[10px] sm:text-xs md:text-sm 
                 font-semibold tracking-widest uppercase 
                 px-3 py-1.5 sm:px-4 sm:py-2 
                 mb-4 sm:mb-6">
            Over a Decade of Experience
          </span>


          <h1 className="text-white font-bold 
               text-2xl sm:text-3xl md:text-4xl lg:text-6xl 
               leading-tight mb-4 sm:mb-6">
            IT SOLUTIONS
          </h1>

          <p className="text-gray-200 
              text-xs sm:text-sm md:text-base lg:text-lg 
              leading-relaxed 
              max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8">

            <span className="block sm:inline">
              Increase Visibility
            </span>

            <span className="hidden sm:inline mx-2 text-red-500">|</span>

            <span className="block sm:inline">
              Generate Relevant Quality Traffic
            </span>

            <span className="hidden sm:inline mx-2 text-red-500">|</span>

            <span className="block sm:inline">
              Reduce Advertising Spend
            </span>
          </p>

          <a href="#"
            className="inline-block bg-white text-gray-900 
              text-xs sm:text-sm md:text-base 
              font-semibold 
              px-5 py-2.5 sm:px-6 sm:py-3 
              rounded-full shadow-md 
              hover:bg-gray-200 transition duration-300">
            GET CONSULTATION
          </a>

        </div>
      </section>

      <ClientSlider clients={clientsData} />

      <section className="bg-[#c7010c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                  py-6 sm:py-8 md:py-8 lg:py-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                    gap-6 md:gap-8">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-center md:justify-start gap-3"
                >
                  {/* Icon */}
                  <Icon className="text-xl sm:text-2xl md:text-3xl flex-shrink-0" />

                  {/* Content */}
                  <div className="text-left">
                    <h3 className="font-semibold 
                             text-lg sm:text-xl md:text-2xl leading-tight">
                      {item.value}
                    </h3>

                    <p className="text-[10px] sm:text-xs md:text-sm 
                            tracking-wide leading-snug">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              Top Online Marketing And Web Development Agency In Toronto
            </h2>
            <div className="w-24 h-[2px] bg-red-600 mx-auto mt-3"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Image */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
              <Image
                src="/images/small-banner-home2.jpg" // replace with your actual image
                alt="Top Online Marketing And Web Development Agency In Toronto"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Tech2Globe as a reliable online marketing agency in Toronto implies the best online strategies and tactics for a leading-edge online presence of your brand. We help plan and execute online marketing approaches using data-driven decisions and creativity for integrated growth. As your growth partner, we work in collaboration with your brand team to engineer performance-based strategies for diverse services.
              </p>

              <p>
                We understand that every business is unique, and we take the time to get to know your brand, your goals, and your target audience. This allows us to create customized online marketing plans that are tailored to your specific needs. We are a group of highly trained web development services providers and marketing professionals with extensive expertise in developing and implementing online marketing campaigns for businesses of all sizes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#c7010c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                  py-6 sm:py-8 md:py-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Image 1 */}
            <div className="flex items-center justify-center">
              <img
                src="/images/google-5-star.png"
                alt="Google Rating"
                className="w-auto h-auto object-contain max-h-[64px] sm:max-h-[72px] md:max-h-[80px]"
              />
            </div>

            {/* Image 2 */}
            <div className="flex items-center justify-center">
              <img
                src="/images/clutch-5-star.png"
                alt="Clutch Rating"
                className="w-auto h-auto object-contain max-h-[64px] sm:max-h-[72px] md:max-h-[80px]"
              />
            </div>

            {/* Image 3 */}
            <div className="flex items-center justify-center">
              <img
                src="/images/upcity-5-star.png"
                alt="UpCity Rating"
                className="w-auto h-auto object-contain max-h-[64px] sm:max-h-[72px] md:max-h-[80px]"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                  py-6 sm:py-8 md:py-10">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222222]">
              Meet Our Founder
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-6"></div>
          </div>

          <div className="flex justify-center items-center">
            {/* Image 1 */}
            <div className="group relative w-[200px] h-[200px] mx-auto 
                bg-white p-5 rounded-full shadow-lg 
                flex items-center justify-center
                overflow-visible
                transition-[border-radius] duration-300 ease-out
                hover:rounded-2xl">

              {/* Image Wrapper */}
              <div className="absolute top-1/2 left-1/2 
                  -translate-x-1/2 -translate-y-1/2
                  w-[140px] h-[140px]
                  transform-gpu
                  transition-transform duration-300 ease-out
                  group-hover:-translate-y-[105%] z-20">
                <img
                  src="/images/harpreet-singh-sethi.jpg"
                  alt="Harpreet Singh Sethi"
                  className="w-full h-full object-cover rounded-full 
                 shadow-md transform-gpu
                 transition-[border-radius] duration-300 ease-out
                 group-hover:rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-5 left-0 right-0 text-center
                  opacity-0 translate-y-4
                  transform-gpu
                  transition-all duration-300 ease-out
                  group-hover:opacity-100 group-hover:translate-y-0">

                <h3 className="text-lg font-semibold text-gray-700">
                  Harpreet Singh<br />Sethi
                </h3>

                <p className="text-xs text-red-600 mt-1">
                  Founder & CEO
                </p>
              </div>

            </div>


          </div>
        </div>
      </section>

      <section className="pt-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222222]">
              Our Complete Spectrum of Services
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-6"></div>
          </div>
        </div>
      </section>
      <ServiceCards services={servicesData} />

      <ExpertiseSection data={expertiseData} />

      <FaqContact faqs={faqsData} />
      <CTA />
      <Footer />
    </main>
  );
}
