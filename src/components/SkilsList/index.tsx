import { Slider } from "../Slider"
import { SwiperSlide, SwiperProps} from "swiper/react"

import { SkilIcons } from "../SkilIcons"

import * as S from './styled'
import { useState, useEffect } from "react"

interface SkilsListProps{
  skils?: {
    name: string
  }[]
}

export function SkilsList ({skils}:SkilsListProps) {

 

  const [ windowWidth, setWindowWidth ] = useState(0)
  useEffect(() => {
    if( windowWidth === 0){
      setWindowWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', (() => {
      setWindowWidth(document.body.clientWidth)
    }))
  })
  
  
  const userSkils = skils?.map(skil => skil.name)

  const setings:SwiperProps = {
    slidesPerView: windowWidth > 1200 ? 4 : windowWidth > 880 ? 3 : 1 ,
    speed: windowWidth > 880 ? 4000 : 2000 ,
    pagination: true,
    autoplay: {
      delay: 1000,
      waitForTransition: true,
    }
  }


  return (
    <S.Wrapper id="skils">
      <S.Title>Habilidades</S.Title>
      <Slider
      setings={setings}
      >
        {userSkils?.map((skil , index) => (
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