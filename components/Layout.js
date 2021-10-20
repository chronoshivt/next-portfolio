import Nav from './Nav'
import Footer from './Footer'
import Japan from './Japan'

const Layout = ({children}) => {

        return (
            <div className="flex flex-col items-center justify-center min-h-screen py-2 pt-12 bg-gray-800">
                <main className="flex flex-col items-center justify-center w-full p-4 pt-12 flex-1 text-center sm:w-4/5 md:w-3/5 lg:w-2/5 xl:2/5">
                    
                    <Nav />

                    <Japan />

                    {children}


                    <Footer />
                </main>
            </div>
        )
    
}

export default Layout