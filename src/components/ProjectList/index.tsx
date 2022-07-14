import {  Swiper , SwiperSlide, SwiperProps } from 'swiper/react'
import { useEffect, useState } from 'react';
import { ProjectsCard } from '../ProjectsCard'
import { Navigation } from 'swiper';

import * as S from './styled'

import 'swiper/css';
import 'swiper/css/bundle'


export function ProjectsList(){

  const [ windowWidth, setWindowWidth ] = useState(0)
  useEffect(() => {
    if( windowWidth === 0){
      setWindowWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', (() => {
      setWindowWidth(document.body.clientWidth)
    }))
  })

  const setings:SwiperProps = {
    slidesPerView: windowWidth > 1200 ? 3 : windowWidth > 880 ? 2 : 1 ,
    speed: 1000,
    navigation: true,
  }

  return (
    <S.Wrapper id="projects">
      <S.Title>
        Projetos
      </S.Title>
      <Swiper {...setings} modules={[Navigation]}>
        <SwiperSlide>
          <S.CardsWrapper>
            <ProjectsCard/>  
          </S.CardsWrapper>
        </SwiperSlide>                     
        <SwiperSlide>
          <S.CardsWrapper>
            <ProjectsCard/>  
          </S.CardsWrapper>
        </SwiperSlide>                     
        <SwiperSlide>
          <S.CardsWrapper>
            <ProjectsCard/>  
          </S.CardsWrapper>
        </SwiperSlide>                     
        <SwiperSlide>
          <S.CardsWrapper>
            <ProjectsCard/>  
          </S.CardsWrapper>
        </SwiperSlide>                     
        <SwiperSlide>
          <S.CardsWrapper>
            <ProjectsCard/>  
          </S.CardsWrapper>
        </SwiperSlide>                     
        <SwiperSlide>
          <S.CardsWrapper>
            <ProjectsCard/>  
          </S.CardsWrapper>
        </SwiperSlide>                     
        <SwiperSlide>
          <S.CardsWrapper>
            <ProjectsCard/>  
          </S.CardsWrapper>
        </SwiperSlide>                     
                   
      </Swiper>
    </S.Wrapper>
  )
} 