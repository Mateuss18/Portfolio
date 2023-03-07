import logo from '../Navbar/assets/logoMateusLopes.svg'
import './footer.scss'

function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <p className='left'>Copyright &copy; {new Date().getFullYear()} <span>Mateus Lopes</span>. Todos os direitos reservados.</p>
        <p className='right'>Design and Development by <img className='logo' src={logo} alt="Logomarca" /></p> 
      </div>
    </footer>
  )
}

export default Footer