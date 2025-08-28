import Image from "next/image";
import styles from "./page.module.css";
import OurStory from "./Components/OurStory/OurStory";
import BrandCarousel from "./Components/BrandCarousel/BrandCarousel";
import FeatureSection from "./Components/Features/Features";
import Faq from "./Components/Faq/Faq";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import Testimonial from "./Components/Testimonial/Testimonial";
import StatsSection from "./Components/StateSection/StateSection";
import Services from "./Components/Services/Services";
import BulkSms from "./Components/BulkSMS/BulkSms";
import PricingPlans from "./Components/PricingPlans/PricingPlans";
import GoogleMap from "./Components/GoogleMap/GoogleMap";

export const metadata = {
  title: "Ocean Tag Zone | Bulk SMS & Marketing Services",
  description:
    "Ocean Tag Zone provides bulk SMS, WhatsApp marketing, IVR, voice call, and email marketing services to help businesses grow efficiently.",
  keywords:
    "bulk sms, whatsapp marketing, ivr services, voice call service, bulk email, ocean tag zone, sms gateway",
  openGraph: {
    title: "Ocean Tag Zone",
    description: "Bulk SMS & Marketing Services for Businesses",
    url: "https://oceantechzone.com",
    siteName: "Ocean Tag Zone",
    images: [
      {
        url: "/meta.png",
        width: 800,
        height: 600,
        alt: "Ocean Tag Zone Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "abc123XYZ...", // <-- Replace with your Google Search Console code
  },
};


export default function Home() {
  return (
   <>
      <div>
         <OurStory/>
        
         <BrandCarousel/>
         {/* <Header/> */}
         {/* <FeatureSection/> */}
         <AboutUs/>
         <Services/>
         <PricingPlans/>
         <StatsSection/>
         <BulkSms/>
         <Testimonial/>
         {/* <GoogleMap/> */}
         <Faq/>

      </div>
   
   </>
  );
}
