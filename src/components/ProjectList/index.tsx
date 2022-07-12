import {  Swiper , SwiperSlide } from 'swiper/react'
import { ProjectsCard } from '../ProjectsCard'
import { Navigation } from 'swiper';

import * as S from './styled'

import 'swiper/css';
import 'swiper/css/bundle'

export function ProjectsList(){

  return (
    <S.Wrapper>
      <S.Title>
        Projetos
      </S.Title>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <S.CardsWrapper>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
          </S.CardsWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <S.CardsWrapper>
            <ProjectsCard/>
            <ProjectsCard/>
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