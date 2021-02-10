import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.title}>
                <span>sleepy</span>LIGHT
            </h1>
        </header>
    )
}

export default Header
