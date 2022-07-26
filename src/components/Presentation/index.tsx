import Image from 'next/image'
import * as S from './style'

interface PresentationProps{
  description?: string;
  avatarURL?: string;
  name?: string
}

export function Presentation({name, description, avatarURL}:PresentationProps) {
  return(
    <S.Wrapper id="home">
      <S.WrapperPresentation>
        <S.Avatar src={avatarURL} alt={name}/>
        <div>
          <S.Title>Olá...</S.Title>
          <S.Text>{description}</S.Text>
        </div>
      </S.WrapperPresentation>
    </S.Wrapper>
  )
}