import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  height: 340px;
  border-bottom: 1px solid red;
  box-shadow: -15px -1px 145px 3px rgba(56,53,56,.3);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  border-radius: 8px;

  transition: .4s;

  &:hover {
    box-shadow: -15px -1px 145px 3px rgba(255,0,0,.2);
  }
`

export const ImgWrapper = styled.img`
  width: 100%;
  height: 50%;

  margin-bottom: 32px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  padding-left: 16px;
`

export const Description = styled.p`
  padding: 16px;
  margin-bottom: 8px; 
`

export const Button = styled.button`
  border: 1px solid red;
  padding: 8px;
  font-weight: bold;

  width: 96px;

  align-self: flex-end;

  margin-right: 16px;
  margin-bottom: 32px;
  border-radius: 8px;

  transition: .4s;

  &:hover {
    cursor: pointer;
    background-color: red;
  }
`
