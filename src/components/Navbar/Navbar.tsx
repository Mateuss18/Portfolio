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

  return (
    <nav className={active ? 'navbar activeMenu' : 'navbar'}>
      <div className='wrapper'>
        <a href="#" className='logo'>
          <img src={logo} alt="Logomarca Mateus Lopes" />
        </a>
        <ul className='menu'>
          <li><a href="#header" onClick={ToggleMode}>Inicio</a></li>
          <li><a href="#about" onClick={ToggleMode}>Sobre</a></li>
          <li><a href="#experience" onClick={ToggleMode}>Experiências</a></li>
          <li><a href="#projects" onClick={ToggleMode}>Projetos</a></li>
          <li><a href="#skills" onClick={ToggleMode}>Habilidades</a></li>
          <li><a href="#contact" onClick={ToggleMode}>Contato</a></li>
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