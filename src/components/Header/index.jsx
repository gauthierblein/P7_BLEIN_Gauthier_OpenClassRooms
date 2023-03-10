import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/img/LOGO.svg'

function Header() {
  return (
    <header >

      <Link className="header__link" to="/">
        <img alt="logo" src={logo} className="header__logo"></img>
      </Link>
      <nav>
        <Link className="header__link" to="/">Accueil</Link>
        <Link className="header__link" to="/about">A Propos</Link>
      </nav>

    </header>
  )
}

export default Header
