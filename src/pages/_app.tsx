import type { AppProps } from 'next/app'
import { ResetCSS } from '../../global/ResetCSS'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ResetCSS/>
      <Component {...pageProps} />
    </>
    
  ) 
}

export default MyApp
