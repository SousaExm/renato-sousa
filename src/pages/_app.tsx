import { ApolloProvider } from '@apollo/client'
import { client } from '../../lib/apolloClient'
import type { AppProps } from 'next/app'
import { ResetCSS } from '../../global/ResetCSS'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ApolloProvider client={client}>
        <ResetCSS/>
        <Component {...pageProps} />  
      </ApolloProvider>
    </>
  ) 
}

export default MyApp
