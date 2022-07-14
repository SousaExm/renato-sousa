import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProjectById } from "../../components/ProjectById";


export default function Project() {
  return(
    <>
    <Header local="projects"/>
    <ProjectById/>
    <Footer/>
    </>

  )
}