import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'

import { Autoplay, Navigation } from 'swiper/modules';

import HeroSlide from 'components/base-components/HeroSlide';
import { NavLink } from 'react-router-dom';
import { Swiper } from 'swiper/react'
import logo from 'assets/images/logo/logo_v.svg'

export default function Hero (props)
{
  
  return (
    <div className='hero'>
      <Swiper
        modules={[Navigation,Autoplay]}
        loop={ true }
        navigation
        slidesPerView={'auto'}
        speed={ 3000 }
        spaceBetween={80}
        autoplay={ {
          delay: 8000
        }}
      >
        <HeroSlide>
          <NavLink to='./'>
          <img src={logo} alt=""/>
          </NavLink>
          </HeroSlide>
        <HeroSlide >
          <img src={logo} alt=""/>
          </HeroSlide>
      </Swiper>
  </div>
)
}