import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import ClientSlider from "@/components/ClientSlider";
import AvailableLocations from "@/components/AvailableLocations";
import ServiceCards from "@/components/ServiceCards";
import Image from "next/image";
import {
  FiMonitor,
  FiTool,
  FiMessageCircle,
  FiSearch,
  FiShare2,
  FiFileText,
  FiMousePointer,
  FiLayout,
  FiMail,
  FiCheckCircle,
  FiThumbsUp,
  FiTarget,
  FiEdit3,
  FiUsers,
  FiGlobe,
  FiLink,
  FiMapPin,
  FiStar,
  FiShield,
  FiActivity,
  FiShoppingCart,
  FiCoffee,
  FiHome,
  FiBarChart2,
  FiDollarSign,
  FiPhone,
  FiDatabase,
  FiAward,
  FiTrendingUp,
  FiHeadphones,
  FiRefreshCw,
  FiEdit,
  FiLayers,
  FiBriefcase,
  FiEye,
} from "react-icons/fi";

import { FaCheck, FaComments, FaHandshake, FaLink, FaSearch, FaShareAlt } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";


export const metadata = {
  title:
    "Content Marketing Services | Content Marketing Agency | Tech2Globe",

  description:
    "Tech2Globe provides content marketing services with consistent content creation to engage your audience, build trust, and influence purchasing decisions.",

  keywords: [
    "Content Marketing Services",
    "Content Marketing Agency",
    "Content Marketing Service Providers",
    "Content Marketing Services India",
    "Content Marketing Services Packages",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/content-marketing-services",
  },

  openGraph: {
    title:
      "Content Marketing Services | Content Marketing Agency | Tech2Globe",

    description:
      "Tech2Globe provides content marketing services with consistent content creation to engage your audience, build trust, and influence purchasing decisions.",

    url: "https://tech2globe.ca/content-marketing-services",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "website",
  },

};

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


const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.png' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.png' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.png' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.png' },
  { id: 5, name: 'Trustpilot', logo: 'images/clients/trust-pilot.png' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.png' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.png' },
];


const testimonialsData = [
  {
    id: 1,
    letter: "AT",
    name: "Ashley Thompson",
    subname: "Business Owner",
    text: "Tech2Globe has exceeded my expectations with their content marketing services. They have a team of skilled writers who produce high-quality, engaging content that resonates with our target audience. They also have a great understanding of SEO and how to use it to drive traffic to our website.I highly recommend Tech2Globe to any business."
  },
  {
    id: 2,
    letter: "IR",
    name: "Isabella Rodriguez",
    subname: "E-commerce Manager",
    text: "Tech2Globe has been a game changer for our company. We were struggling to generate leads and increase our online visibility, but since working with Tech2Gobe, we have seen a significant improvement in both areas. Their team is professional, responsive, and always willing to go the extra mile to deliver great results. I can't recommend them enough!"
  },
  {
    id: 3,
    letter: "HM",
    name: "Henry Moore",
    subname: "Marketing Director",
    text: "We have been working with Tech2Globe for the past year and have seen tremendous results in terms of website traffic and lead generation. Their team is knowledgeable and always willing to provide guidance and support. I highly recommend Tech2Globe to any business looking to improve their online presence through content marketing."
  }
];


const faqsData = [
  {
    question: "What is content marketing?",
    answer: `
      Content marketing is the process of creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience, and ultimately, to drive profitable customer action. This can include blog posts, social media posts, email newsletters, videos, podcasts, and other types of content.
    `
  },
  {
    question: "What services does a content marketing company offer?",
    answer: `
      A content marketing agency Canada typically offer a range of services, including:
      Content strategy development: This involves creating a plan for creating and distributing content that aligns with the business's goals and objectives.
      Content creation: This involves creating the actual content, such as blog posts, social media posts, and more.
      Content distribution: This involves promoting and distributing the content through various channels, such as social media, email newsletters, and more.
      Analytics and reporting: This involves tracking the performance of the content and providing reports on metrics such as website traffic, engagement, and conversions
    `
  },
  {
    question: "How does the Best content marketing services in Toronto create content?",
    answer: `
      Content marketing companies typically have a team of writers, editors, and content strategists who work together to create content. The process may involve researching topics, developing a content calendar, writing and editing the content, and ensuring that the content is optimised for search engines and meets the needs of the target audience.
    `
  },
  {
    question: "How is content marketing services different from other forms of marketing?",
    answer: `
      Content marketing is different from other forms of marketing in that it focuses on creating valuable and relevant content that helps to attract and retain customers, rather than directly promoting products or services. This can help businesses establish trust and credibility with their audience, which can ultimately lead to increased sales and customer loyalty
    `
  },
  {
    question: "Who can benefit from content marketing services?",
    answer: `
      Content marketing services can be beneficial for businesses of all sizes and industries. By creating valuable content that resonates with their target audience, businesses can attract and retain customers, increase brand awareness, and drive sales.
    `
  }
];

