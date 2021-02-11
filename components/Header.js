import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div class='container'>
                <h1 class="m-0 text-6xl text-left">
                    <span class="text-white">sleepy</span>LIGHT
                </h1>
            </div>
        </header>
    )
}

export default Header
