import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import BulkSMSTransactional from '@/app/Components/BulkSMSTransectional/BulkSMSTransactional.jsx'
import TransactionalPlan from '@/app/Components/TransactionalPlan/TransactionalPlan'
import React from 'react'
import Head from "next/head";
export default function page() {
  return (
    <>
     <Head>
        <title>Send Fast & Secure Bulk Transactional SMS | Ocean Tech Zone</title>
        <meta
          name="description"
          content="Simplify business communication with our secure Bulk SMS Transaction service. Reach more customers, boost conversions, and streamline messaging today!"
        />
        <meta
          name="keywords"
          content="Transactional SMS, Bulk transactional SMS provider, Send transactional SMS, transactional sms service provide"
        />
      </Head>
    <BulkSMSTransactional/>
    <BrandCarousel/>
    <TransactionalPlan/>
      
    </>
  )
}
