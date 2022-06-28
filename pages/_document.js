// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
    
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        {/* <link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet"/> */}
        <link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Oswald:wght@200;400&family=Press+Start+2P&display=swap" rel="stylesheet"></link>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
   
    )
  }
}

export default MyDocument