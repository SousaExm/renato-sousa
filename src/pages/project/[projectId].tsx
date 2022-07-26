import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from '@apollo/client'
import { client } from "../../lib/apollo";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProjectById } from "../../components/ProjectById";

interface getAllProjectsRes {
  data : {
    projects : {
      slug: string
    }[]
  }
}

interface ProjectProps {
  data: {
    project: {
      finished: boolean;
      publicUrl: string;
      published: boolean;
      repositoryUrl: string;
      skils: {
        name: string;
      }[]
      title: string;
      walpapper: {
        url: string;
      }
      userInfo: {
        slug: string;
      }
      description: string;
    }
  }
}

export default function Project(props:ProjectProps) {
  return(
    <>
    <Header homeUrl={props.data.project.userInfo.slug} local="projects"/>
    <ProjectById project={props.data.project}/>
    <Footer/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  const { data }:getAllProjectsRes = await client.query({
    query: gql`
    query {
      projects {
        slug
      }
    }
  `
  })

  const paths = data.projects.map( project => {
    return {
      params: {
        projectId: project.slug
      }
    }
  })

  return {
      paths,
      fallback: false, 
  }
}

export const getStaticProps:GetStaticProps = async(context) => {

  const slug = context.params?.projectId
  console.log()
  const  data  = await client.query({
    query: gql`
    query getProjectInfo($slug: String!){
    project(where: {slug: $slug}) {
      finished
      publicUrl
      published
      repositoryUrl
      description
      skils {
        name
      }
      title
      walpapper {
        url
      }
      userInfo {
        slug
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