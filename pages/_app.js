import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/next'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout className="bg-bg">
      <AnimatePresence exitBeforeEnter initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Analytics />
    </Layout>
  ) 
}

export default MyApp
