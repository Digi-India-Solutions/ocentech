import React from 'react'
import VoiceCallService from '@/app/Components/VoiceCallService/VoiceCall'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import VoiceCallPlans from '@/app/Components/VoiceCallPlan/VoiceCallPlan'

export default function page() {
  return (
    <>
    <div>
        <VoiceCallService/>
        <BrandCarousel/>
        <VoiceCallPlans/>
    </div>
      
    </>
  )
}
