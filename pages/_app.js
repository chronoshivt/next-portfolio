import { AnimatePresence } from 'framer-motion'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="bg-bg">


      <AnimatePresence exitBeforeEnter initial={true}>
      <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  ) 
}

export default MyApp
