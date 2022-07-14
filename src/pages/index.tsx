import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { ResetCSS } from '../../global/ResetCSS'
import { Presentation } from '../components/Presentation'
import { SkilsList } from '../components/SkilsList'
import { ProjectsList } from '../components/ProjectList'
import { About } from '../components/About'
import { Contatc } from '../components/Contatc'
import { Footer } from '../components/Footer'
import { CertificatesList } from '../components/CertificatesList'

const Home: NextPage = () => {
  return (
    <>
    <ResetCSS/>
    <Header/>
    <Presentation/>
    <SkilsList/>
    <CertificatesList/>
    <ProjectsList/>
    <About/>
    <Contatc/>
    <Footer/>
    </>
  )
}

export default Home
