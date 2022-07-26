import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from '@apollo/client'
import { client } from "../lib/apollo";
import React from "react";
import { Presentation } from "../components/Presentation";
import { SkilsList } from "../components/SkilsList";
import { ProjectsList } from "../components/ProjectList";
import { CertificatesList } from "../components/CertificatesList";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Contatc } from "../components/Contatc";

interface getAllUsersRes {
  data : {
    usersInfo : {
      slug: string
    }[]
  }
}

interface UserInfoProps {
  userInfo:{
    instagram: string;
    linkedin: string;
    name: string;
    presentation: string;
    whasapp: string;
    avatar: {
      url: string;
    }
    projects: {
      description: string;
      slug: string;
      title: string;
      walpapper: {
        url: string
      }
      userInfo: {
        slug:string;
      }
    }[];
    skils: {
      name:string
    }[];
    certificates :{
      title: string
      finishedIn: string;
      institution: string;
      certficateImage :{
        url: string;
      }
    }[];
  }
}

export default function Portfolio ({userInfo}:UserInfoProps){  
  console.log(userInfo)
  return (
    <>
      <Header local="home"/>
      <Presentation
      name={userInfo.name}
      avatarURL={userInfo.avatar?.url}
      description={userInfo.presentation}
      />
      <SkilsList
      skils={userInfo.skils}/>
      <CertificatesList
      certificates={userInfo.certificates}
      />
      <ProjectsList
      projects={userInfo.projects}
      />
      <Contatc/>
      <Footer/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  const { data }:getAllUsersRes = await client.query({
    query: gql`
    query {
      usersInfo {
      slug
      }
    }
  `
  })

  const paths = data.usersInfo.map( user => {
    return {
      params: {
        username: user.slug
      }
    }
  })

  return {
      paths,
      fallback: false, 
  }
}

export const getStaticProps:GetStaticProps = async(context) => {

  const slug = context.params?.username
  const { data } = await client.query({
    query: gql`
    query getUserInfo($slug: String!){
      userInfo(where: {slug: $slug}) {
        avatarUrl
        instagram
        linkedin
        name
        presentation
        whasapp
        avatar {
          url
        }
        skils {
          name
        }
        projects {
          description
          slug
          title
          walpapper {
            url
          }
          userInfo {
            slug
          }
        }
        certificates {
          title
          finishedIn
          institution
          certficateImage {
            url
          }
        }
      }
    }
    `,
    variables:{slug} 
  })
  
  return {
    props: data
  }
} 