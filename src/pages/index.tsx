import type { NextPage } from 'next'
import { gql } from '@apollo/client'
import { useQuery } from
import { FormEvent, useEffect } from 'react'
import * as S from './styled'

const TESTE = gql`
    {
      usersInfo {
        slug
      }
    }
  `

const Home: NextPage = () => {
  
  function teste(){
    const { loading, error, data} = useQuery(TESTE)
  }

  useEffect(() => {
    console.log('oi')
    teste() 
  })
  
  return (
    <>
      <div>Encontre um portfólio</div>
    </>
  )
}

export default Home
