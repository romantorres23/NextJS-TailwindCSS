import footerStyles from '../../styles/components/Footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className='container'>
                <p className='my-2'>Copyright &copy; 2021 SleepyLITE</p>
            </div>
        </footer>
    )
}

export default Footer
