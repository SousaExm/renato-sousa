import Image from 'next/image'
import * as S from './style'

export function Presentation() {
  return(
    <S.Wrapper>
      <S.WrapperPresentation>
        <S.Avatar src="https://avatars.githubusercontent.com/u/94645489?v=4" />
        <div>
          <S.Title>Olá...</S.Title>
          <S.Text> Seja muito bem vindo(a)! Meu nome é Renato Sousa e atualmente sou desenvolvedor fron-end Jr. Aqui nesse espaço voce terá a possibilidade de me conhecer um pouco melhor, sinta-se à vontade.</S.Text>
        </div>
      </S.WrapperPresentation>
    </S.Wrapper>
  )
}