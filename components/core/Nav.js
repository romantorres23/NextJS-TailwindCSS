import Link from 'next/link'
// import navStyles from '../../styles/components/Nav.module.css'

const Nav = () => {
  return (
    <nav className="nav">
      <ul className='container'>
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