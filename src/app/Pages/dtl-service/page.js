import React from 'react'
import DTLService from '@/app/Components/DTLPage/DLTService'
import Head from 'next/head';
export default function page() {
  return (
    <>

     <Head>
        <title>DLT Registration Services for Bulk SMS</title>
        <meta
          name="description"
          content="Get DLT registered quickly for SMS and voice services with our hassle-free support. Ensure TRAI compliance and start sending bulk messages today."
        />
        <meta
          name="keywords"
          content="ivr service provider, interactive voice response service, cloud ivr solutions, ivr"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oceantechzone.com/dtl-service" />
      </Head>
      <DTLService/>
    </>
  )
}
