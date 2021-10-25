import Nav from './Nav'
import Footer from './Footer'
import Japan from './Japan'
import Head from 'next/head'

const Layout = ({children}) => {

        return (
            <div className="flex flex-col font-mono items-center justify-center min-h-screen py-2 pt-12 bg-bg overflow-hidden">
                <main className="flex flex-col items-center justify-center w-full p-4 pt-12 flex-1 text-center sm:w-4/5 md:w-3/5 lg:w-2/5 xl:2/5">
                <Head>
                    <title>Portfolio | RFD</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                    <Nav />

                    <Japan />

                    {children}


                    <Footer />
                </main>
            </div>
        )
    
}

export default Layout