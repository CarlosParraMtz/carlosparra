import '../styles/Global.css'
import '../styles/Pages.css'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from "framer-motion"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css' />
      </Head>
      <AnimatePresence exitBeforeEnter >
        <motion.div
          key={router.route}
          
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
