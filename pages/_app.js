import '../styles/globals.css'
import '../styles/future.css'
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
// import '../styles/art.css'
import { MoralisProvider } from 'react-moralis';
// import Loading from '../components/Loading'
// import * as ga from '../utils/ga'
import Script from 'next/script'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);


  // }
  const path = router.pathname


  return (
   <>
     {/* Global Site Tag (gtag.js) - Google Analytics */}
     <Script
        id="gtag-manager"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
       id="gtag-after"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />


    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
     {path != "/vaporplanes" && path != "/" && <Header/> }
      <Component {...pageProps} />
    </MoralisProvider>
   </>
  )
}

export default MyApp
