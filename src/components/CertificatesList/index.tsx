import * as S from './styled'
import Image from 'next/image'

import { Swiper, SwiperSlide, SwiperProps} from "swiper/react"
import { Pagination , Autoplay } from 'swiper'

import 'swiper/css';
import 'swiper/css/bundle'

export function CertificatesList (){

  const setings:SwiperProps = {
    slidesPerView: 1,
    pagination: true,
    speed: 3000,
    autoplay: {
      delay: 1000,
      waitForTransition: true,
    }
  }


  return (
    <S.Wrapper>
      <S.WrapperData>
        <S.Title>
          Certificados
        </S.Title>
        <Swiper {...setings} modules={[Autoplay, Pagination]}>
          <SwiperSlide>
            <S.ImageWrapper src='/certificado-1.png'/>
          </SwiperSlide>
          <SwiperSlide>
            <S.ImageWrapper src='/certificado-1.png'/>
          </SwiperSlide>
          <SwiperSlide>
            <S.ImageWrapper src='/certificado-1.png'/>
          </SwiperSlide>
          <SwiperSlide>
            <S.ImageWrapper src='/certificado-1.png'/>
          </SwiperSlide>
          <SwiperSlide>
            <S.ImageWrapper src='/certificado-1.png'/>
          </SwiperSlide>
          <SwiperSlide>
            <S.ImageWrapper src='/certificado-1.png'/>
          </SwiperSlide>
        </Swiper>
      </S.WrapperData>
    </S.Wrapper>
  )
}