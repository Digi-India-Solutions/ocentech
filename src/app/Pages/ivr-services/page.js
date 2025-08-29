import React from 'react'
import IVRService from '@/app/Components/IVRService/IVRService'
import IVRPlan from '@/app/Components/IVRPlan/IVRPlan'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import Head from 'next/head';
export default function page() {
  return (
    <>

    <Head>
        <title>IVR Services - Get Custom Interactive Voice Response Solutions</title>
        <meta
          name="description"
          content="Streamline customer calls with our customizable IVR solutions. Improve call management and deliver a professional phone experience for your business."
        />
        <meta
          name="keywords"
          content="ivr service provider, interactive voice response service, cloud ivr solutions, ivr"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oceantechzone.com/ivr-services" />
      </Head>
      <IVRService/>
      <BrandCarousel/>
      <IVRPlan/>
    </>
  )
}
