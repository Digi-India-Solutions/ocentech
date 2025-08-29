import OTPService from '@/app/Components/OTPService/OTPService'
import React from 'react'
import MaximumSecurity from '@/app/Components/MaximumSecurity/MaximumSecurity'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import OTPPlan from '@/app/Components/OTPPlan/OTPPlan'
import Head from 'next/head';
export default function page() {
  return (
    <>
     <Head>
        <title>Instant & Secure OTP SMS Service for Fast Verification</title>
        <meta
          name="description"
          content="Get fast, secure OTP SMS delivery for all your verification needs. Reliable and instant OTP generation to protect logins, payments, and more. Try now!"
        />
        <meta name="keywords" content="otp sms service, receive sms online otp, otp sms provider, sms otp service providers" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oceantechzone.com/otp-sms" />
      </Head>

    <div>
    <OTPService/>
    <MaximumSecurity/>
    <BrandCarousel/>
    <OTPPlan/>
    </div>
      
    </>
  )
}
