import Link from 'next/link';
import { SkilIcons } from '../SkilIcons'
import * as S from './styled'

interface ProjectProps {
    project: {
      finished: boolean;
      publicUrl: string;
      published: boolean;
      repositoryUrl: string;
      skils: {
        name: string;
      }[]
      title: string;
      walpapper: {
        url: string;
      }
      userInfo: {
        slug: string;
      }
      description: string;
    }
}



export function ProjectById({project}:ProjectProps){

  console.log(project)
  const usedSkils = project.skils?.map( skil => skil.name)

  return(
    <S.Wrapper>
      <S.DataWrapper>
        <S.ImageWrapper src={project.walpapper?.url}/>
        <S.Title>{project.title}</S.Title>
        <S.Description>{project.description}</S.Description>
        <S.Progress>
        <p>
          Status: {project.finished ? (
            <span>Finalizado</span>
          ) : (
            <span>Em desenvolvimento</span>
          )}
        </p>
        <p>
          Status: {project.published ? (
            <span>on-line</span>
          ) : (
            <span>Indisponível</span>
          )}
        </p>
        </S.Progress>
      <S.TecnologiesWrapper>
        <h3>Tecnologias</h3>
        <div>
          {usedSkils?.map((skil, index) => (
            <S.Tecnologie key={skil+index}>
              {SkilIcons[skil]}
              <h4>{skil}</h4>
            </S.Tecnologie>
          ))}
        </div>
      </S.TecnologiesWrapper>
      <S.ButtonsWrapper>
        {project.publicUrl && (
          <a href={project.publicUrl} target="_blank"  rel="noreferrer">
            <S.Button>Visitar o site</S.Button>
          </a>
        )}
        {project.repositoryUrl && (
          <a href={project.repositoryUrl} target="_blank"  rel="noreferrer">
            <S.Button>Ver o código</S.Button>
          </a>
        )}
      </S.ButtonsWrapper>
      </S.DataWrapper>
    </S.Wrapper>
  ) 
}