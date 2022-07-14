import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  height: fit-content;
  color: #fff;
  background-image: url("/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: inset -8px -74px 59px -76px rgba(0,0,0,1);

  padding: 140px 15% 60px;

  @media (max-width: 1100px){
    padding: 140px 5% 60px;
  }
`

export const DataWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0,.8);

  border-radius: 8px;
`

export const ImageWrapper = styled.img`
  width: 100%;
  padding: 32px;

`

export const Title = styled.h2`
  margin: 0 auto;
  width: fit-content;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 32px;

  padding: 8px;
  border-bottom: 1px solid red;

  margin-bottom: 32px;

`

export const Description = styled.div`
  width: 50%;
  margin: 0 auto 32px;
  text-align: center;

  @media (max-width: 880px){
    width: 70%;
  }
`

export const Progress = styled.div`
  width: fit-content;
  text-align: center;
  margin: 0 auto 36px;
  
  display: flex;

  gap: 16px;
  color: black;

  p {
    width: 280px;
    padding: 8px;
    border-radius: 8px;
    border:  1px solid black;
    background-color: rgba(255,255,255, .8);
  
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 880px){
    flex-direction: column;
  }
`

export const TecnologiesWrapper = styled.div`  
  h3 {
    width: fit-content;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    border-bottom: 1px solid red;
    padding: 6px;
    margin: 0 auto 32px;
  }

  > div {
    background-color: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;
    width: fit-content;

    max-width: 600px;
    padding:10%;

    border-radius: 8px;
    margin: 0 auto;
  }
`

export const Tecnologie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
  h4 {
    text-transform: uppercase;
    font-weight: bold;
  }
`

export const ButtonsWrapper =  styled.div`

  display: flex;
  justify-content: center;
  gap: 16px;

  margin: 32px;

  @media (max-width: 440px){
    flex-direction: column;
    align-items: center;
  }
`

export const Button = styled.button`
  border: 1px solid red;
  padding: 16px 8px;
  font-weight: bold;

  text-transform: uppercase;

  background-color: black;
  width: 180px;

  text-align: center;

  border-radius: 8px;

  transition: .4s;

  &:hover {
    cursor: pointer;
    background-color: red;
  }
`