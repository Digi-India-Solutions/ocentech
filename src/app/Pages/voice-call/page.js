import React from 'react'
import VoiceCallService from '@/app/Components/VoiceCallService/VoiceCall'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import VoiceCallPlans from '@/app/Components/VoiceCallPlan/VoiceCallPlan'
import Head from 'next/head';
export default function page() {
  return (
    <>

     <Head>
        <title>Affordable Voice Call Services to Boost Business Communication</title>
        <meta
          name="description"
          content="Boost efficiency with our affordable voice call service. Ensure smooth customer communication and streamline your business interactions today!"
        />
        <meta
          name="keywords"
          content="voice call service, bulk voice call service"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oceantechzone.com/voice-call" />
      </Head>
    <div>
        <VoiceCallService/>
        <BrandCarousel/>
        <VoiceCallPlans/>
    </div>
      
    </>
  )
}
