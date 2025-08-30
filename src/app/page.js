import OurStory from "./Components/OurStory/OurStory";
import BrandCarousel from "./Components/BrandCarousel/BrandCarousel";
import Faq from "./Components/Faq/Faq";
import AboutUs from "./Components/AboutUs/AboutUs";
import Testimonial from "./Components/Testimonial/Testimonial";
import StatsSection from "./Components/StateSection/StateSection";
import Services from "./Components/Services/Services";
import BulkSms from "./Components/BulkSMS/BulkSms";
import PricingPlans from "./Components/PricingPlans/PricingPlans";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          India’s Leading Bulk SMS Services Provider – Fast & Affordable
        </title>
        <meta
          name="description"
          content="Take your marketing to the next level with OceanTechZone’s cost-effective bulk SMS service. Instantly reach more customers and stay ahead of the competition. Cost-effective bulk SMS pricing plans for businesses. Send promotional, transactional, OTP messages affordably with secure, reliable, and fast delivery."
        />
        <meta
          name="keywords"
          content="bulk sms service, bulk sms provider, transactional sms service, promotional sms service, Bulk Sms service providers in delhi, bulk sms service provider near me, cheapest bulk sms, free bulk sms services, ivr services, Ocean Tech Zone, Bulk SMS pricing, Bulk SMS plans, SMS marketing platform, SMS API, Affordable bulk SMS"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oceantechzone.com" />
      </Head>

      <div>
        <OurStory />

        <BrandCarousel />
        {/* <Header/> */}
        {/* <FeatureSection/> */}
        <AboutUs />
        <Services />
        <PricingPlans />
        <StatsSection />
        <BulkSms />
        <Testimonial />
        {/* <GoogleMap/> */}
        <Faq />
      </div>
    </>
  );
}
