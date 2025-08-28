import AboutSection from '@/app/Components/AboutSection/AboutSection'
import AboutUs from '@/app/Components/AboutUs/AboutUs'
import WhatWeDo from '@/app/Components/WhatWeDo/WhatWeDo'
import React from 'react'

export const metadata = {
  title: "About Us - Ocean Tech Zone",
  description: "Learn more about Ocean Tech Zone, the SNS leader.",
  openGraph: {
    images: [
      {
        url: "/meta.png", // path to your logo
        width: 800,
        height: 418,
      },
    ],
  },
}

export default function page() {
  return (
    <>
      <div>
        {/* <AboutUs/>
        <WhatWeDo/> */}
         <AboutSection/>
        
      </div>
    </>
  )
}
