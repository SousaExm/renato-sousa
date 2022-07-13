import * as S from "./style"
import { Linkedin } from "@styled-icons/evaicons-solid/Linkedin"
import { Github } from "@styled-icons/bootstrap/Github"
import { Instagram } from "@styled-icons/bootstrap/Instagram"
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp"
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { Close } from "@styled-icons/ionicons-outline/Close"

import { useState } from "react"

export function Header(){
    
  const [ menuStatus , setMenuStatus ] = useState<string>("")  
  
  function handleToogleMenu() {
    if(menuStatus === ""){
      setMenuStatus("open")
    }else(
      setMenuStatus("")
    )
  }

  return(
    <S.Wrapper>
      <S.Overlay 
      className={menuStatus}
      onClick={() => handleToogleMenu()}/>
      <S.OpenAndCloseMenu
      onClick={() => handleToogleMenu()}
      >
        <Menu/>
      </S.OpenAndCloseMenu>
      <S.NavWrapper className={menuStatus}>
        <S.NavLink href="#">Home</S.NavLink>
        <S.NavLink href="#">Skils</S.NavLink>
        <S.NavLink href="#">Projects</S.NavLink>
      </S.NavWrapper>
      <S.IconsWrapper>
        <S.WrapperLinkedin>
          <Linkedin/>
        </S.WrapperLinkedin>
        <S.WrapperGithub>
          <Github/>
        </S.WrapperGithub>
        <S.WrapperIntagram>
          <Instagram/>
        </S.WrapperIntagram>
        <S.WrapperWhats>
          <Whatsapp/>
        </S.WrapperWhats>
      </S.IconsWrapper>
    </S.Wrapper>
  )
}