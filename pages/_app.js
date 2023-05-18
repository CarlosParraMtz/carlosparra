import '../styles/Global.css'
import '../styles/Pages.css'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from "framer-motion"
import NavMenu from '../components/elements/NavMenu';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css' />
      </Head>
      <AnimatePresence mode="wait" >
        <motion.div
          key={router.route}

        >
          <main>
            <Component {...pageProps} />
          </main>
        </motion.div>
      </AnimatePresence>
      <NavMenu />
    </>
  )
}

export default MyApp
