import '../styles/globals.css'
import '../styles/index.menu.css'
import '../styles/work.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
