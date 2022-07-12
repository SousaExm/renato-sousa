import * as S from "./style"
import { Linkedin } from "@styled-icons/evaicons-solid/Linkedin"
import { Github } from "@styled-icons/bootstrap/Github"
import { Instagram } from "@styled-icons/bootstrap/Instagram"
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp"

export function Header(){
    return(
      <S.Wrapper>
        <S.NavWrapper>
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