import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'
import './Hero.scss'

import { Autoplay, Navigation } from 'swiper/modules';

import HeroSlide from 'components/site-components/HeroSlide/HeroSlide';
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react';
import slide1 from 'assets/images/products/pic_1.jpg'
import slide2 from 'assets/images/products/pic_2.jpg'
import slide3 from 'assets/images/products/pic_3.jpg'
import slide4 from 'assets/images/products/pic_4.jpg'
import slide5 from 'assets/images/products/pic_5.jpg'

export default function Hero (props)
{
  const slidesList = [
    {
      title:"Свєта",
      pic:slide1,
      link:"./",
      text:"А на дворі було лєто. І при чом тут канхвети?"
    },{
      title:"Акція",
      pic:slide2,
      link:"./",
      text:"Купуй два кольє за ціної 3х та отримай друге кольє в подарунок до першого"
    },{
      title:"Сережки",
      pic:slide3,
      link:"./",
      text:"Купуй сережку на ліве вухо і отримай у праве"
    },{
      title:"М'яті сережки",
      pic:slide4,
      link:"./",
      text:"Відправимо тобі номер телефону Сережки"
    },
    {
      title:"Майже золоті сережки",
      pic:slide5,
      link:"./",
      text:"Але за ціною срібних, бо вони не золоті"
    },
  ]

  const getSlides = slidesList.map((slide) =>
    <SwiperSlide className='hero__slide'>
      <HeroSlide
        className='hero__slide-inner'
        link={slide.link}
        pic={ slide.pic }
        title={slide.title}>
          {slide.text}
      </HeroSlide>
    </SwiperSlide>
  )
  
  return (
      <Swiper className='hero'
        modules={[Navigation,Autoplay]}
        loop={ true }
        centeredSlides={true}
        navigation
        slidesPerView={'auto'}
        speed={ 2500 }
        spaceBetween={80}
        autoplay={{
          delay: 5000
        }}
      >
        {getSlides}
      </Swiper>
)
}