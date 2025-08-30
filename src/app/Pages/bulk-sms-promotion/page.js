import BulkSMSPromotion from '@/app/Components/BulkSMSPromotion/BulkSMSPromotion.jsx'
import PromotionalPlan from '@/app/Components/PromotionalPlan/PromotionalPlan'
import React from 'react'
import Head from "next/head";
export default function page() {
  return (
    <>
     <Head>
        <title>Boost Your Marketing Strategy with Bulk SMS Promotion</title>
        <meta
          name="description"
          content="Boost sales and reach more customers with our fast, reliable Bulk SMS Promotion service. Get started today to power up your marketing!"
        />
        <meta
          name="keywords"
          content="Bulk SMS promotion, Bulk SMS promotional service, Promotional SMS provider, Send promotional SMS online"
        />
      </Head>
      <BulkSMSPromotion/>
      <PromotionalPlan/>
    </>
  )
}
