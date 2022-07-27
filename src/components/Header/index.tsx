import * as S from "./style"
import  Link  from 'next/link'
import { Linkedin } from "@styled-icons/evaicons-solid/Linkedin"
import { Github } from "@styled-icons/bootstrap/Github"
import { Instagram } from "@styled-icons/bootstrap/Instagram"
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp"
import { Menu } from '@styled-icons/boxicons-regular/Menu'

import { useState } from "react"
import { ContactIcons } from "../ContactIcons"

interface HeaderPropsType {
  local: "home" | "projects"
  homeUrl?: string;
  contacts?: undefined; 
}

export function Header({local, homeUrl}:HeaderPropsType){
    
  const [ menuStatus , setMenuStatus ] = useState<string>("")  
  
  function handleToogleMenu() {
    if(menuStatus === "" && document.body.clientWidth < 760){
      setMenuStatus("open")
    }else(
      setMenuStatus("")
    )
  }

  return(
    <S.Wrapper>
      
      {local === "home"? (
         <>
          <S.Overlay
          className={menuStatus}
          onClick={() => handleToogleMenu()}/>
          <S.OpenAndCloseMenu
          onClick={() => handleToogleMenu()}
          >
            <Menu/>
          </S.OpenAndCloseMenu>
          <S.NavWrapper className={menuStatus}>
            <S.NavLink 
            href="#home"
            onClick={() => handleToogleMenu()}
            >Home</S.NavLink>
            <S.NavLink href="#skils">Skils</S.NavLink>
            <S.NavLink href="#projects">Projetos</S.NavLink>
            <S.NavLink href="#about">Sobre</S.NavLink>
            <S.NavLink href="#contact">Contato</S.NavLink>
          </S.NavWrapper>
         </>
      ) : (
        <Link href={homeUrl? "/" + homeUrl : "#"}>
          <S.NavLink className="for-page-projects">Voltar</S.NavLink>
        </Link>
      )}
    
      <S.IconsWrapper>
        <ContactIcons
        url='google.com'
        iconName="linkedin"   
        >
          <Linkedin/>
        </ContactIcons>
        <ContactIcons
        url='google.com'
        iconName="github"   
        >
          <Github/>
        </ContactIcons>
        <ContactIcons
        url='google.com'
        iconName="instagram"   
        >
          <Instagram/>
        </ContactIcons>
        <ContactIcons
        url='google.com'
        iconName="whatsApp"   
        >
          <Whatsapp/>
        </ContactIcons>
      </S.IconsWrapper>
    </S.Wrapper>
  )
}