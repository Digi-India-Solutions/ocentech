import RCSPlan from '@/app/Components/RCSPlan/RCSPlan'
import RCSService from '@/app/Components/RCSService/RCSService'
import React from 'react'

export default function page() {
  return (
    <>
     <Head>
        <title>RCS SMS Messaging Services | Rich Communication for Businesses</title>
        <meta
          name="description"
          content="RCS SMS enables businesses to send interactive, media-rich, and secure messages with images, videos, and buttons for better customer engagement."
        />
        <meta
          name="keywords"
          content="RCS SMS, Business RCS messaging, RCS SMS for businesses, rcs sms service"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oceantechzone.com/rcs-services" />
      </Head>
      <RCSService/>
      <RCSPlan/>
    </>
  )
}
