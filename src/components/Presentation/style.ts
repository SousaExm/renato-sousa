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

  padding-top: 80px;
`

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: black;

  @media (max-width: 840px){
    width: 200px;
    height: 200px;
  }
`

export const WrapperPresentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  border-radius: 8px;
  gap: 16px;

  margin: 80px 15%;

  padding: 32px;
  background-color: rgba(0,0,0, .8);

  @media (max-width: 780px){
    flex-direction: column;
    width: 100%;
    margin: 16px 5%;
  }
`

export const Title = styled.h1`

  border-bottom: 4px solid red;

  width: 140px;
  
  margin-bottom: 16px;
  font-size: 48px;
  font-weight: bold;
`

export const Text = styled.p`
  width: 360px;
  line-height: 20px;
  letter-spacing: 1px;

  font-size: 18px;

  @media (max-width: 680px){
    width: 100%;
  }
`