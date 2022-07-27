import styled from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'

interface IconWrapperTypes {
  iconName: "linkedin" | "instagram" | "whatsApp" | "github" 
}

function selectColorTheme(name:string) {
  switch(name){
    case "linkedin" :
      return "#2868B2;"
    case "whatsApp" :
      return "linear-gradient(0deg, rgba(105,213,78,1) 0%, rgba(15,142,8,1) 56%, rgba(105,213,78,1) 100%)"
    case "instagram" :
      return "linear-gradient(36deg, rgba(249,217,0,1) 0%, rgba(247,1,3,1) 50%, rgba(125,56,178,1) 100%)"
    case "github" :
      return "#161B22";
  }
  
}

export const IconWrapper = styled.div<IconWrapperTypes>`
  
  background: ${props => selectColorTheme(props.iconName)};


  padding: 4px;
  border-radius: 8px;
  width:32px;
  height:32px;

  &:hover {
      cursor: pointer;
  }

  .visible {
    visibility: visible;
  }

  ${StyledIconBase}{
    color: #fff;
    width: 24px;
    height: 24px;
  }
`

export const QrCodeWrapper = styled.div`
  
  visibility: hidden;
  position: absolute;

  min-width: 180px;
  max-width: 200px;

  width: fit-content;
  padding: 18px;

  right: 15%;
  top: 56px;
  text-align: center;

  gap: 16px;

  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: rgba(0,0,0,.5);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  #canvas {
    border-radius: 8px;
  }

  > p a {
    border-bottom: 1px solid #fff;
    padding-bottom: 1px;

    &:hover {
      cursor: pointer;
      border-bottom: 3px solid red;
    }
  }

  @media (max-width: 1100px){
    right: 5%;
  }
` 