const servicesData = [
  {
    id: 1,
    title: "Quality of work",
    description:
      "A top-notch content marketing company should produce high-quality content that is well-written, accurate, and engaging.",
    icon: <FiAward size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Expertise",
    description:
      "An affordable content marketing service should have a team of experts who have a deep understanding of the industry and target audience.",
    icon: <FiUsers size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Strategy",
    description:
      "A great content marketing company should have a clear and well-thought-out content strategy that aligns with the business's overall marketing goals and objectives.",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Results",
    description:
      "The best content marketing companies should be able to demonstrate the results they have achieved for their clients, such as increased website traffic.",
    icon: <FiTrendingUp size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "Customer service",
    description:
      "An affordable content marketing service should provide excellent customer service, responding to inquiries and requests promptly and working closely with clients to ensure their needs are met.",
    icon: <FiHeadphones size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Flexibility",
    description:
      "A great content marketing company should be able to adapt to changes in the market and be flexible in terms of the types of content they produce and the platforms they use to publish it.",
    icon: <FiRefreshCw size={32} color="#ffffff" />
  },
  {
    id: 7,
    title: "Creativity",
    description:
      "A content marketing agency Canada should be able to come up with fresh, original ideas for content and present them in an engaging way.",
    icon: <FiEdit size={32} color="#ffffff" />
  },
  {
    id: 8,
    title: "Collaboration",
    description:
      "A top content marketing company should be able to work closely with clients and other team members, collaborating to develop and execute a successful content marketing strategy.",
    icon: <FiLayers size={32} color="#ffffff" />
  },
  {
    id: 9,
    title: "Experience",
    description:
      "A content marketing company should have a track record of working with businesses in a variety of industries, and should be able to draw on this experience to inform their approach.",
    icon: <FiBriefcase size={32} color="#ffffff" />
  },
  {
    id: 10,
    title: "Transparency",
    description:
      "A top content marketing company should be transparent about their processes and fees, and should clearly communicate their expectations and deliverables to clients.",
    icon: <FiEye size={32} color="#ffffff" />
  },
  {
    id: 11,
    title: "Cost",
    description:
      "While cost is not the only factor to consider when choosing a content marketing company, it is important to find a company that offers a good value for the content marketing services they provide.",
    icon: <FiDollarSign size={32} color="#ffffff" />
  },
  {
    id: 12,
    title: "Online reputation",
    description:
      "Look for a content marketing agency Canada with a strong online reputation, as this can be an indicator of the quality of their work and customer satisfaction.",
    icon: <FiStar size={32} color="#ffffff" />
  }
];


