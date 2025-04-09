import imagemMateus from './assets/fotoMateusLopes.png'
import iconLinkedin from './assets/iconLinkedin.svg'
import iconGithub from './assets/iconGithub.svg'
import iconDownload from './assets/iconDownload.svg'
import curriculo from './assets/Mateus Lopes - Dev Front End.pdf'
import './header.scss'

const Header = () => {
  return (
    <header id='header'>
      <div className="wrapper">
        <img className='my-picture' src={imagemMateus} alt="Imagem do Mateus Lopes" loading="eager" width={482} height={482} />
        <div className="apresentation">
          <p className='apresentation-message'>Olá seja bem vindo, sou</p>
          <h1 className='apresentation-name'>
            Mateus Lopes
            <span className='apresentation-career'>Desenvolvedor Front End</span>
          </h1>
          <div className="social-links">
            <a className='social-links-linkedin btn' target={'_blank'} href='https://www.linkedin.com/in/mateus--lopes/'>
              <img src={iconLinkedin} alt="Icone do LinkedIn" />
              LinkedIn
            </a>
            <a className='social-links-github btn' target={'_blank'} href='https://github.com/Mateuss18'>
              <img src={iconGithub} alt="Icone do Github" width={30} height={30} />
              Github
            </a>
            <a className='social-links-download btn' href={curriculo} download target={'_blank'}>
              Baixar currículo
              <img src={iconDownload} alt="Icone de download" width={16} height={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header