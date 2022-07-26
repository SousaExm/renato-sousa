import * as S from './styled'
import Link from 'next/link';

interface ProjectProps {
  title:string;
  description:string;
  slug: string;
  imageUrl: string;
}

export function ProjectsCard({title, description, slug, imageUrl}:ProjectProps) {
  return(
    <S.Wrapper>
      <S.ImgWrapper src={imageUrl}/> 
      <S.Title>{title}</S.Title> 
      <S.Description>
        {description.slice(0,70)}... 
      </S.Description>
      <Link href={`/project/${slug}`}>
        <S.Button>Ver mais...</S.Button>
      </Link>
      
    </S.Wrapper>
  )
}