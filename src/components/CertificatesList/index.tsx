import * as S from './styled'

import { Swiper, SwiperSlide, SwiperProps} from "swiper/react"
import { Pagination , Autoplay } from 'swiper'

import 'swiper/css';
import 'swiper/css/bundle'

interface CertificateProps {
  certificates :{
    finishedIn: string;
    institution: string;
    title: string;
    certficateImage :{
      url: string;
    }
  }[];
}

export function CertificatesList ({ certificates } : CertificateProps){

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
          
          {certificates?.map( certificate => (
            <SwiperSlide key={certificate.certficateImage.url}>
              <S.CertificateWrapper>
                <S.ImageWrapper src={certificate.certficateImage.url}/>
                <S.CertificateTitle>
                  {certificate.title}
                </S.CertificateTitle>
              </S.CertificateWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.WrapperData>
    </S.Wrapper>
  )
}