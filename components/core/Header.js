import headerStyles from '../../styles/components/Header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className='container'>
                <h1 className="m-0 text-6xl text-left">
                    <span className="text-white">sleepy</span>LITE
                </h1>
            </div>
        </header>
    )
}

export default Header
