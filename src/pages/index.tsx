import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { ResetCSS } from '../../global/ResetCSS'
import { Presentation } from '../components/Presentation'
import { SkilsList } from '../components/SkilsList'
import { ProjectsList } from '../components/ProjectList'
import { About } from '../components/About'
import { Contatc } from '../components/Contatc'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
    <ResetCSS/>
    <Header/>
    <Presentation/>
    <SkilsList/>
    <ProjectsList/>
    <About/>
    <Contatc/>
    <Footer/>
    </>
  )
}

export default Home
