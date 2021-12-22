import '../styles/globals.css'
import '../styles/future.css'
// import '../styles/art.css'
import { MoralisProvider } from 'react-moralis';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from '../components/Loading'


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(true));
    router.events.on("routeChangeComplete", (e) => setLoading(false));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(true));
      router.events.off("routeChangeComplete", (e) => setLoading(false));
    };
  }, [router.events]);

  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
    {true ? <Loading /> : <Component {...pageProps} />}
      
    </MoralisProvider>
  )
}

export default MyApp
