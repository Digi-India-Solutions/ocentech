import AboutSection from '@/app/Components/AboutSection/AboutSection'
import AboutUs from '@/app/Components/AboutUs/AboutUs'
import WhatWeDo from '@/app/Components/WhatWeDo/WhatWeDo'
import React from 'react'
import Head from "next/head";

export default function page() {
  return (
    <>
    <Head>
        <title>Ocean Tech Zone SMS Services Provider – Since 2017</title>
        <meta
          name="description"
          content="Ocean Tech Zone offers Bulk SMS, Voice Calls, WhatsApp Messaging & IVR solutions to help businesses grow, connect, and thrive since 2017."
        />
        <meta
          name="keywords"
          content="Ocean Tech Zone, Ocean Tech Zone company profile, About Ocean Tech Zone, communication technology company in India"
        />
      </Head>
      <div>
        {/* <AboutUs/>
        <WhatWeDo/> */}
         <AboutSection/>
        
      </div>
    </>
  )
}
