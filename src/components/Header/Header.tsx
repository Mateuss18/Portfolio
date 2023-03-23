import imagemMateus from './assets/fotoMateusLopes.svg'
import iconLinkedin from './assets/iconLinkedin.svg'
import iconGithub from './assets/iconGithub.svg'
import iconDownload from './assets/iconDownload.svg'
import curriculo from './assets/Mateus Lopes - Dev Front End.pdf'
import './header.scss'

const Header = () => {
  return (
    <header id='header'>
      <div className="wrapper">
        <img className='my-picture' src={imagemMateus} alt="Imagem do Mateus Lopes" />
        <div className="apresentation">
          <p className='apresentation-message'>Olá seja bem vindo, sou</p>
          <h1 className='apresentation-name'>
            Mateus Antonio Rodrigues Lopes
            <span className='apresentation-career'>Desenvolvedor Front End</span>
          </h1>
          <div className="social-links">
            <a className='social-links-linkedin btn' target={'_blank'} href='https://www.linkedin.com/in/mateus--lopes/'>
              <img src={iconLinkedin} alt="Icone do LinkedIn" />
              LinkedIn
            </a>
            <a className='social-links-github btn' target={'_blank'} href='https://github.com/Mateuss18'>
              <img src={iconGithub} alt="Icone do Github" />
              Github
            </a>
            <a className='social-links-download btn' href={curriculo} download target={'_blank'}>
              Baixar currículo
              <img src={iconDownload} alt="Icone de download" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header