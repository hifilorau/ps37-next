import '../styles/globals.css'
import '../styles/future.css'
// import '../styles/art.css'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from '../components/Loading'


import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(true));
    router.events.on("routeChangeComplete", (e) => setLoading(false));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(false));
      router.events.off("routeChangeComplete", (e) => setLoading(true));
    };
  }, [router.events]);

  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
    {loading ? <Loading /> : <Component {...pageProps} />}
      
    </MoralisProvider>
  )
}

export default MyApp
