import { gql, useQuery } from '@apollo/client'
import { FormEvent, useEffect } from 'react'
import * as S from './styled'

const TESTE = gql`
    {
      usersInfo {
        slug
      }
    }
  `

export function Form (){

  
  useEffect(() => {
    const { loading, error, data} = useQuery(TESTE)
    loading && console.log(loading)
    error && console.log(error)
    data && console.log(data)
  },[])


  return (
    <S.Wrapper id="contact">
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
        <button
        >Enviar</button>
      </S.FormWrapper>
    </S.Wrapper>
  )
}