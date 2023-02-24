import imagemMateus from '../../assets/fotoMateusLopes.svg'
import iconLinkedin from '../../assets/iconLinkedin.svg'
import iconGithub from '../../assets/iconGithub.svg'
import iconDownload from '../../assets/iconDownload.svg'
import './header.scss'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <img className='my-picture' src={imagemMateus} alt="Imagem do Mateus Lopes" />
        <div className="right">
          <p className='right-message'>Olá seja bem vindo, sou</p>
          <h1 className='right-name'>Mateus Antonio Rodrigues Lopes</h1>
          <p className='right-career'>Desenvolvedor Front End</p>
          <div className="social-links">
            <button className='social-links-linkedin btn'>
              <img src={iconLinkedin} alt="Icone do LinkedIn" />
              LinkedIn
            </button>
            <button className='social-links-github btn'>
              <img src={iconGithub} alt="Icone do Github" />
              Github
            </button>
            <button className='social-links-download btn'>
              Baixar currículo
              <img src={iconDownload} alt="Icone de download" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }