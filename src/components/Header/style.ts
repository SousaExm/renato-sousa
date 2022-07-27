import styled from "styled-components";
import {StyledIconBase} from '@styled-icons/styled-icon'

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: rgba(0,0,0,.8);

  z-index: 9999;
  padding: 0 15%;

  @media (max-width: 1100px) {
    padding: 0 5%;
    align-items: space-between;
    
    .open {
      display: flex;
    }

    Overlay.open {
      display: block;
    }
  }
  
  .for-page-projects{
    width: fit-content;
    padding: 0 8px;
    border: none;
    box-shadow: none;
    cursor: pointer;
  }
`

export const NavWrapper = styled.nav`
  display: flex;
  height: 100%;
  
  @media (max-width: 760px){ 

    display: none;
    flex-direction: column;
    align-items: flex-start;
    background-color: black;

    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;

    max-width: 300px;
    width: 70%;
  }
`

export const NavLink = styled.a`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 80px;
  min-width: 100px;

  text-align: center;
  border-color: #FC0E49;

  transition: .1s;

  &:hover {
    border-bottom: 2px solid #FC0E49;
    box-shadow: inset 0px 15px 23px -20px rgba(255,0,13,1);
  }


  @media (max-width: 760px){

    width: 100%;
    box-shadow: inset 0px 15px 23px -20px rgba(255,0,13,1);
    border-bottom: 1px solid #FC0E49;

    &:hover {
    border-bottom: 2px solid #FC0E49;
    box-shadow: inset 0px 15px 23px -20px rgba(255,0,13,1);
    }
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 12px;

  @media ( max-width: 1100px){
    margin-right: 0;
  }
`

export const WrapperGithub = styled.div`
  background-color: #161B22;
  width: 32px; 
  height: 32px;
  padding: 4px;
  border-radius: 8px;
  
  ${StyledIconBase}{
    color: #fff;
    width: 24px;
    height: 24px;
  }
`
export const WrapperIntagram = styled.div`
  background: linear-gradient(36deg, rgba(249,217,0,1) 0%, rgba(247,1,3,1) 50%, rgba(125,56,178,1) 100%);
  width: 32px; 
  height: 32px;
  padding: 4px;
  border-radius: 8px;
  
  ${StyledIconBase}{
    color: #fff;
    width: 24px;
    height: 24px;
  }
`
export const WrapperWhats = styled.div`

  background: linear-gradient(0deg, rgba(105,213,78,1) 0%, rgba(15,142,8,1) 56%, rgba(105,213,78,1) 100%);
  width: 32px; 
  height: 32px;
  padding: 4px;
  border-radius: 8px;
  
  ${StyledIconBase}{
    color: #fff;
    width: 24px;
    height: 24px;
  }
`

export const OpenAndCloseMenu = styled.div`
  display: none;
  border-bottom: 3px solid red;
  border-radius: 8px;
  padding: 4px;

  box-shadow: inset 0px 15px 23px -20px rgba(255,0,13,1),  0px 0px 15px -8px rgba(255,255,255,1);

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 760px){
    display: block;
  }
  
  ${StyledIconBase}{
    color: #fff;
    width: 24px;
    height: 24px;
  }
`

export const Overlay = styled.div`
  display: none;
  @media (max-width: 760px){
    position: fixed;
    background-color: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
  }
`