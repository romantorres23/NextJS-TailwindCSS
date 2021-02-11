import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div class='container'>
                <h1 className={headerStyles.title}>
                    <span>sleepy</span>LIGHT
                </h1>
            </div>
        </header>
    )
}

export default Header
