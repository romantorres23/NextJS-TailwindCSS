import Nav from "./Nav"
import Header from "./Header"
import Isi from "./Isi"
import Carousel from "./Carousel"
import Footer from "./Footer"
//import styles from '../../styles/components/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <div className="layout-container">
                <Header />
                <Nav />
                <main className="layout-main-content">
                    {children}
                </main>
                <Isi />
                <Footer />
            </div>
        </>
    )
}

export default Layout