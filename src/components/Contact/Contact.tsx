import linkedinIcon from './assets/linkedin-btn.svg';
import whatsappIcon from './assets/whatsapp-btn.svg';
import './contact.scss';

function Contact() {
  return (
    <section id="contact">
      <div className="wrapper">
        <h2 className='title'>Contato</h2>
        <div className="email">mateus20.lopes02@gmail.com</div>
        <div className="social-contact">
          <a href='https://wa.me/5519996489694' target={'_blank'} className="whatsapp btn">
            <img src={whatsappIcon} alt="Icone Whatsapp" />
          </a>
          <a href='https://www.linkedin.com/in/mateus--lopes/' target={'_blank'} className="linkedin btn">
            <img src={linkedinIcon} alt="Icone LinkedIn" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact