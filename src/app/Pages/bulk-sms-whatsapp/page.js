import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import SMSWhatsApp from '@/app/Components/BulkSMSWhatsApp/SMSWhatsApp'
import WhatsAppPlan from '@/app/Components/WhatAppPlan/WhatAppPlan'
import React from 'react'
import Head from 'next/head';
export default function page() {
  return (
    <>
    <Head>
        <title>Efficiently Reach Your Audience with Bulk Sms on WhatsApp</title>
        <meta
          name="description"
          content="Connect with your audience instantly using Bulk SMS on WhatsApp. A fast, convenient way to engage customers and boost your business communication."
        />
        <meta
          name="keywords"
          content="bulk whatsapp sender, bulk sms on whatsapp, send bulk messages on whatsapp, whatsapp marketing service"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oceantechzone.com/bulk-sms-whatsapp" />
      </Head>
      <SMSWhatsApp/>
      <BrandCarousel/>
      <WhatsAppPlan/>
    </>
  )
}
