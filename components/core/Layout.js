import Nav from "./Nav"
import Header from "./Header"
import Isi from "./Isi"
import Carousel from "./Carousel"
import Footer from "./Footer"
import styles from '../../styles/components/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <div className="flex flex-col">
                <Header />
                <Nav />
                <main className="flex flex-col text-xl w-full">
                    {children}
                </main>
                <Isi />
                <Footer />
            </div>
        </>
    )
}

export default Layout