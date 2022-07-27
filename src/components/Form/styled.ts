import styled from 'styled-components'

export const Wrapper =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 32px 15%;
  gap: 30px;
  color: #fff;
  background-image: url("/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  box-shadow: inset -8px -74px 59px -76px rgba(0,0,0,1);

  @media(max-width: 880px){
    padding: 32px 5%;
  }
`

export const TitleWrapper = styled.div`
  p {
    margin: 0 auto;
    padding: 0 15%;
    text-align: center;
  }


  @media(max-width: 760px ){
    > p {
      padding: 0 5%;
    }
  } 
`


export const Title = styled.h2`
  margin: 0 auto 16px;
  font-weight: bold;
  font-size: 32px;
  text-align: center;

  width: fit-content;
  border-bottom: 2px solid red;
  text-transform: uppercase;

  @media(max-width: 760px ){
    font-size: 24px; 
  } 

`

export const FormWrapper = styled.form`
  background-color: rgba(0,0,0,.8);
  border-radius: 8px;

  padding: 32px;

  width: 680px;
  display: flex;  
  gap: 16px;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  
  
  > button {
    border: 1px solid red;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 8px;
    background-color: black;

    width: 100px;
    text-align: center;
    margin-top: 16px;

    transition: .4s;
    &:hover {
    background-color: red;
    }
  }

  @media(max-width: 880px){
    width: 100%;
    padding: 32px 5%;
  }
`

export const WrapperFormData = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;

  @media(max-width: 760px){
    flex-direction: column;
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 6px;
  > label {
    text-transform: uppercase;
  }

  > input {
    background-color: white;
    padding: 6px;
    border-radius: 8px;
    outline: none;

    width: 300px;
    color: black;

    @media(max-width: 760px){
      width: 100%;
    }
  }

`

export const MensageWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  margin-top: 16px;
  width: 100%;

  > label {
    text-transform: uppercase; 
    margin: 0 auto;   
  }

  > textarea {
    background-color: white;
    padding: 6px;
    border-radius: 8px;
    outline: none;
    width: 100%;
    resize: none;
    height: 80px;
    color: black;
  }
`