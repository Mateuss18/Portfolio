import logo from './assets/logoMateusLopes.svg'
import './navbar.scss'

function Navbar () {

  return (
    <nav className='navbar'>
      <div className="wrapper">
        <a href="#">
          <img className='logo' src={logo} alt="Logomarca Mateus Lopes" />
        </a>
        <ul className='menu'>
          <li><a href="#header">Inicio</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#experience">Experiências</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
} 

export default Navbar