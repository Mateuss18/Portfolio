import logo from './assets/logoMateusLopes.svg'
import menuOpen from './assets/menu-hamburger.svg'
import menuClose from './assets/menu-close.svg'
import './navbar.scss'
import { useState } from 'react'

function Navbar () {
  const [active, setMode] = useState(false)
  const ToggleMode = () => {
    setMode(!active)
  }

  const ToggleLinks = () => {
    window.innerWidth < 840 ? ToggleMode() : ''
  }

  return (
    <nav className={active ? 'navbar activeMenu' : 'navbar'}>
      <div className='wrapper'>
        <a href="#" className='logo'>
          <img src={logo} alt="Logomarca Mateus Lopes" width={228} height={40} />
        </a>
        <ul className='menu'>
          <li><a href="#header" onClick={ToggleLinks}>Inicio</a></li>
          <li><a href="#about" onClick={ToggleLinks}>Sobre</a></li>
          <li><a href="#experience" onClick={ToggleLinks}>Experiências</a></li>
          <li><a href="#projects" onClick={ToggleLinks}>Projetos</a></li>
          <li><a href="#skills" onClick={ToggleLinks}>Habilidades</a></li>
          <li><a href="#contact" onClick={ToggleLinks}>Contato</a></li>
        </ul>
        <button className={active ? 'btn-open' : 'btn-open active'} onClick={ToggleMode}>
          <img src={menuOpen} alt="Abrir menu" />
        </button>
        <button className={active ? 'btn-close active' : 'btn-close'} onClick={ToggleMode}>
          <img src={menuClose} alt="Fechar menu" />
        </button>
      </div>
    </nav>
  )
} 

export default Navbar