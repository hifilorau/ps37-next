import '../styles/globals.css'
import '../styles/future.css'
// import '../styles/art.css'
import { MoralisProvider } from 'react-moralis';
import { useRouter } from "next/router";
// import Loading from '../components/Loading'
// import * as ga from '../utils/ga'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // }
  const path = router.pathname


  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
     {path != "/vaporplanes" && path != "/" && <Header/> }
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
