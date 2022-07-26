import {  Swiper , SwiperSlide, SwiperProps } from 'swiper/react'
import { useEffect, useState } from 'react';
import { ProjectsCard } from '../ProjectsCard'
import { Navigation } from 'swiper';

import * as S from './styled'

import 'swiper/css';
import 'swiper/css/bundle'

interface ProjectListProps {
  projects: {
    description: string;
    slug: string;
    title:string;
    walpapper: {
      url: string
    }
  }[];
}

export function ProjectsList({projects}:ProjectListProps){
  
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
    slidesPerView: windowWidth > 1200 && projects?.length > 2 ? 3 : windowWidth > 880 && projects?.length >= 2 ? 2 : 1 ,
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
          {projects?.map(project => (
            <S.CardsWrapper key={"project" + project.slug}>
              <ProjectsCard
                slug={project.slug}
                imageUrl={project.walpapper.url}
                title={project.title}
                description={project.description}
              />  
            </S.CardsWrapper>
          ))}
        </SwiperSlide>                     
                   
      </Swiper>
    </S.Wrapper>
  )
} 