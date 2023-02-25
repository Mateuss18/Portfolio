import imagemMateus from '../../assets/fotoMateusLopes.svg'
import iconLinkedin from '../../assets/iconLinkedin.svg'
import iconGithub from '../../assets/iconGithub.svg'
import iconDownload from '../../assets/iconDownload.svg'
import curriculo from '../../assets/CV-Mateus_Lopes.pdf'
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

export { Header }