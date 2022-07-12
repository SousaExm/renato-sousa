import { Slider } from "../Slider"
import { SwiperSlide, SwiperProps} from "swiper/react"

import { SkilIcons } from "../SkilIcons"

import * as S from './styled'

export function SkilsList () {

  const userSkils = [
    "html5", "css3", "javascript", "typescript", "react", "nodejs", 
    "git", "github", "graphql" 
  ]
  
  const setings:SwiperProps = {
    slidesPerView: 4,
    speed: 5000,
    pagination: true,
    autoplay: {
      delay: 1000,
      waitForTransition: true,
    }
  }
  
  return (
    <S.Wrapper>
      <S.Title>Habilidades</S.Title>
      <Slider
      setings={setings}
      >
        {userSkils.map((skil , index) => (
            (SkilIcons[skil] !== undefined ? (
              <SwiperSlide key={index + skil}>
                {SkilIcons[skil]}
                <S.IconTitle>{skil}</S.IconTitle>
              </SwiperSlide>
            ) : (
            (
              <SwiperSlide key={index+ skil}>
                {skil}
              </SwiperSlide>
            )
            ))
        ))}
      </Slider>
    </S.Wrapper>   
  )
}