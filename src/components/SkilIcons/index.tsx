import { HtmlFive2 } from '@styled-icons/icomoon/HtmlFive2'
import { Css3 }  from '@styled-icons/remix-line/Css3' 
import { Javascript } from '@styled-icons/simple-icons/Javascript'
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs'
import { Git } from '@styled-icons/boxicons-logos/Git'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { Graphql } from '@styled-icons/simple-icons/Graphql'

import * as S from './styled'

interface SkilIconsTypes {
  [key: string]: JSX.Element
}

export const SkilIcons: SkilIconsTypes = {
  'html5': (
    <S.HtmlIcon>
      <HtmlFive2/>
    </S.HtmlIcon>
  ),
  'css3': (
    <S.Css3Icon>
      <Css3/>
    </S.Css3Icon>
  ),
  'javascript': (
    <S.JavascriptIcon>
      <Javascript/>
    </S.JavascriptIcon>
  ),
  'react': (
    <S.ReactIcon>
      <ReactLogo/>
    </S.ReactIcon>
  ),
  'typescript': (
    <S.TypescriptIcon>
      <Typescript/>
    </S.TypescriptIcon>
  ),
  'nodejs': (
    <S.NodeIcon>
      <Nodejs/>
    </S.NodeIcon>
  ),
  'git': (
    <S.GitIcon>
      <Git/>
    </S.GitIcon>
  ),
  'github': (
    <S.GitHubIcon>
      <Github/>
    </S.GitHubIcon>
  ),
  'graphql': (
    <S.GraphQLIcon>
      <Graphql/>
    </S.GraphQLIcon>
  )
}
