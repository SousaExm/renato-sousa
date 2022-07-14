import { SkilIcons } from '../SkilIcons'
import * as S from './styled'

export function ProjectById(){

  const usedSkils = ["html5", "css3", "javascript", "react", "html5"]

  return(
    <S.Wrapper>
      <S.DataWrapper>
        <S.ImageWrapper src="/pokenext.png"/>
        <S.Title>Pokenext</S.Title>
        <S.Description> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia porro doloremque tempora a autem maiores architecto unde quidem hic ipsum! Blanditiis, iure praesentium earum tempore assumenda laudantium temporibus? Ipsum, sint.
        </S.Description>
        <S.Progress>
        <p>Status: <span>Em desenvolvimento</span></p>
        <p>Deploy: <span>Nao realizado</span></p>
      </S.Progress>
      <S.TecnologiesWrapper>
        <h3>Tecnologias</h3>
        <div>
          {usedSkils.map(skil => (
            <S.Tecnologie>
              {SkilIcons[skil]}
              <h4>{skil}</h4>
            </S.Tecnologie>
          ))}
        </div>
      </S.TecnologiesWrapper>
      <S.ButtonsWrapper>
        <S.Button>Visitar o site</S.Button>
        <S.Button>Ver o código</S.Button>
      </S.ButtonsWrapper>
      </S.DataWrapper>
    </S.Wrapper>
  ) 
}