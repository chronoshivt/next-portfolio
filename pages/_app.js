import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="bg-bg">

      <Component {...pageProps} />
    
    </Layout>
  ) 
}

export default MyApp
