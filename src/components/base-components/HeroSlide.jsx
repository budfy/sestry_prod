import { SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

const HeroSlide = styled(SwiperSlide)`
  width: auto;
  transform-origin: center;
  transition: all 0.25s;
  &:hover{
    transform: scale(1.05);
  }
`
export default HeroSlide;