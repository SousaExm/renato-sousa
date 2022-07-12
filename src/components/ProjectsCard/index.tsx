import * as S from './styled'

export function ProjectsCard() {
  return(
    <S.Wrapper>
      <S.ImgWrapper src='/pokenext.png'/> 
      <S.Title>Pokenext</S.Title> 
      <S.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing el... 
      </S.Description>  
      <S.Button>Ver mais...</S.Button>
    </S.Wrapper>
  )
}