import { Send } from 'styled-icons/boxicons-solid'
import * as S from './styled'

export function Contatc (){
  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.TitleWrapper>
          <S.Title>Entre em contato</S.Title>
          <p>Preencha as informaçoes abaixo com sua solicitaçao e em breve será respondido.</p>
        </S.TitleWrapper>
        
        <S.WrapperFormData>
          <S.InputWrapper>
            <label htmlFor="">Seu nome</label>
            <input type="text" placeholder='Seu nome vem aqui'/>
          </S.InputWrapper>
          <S.InputWrapper>
            <label htmlFor="">E-mail</label>
            <input type="text" placeholder='exemplo@email.com'/>
          </S.InputWrapper>
          <S.InputWrapper>
            <label htmlFor="">Telefone</label>
            <input type="text" placeholder='(xx) xxxxx-xxxx'/>
          </S.InputWrapper>
          <S.InputWrapper>
            <label htmlFor="">Assunto</label>
            <input type="text" placeholder='Informe o assunto'/>
          </S.InputWrapper>
        </S.WrapperFormData>
        <S.MensageWrapper>
          <label htmlFor="">mensagem</label>
          <textarea placeholder='Digite aqui...'/>
        </S.MensageWrapper>
        <button>Enviar</button>
      </S.FormWrapper>
    </S.Wrapper>
  )
}