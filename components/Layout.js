import Nav from "./Nav"
import Header from "./Header"
import Isi from "./Isi"
import Footer from "./Footer"
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <div class="flex flex-col">
                <Header />
                <Nav />
                <main class="flex flex-col text-xl w-full">
                    {children}
                </main>
                <Isi />
                <Footer />
            </div>
        </>
    )
}

export default Layout
