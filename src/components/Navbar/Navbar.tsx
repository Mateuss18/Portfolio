import logo from './assets/logoMateusLopes.svg'
import './navbar.scss'

const Navbar = () => {

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <img className='logo' src={logo} alt="Logomarca Mateus Lopes" />
        <ul className='navbar-container-links'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Experiência</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Habilidades</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
} 

export { Navbar }