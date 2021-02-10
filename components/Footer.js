import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <p>Copyright &copy; 2021 SleepyLIGHT</p>
            </div>
        </footer>
    )
}

export default Footer
