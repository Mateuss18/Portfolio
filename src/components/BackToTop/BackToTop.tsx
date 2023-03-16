import { useEffect, useState } from 'react';
import backToTopImg from './assets/backToTop.svg';
import './backToTop.scss'

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const backToTopEl = document.getElementById("backToTopBtn")
      if (window.scrollY > 400) {
        backToTopEl?.classList.add('show')
        setBackToTopButton(true)
      } else {
        backToTopEl?.classList.remove('show') 
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      { backToTopButton && (
        <a href="#header" className='backToTopBtn' id='backToTopBtn' onClick={scrollUp}>
          <img src={backToTopImg} alt="Botão de voltar para cima" />
        </a>
      )}
    </>
  )
}

export default BackToTop