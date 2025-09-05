import React from 'react'
import BulkEmailService from '@/app/Components/BulkEmailService/BulkEmail'
import EmailPlans from '@/app/Components/EmailPlan/emailplan'
import Head from 'next/head';

export default function page() {
  return (
    <>
     <Head>
        <title>Boost Your Business with Powerful Bulk Email Marketing Solutions</title>
        <meta
          name="description"
          content="Enhance your marketing with our bulk email services. Reach more customers, boost engagement, and grow your business with our advanced tools."
        />
        <meta
          name="keywords"
          content="send bulk emails, email marketing services in india, bulk email marketing"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oceantechzone.com/bulk-email-marketing" />
      </Head>
      <BulkEmailService/>
       <EmailPlans/>
    </>
  )
}
