import '../styles/globals.css'
import '../styles/future.css'
// import '../styles/art.css'
import { MoralisProvider } from 'react-moralis';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from '../components/Loading'
import * as ga from '../utils/ga'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // const handleRouteChange = (url) => {
  //   ga.pageview(url)
  //   setLoading(false)
  // }
  const path = router.pathname
  console.log('path', path)
  const handleRouteChange = (url) => {
    console.log('URL', router)
    setLoading(false)
    ga.pageview(router.pathname)
  }
  
  useEffect(() => {

    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(true));
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      console.log('ROUTER', router)
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(true));
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
    {loading ? <Loading /> :<>
     {path != "/vaporplanes" && path != "/" && <Header/> }
      <Component {...pageProps} />
    </> }
      
    </MoralisProvider>
  )
}

export default MyApp
