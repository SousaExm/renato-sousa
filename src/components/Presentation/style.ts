import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 15% 0;
  gap: 30px;
  height: 90vh;
  color: #fff;
  background-image: url("/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: inset -8px -74px 59px -76px rgba(0,0,0,1);

  @media (max-width: 1100px){
    padding: 80px 5% 0;
  }

`

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: black;

  @media (max-width: 1100px){
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

  padding: 32px;
  background-color: rgba(0,0,0, .8);

  @media (max-width: 1100px){
    flex-direction: column;
    width: 100%;
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

  @media (max-width: 1100px){
    width: 100%;
  }
`