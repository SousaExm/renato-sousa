import 'swiper/css';
import 'swiper/css/bundle'
import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { ReactNode } from 'react';

interface SliderProps {
  setings:SwiperProps;
  children: ReactNode
}

export function Slider ({children, setings}: SliderProps){
  return(
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...setings}>
      {children}
    </Swiper>
  )
}