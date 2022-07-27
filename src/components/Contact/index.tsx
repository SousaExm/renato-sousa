import { Icon } from './Icon';
import * as S from './styled' 
import { Linkedin } from "@styled-icons/evaicons-solid/Linkedin"
import { Github } from "@styled-icons/bootstrap/Github"
import { Instagram } from "@styled-icons/bootstrap/Instagram"
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp"

interface ContactsProps{
  contacts: {
    url: string;
    title: string;
  }[] 
}


export function Contact({contacts}:ContactsProps) {
 
  function getIcon(iconName: string){  
    switch(iconName){
      case "whatsApp" :
        return (<Whatsapp/>)
      case "linkedin" :
        return (<Linkedin/>)
      case "instagram" :
        return (<Instagram/>)
      case "github" :
        return (<Github/>)
    }
  }

  if(!contacts){
    return (<div></div>)
  }

  return (
    <S.IconsWrapper>
      {contacts.map(contact => (
        <Icon 
        key={contatc.url + contact.title}
        iconName={contact.title}
        url={contact.url}
        >
          {getIcon(contact.title)}
        </Icon>
      ))}
    </S.IconsWrapper>
  )
}