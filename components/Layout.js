import Nav from "./Nav"
import Header from "./Header"
import Isi from "./Isi"
import Footer from "./Footer"

import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <Nav />
                <main className={styles.main}>
                    {children}
                </main>
                <Isi />
                <Footer />
            </div>
        </>
    )
}

export default Layout