export default function SocialMediaMarketingServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="BEST CONTENT MARKETING SERVICES IN CANADA"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "SEO Agency Toronto", href: "/seo-agency-toronto" }
        ]}
      />

      <ClientSlider title="Awards & Recognition" clients={clientsData3} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Breathe Life Into Your Brand With Engaging And Impactful Content
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-[#c7010c] text-lg font-medium mb-3">A one-stop shop for Best content marketing services in Toronto</p>


              <p className="text-gray-600 mb-3 leading-relaxed">
                Tech2Globe Canada, one of the most dependable creative writing organisations, takes great delight in providing the greatest copywriting and content marketing services for all thriving industries. We have a staff of creative content writers and experienced copywriters who excel in all aspects of writing, with the goal of providing 100% unique and well-defined material that promotes commerce. By casting magical spells of well-knitted words, our articles have the capability to influence clients to make purchasing decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AvailableLocations title="Our Digital Marketing Location" subtitle="" />









      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              How Social Media Platforms Help With
              Better Social Presence?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>As a top SMO company in Canada, we provide comprehensive, cutting-edge solutions to help you scale your business on every single social media platform!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/facebook-icon.png" alt="Facebook" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Facebook Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Advertising on Facebook can help bring your professional practices to the attention of a new audience more swiftly. As an experienced social media marketing agency, we personalise your ad to potential clients interested in your product or service based on their interests, gender, or even region using data from Facebook. Facebook's advertising platform has developed over time; users can now execute a marketing campaign or run advertisements.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/youtube-logo-icon.png" alt="Youtube" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                YouTube Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                YouTube is rapidly expanding, with over 5 billion videos watched every day! This platform receives far more traffic than any other. Even if you don't make many videos for your company, you may still reach a large audience by advertising your services on other people's videos. YouTube has a larger pool of traffic that you're almost certain to find potential clients if you appeal to their wants. By implementing YouTube marketing with the help of the best social marketing company, you are also strengthening your company's internet authority.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/linkedin-icon.png" alt="LinkedIn" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                LinkedIn Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                LinkedIn is a platform where one looks for something informative or engaging in nature. You can cover many areas on one platform with the help of LinkedIn marketing, resulting in a considerable volume of leads. Your company or personal profile is critical to the success of your marketing activities. Your social media marketing Toronto can be targeted to a specific set of people who have access to the platform on any device, and tablets using LinkedIn's marketing features, attracting traffic to your campaign.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/instagram-icon.png" alt="Instagram" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Instagram Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Instagram is a visually appealing social media platform with stunning recent features like reels. This social app now has over 800 million active users. However, Instagram is more than just a platform having a collection of beautiful photos and videos; many businesses now use the app as part of their digital marketing strategy. Still, being the top SMO company in Canada, we avoid over-posting and uploading irrelevant content. It creates a bad impact on your audience!
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/twitter-icon.png" alt="Twitter" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Twitter Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Twitter marketing can be enhanced by launching cross-channel campaigns centred by the best social marketing company. Tech2Globe social media services team maintains your overall social media and digital marketing approach collaborative and platform-oriented so you may invest your resources where and when they are most needed. The above social media marketing Toronto can also be applied to other social accounts, providing even more complementing alternatives.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/pinterest-icon.png" alt="Pinterest" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Pinterest Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Pinterest marketing services can benefit your brand because the platform rapidly becomes a search powerhouse for individuals worldwide. The network currently has over 175 million active users who use the enticing pinboards based on their particular niche of interest. Tech2Globe is the perfect option for harnessing the actual power of Pinterest to increase the ROI of your brand.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      <ClientSlider title="Meet Our Clients" clients={clientsData} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              What Makes Tech2Globe Canada
              Exceptional From Others?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              There are several factors that can contribute to a best content marketing services in Toronto being considered the finest in its field. Some of these factors may include:
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>


      <Industries />

      <section className="py-16 bg-[#1c1c1c] overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/content-writing.png"
                alt="Hire Qualified Content Experts To Achieve Your Content Marketing Goals"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Hire Qualified Content Experts To Achieve Your Content Marketing Goals
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className="text-white leading-relaxed mb-3">
              Tech2Globe’s writers take immense interest in your business in finding out your business core functionalities, mode of operation, target audience, the strength and weaknesses to curate the aptly tailored content exclusive to the particular needs. Our team is fluent with SEO writing and we conduct extensive keyword and topic research to create unique content in various formats.
            </p>
            <p className="mb-3 text-white"><strong>Our Promises:</strong></p>
            <ul className="hrline">
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We stick to deadlines</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We offer cost-effective service</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We follow industry standards</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We provide various types of content</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We are reliable</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We save you a lot of your time</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We excel in offering fresh content</li>
            </ul>
          </div>

        </div>
      </section>

      <Testimonials testimonials={testimonialsData} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
