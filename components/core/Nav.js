import Link from 'next/link'
import navStyles from '../../styles/components/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className='container flex flex-row'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/wiki'>Wiki</Link>
        </li>
        <li>
          <Link href='/'>Nav 3</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav