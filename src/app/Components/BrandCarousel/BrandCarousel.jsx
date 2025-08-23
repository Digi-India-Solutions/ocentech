'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './brandcarousel.css';

import brand1 from '@/app/Images/brand1.png';
import brand2 from '@/app/Images/brand2.png';
import brand3 from '@/app/Images/brand3.png';
import brand4 from '@/app/Images/brand4.png';
import brand5 from '@/app/Images/brand5.png';
import brand6 from '@/app/Images/brand3.png';

import Image from 'next/image';

export default function BrandCarousel() {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  const allSlides = [...brands, ...brands]; // duplicate for smooth looping

  return (
    <>
      <div className='BrandSec'>
        <div className='BrandTitleSec'>
          <h1 className='BrandTitle'>
            TRUSTED BY 500+ <span className='spanbold'>LARGE AND SMALL BUSINESS</span>
          </h1>
        </div>
      </div>

      <div className="brand-carousel-container py-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,  // Smallest mobile
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,  // Mobile
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,  // Large mobile
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,  // Tablets
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,  // Desktops
              spaceBetween: 30,
            },
          }}
        >
          {allSlides.map((brand, index) => (
            <SwiperSlide key={index} className="text-center">
              <Image
                src={brand}
                alt={`Brand ${index + 1}`}
                className="brand-icon"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
