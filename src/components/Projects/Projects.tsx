import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProjectCard from './ProjectCard/ProjectCard';
import emDesenvolvimento from './assets/em-desenvolvimento.png';
import './projects.scss';

const Projects = () => {
  const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1250: { items: 3, itemsFit: 'contain' },
  };

  const items = [
    <ProjectCard name='Electrum' imageLink='https://user-images.githubusercontent.com/71786964/223004344-fe483897-fe60-46d8-adcc-aad3d0a4a3bf.jpg' githubLink='https://github.com/Mateuss18/Electrum' deployLink='https://mateuss18.github.io/Electrum/' />,
    <ProjectCard name='Agency' imageLink='https://user-images.githubusercontent.com/71786964/223005361-5da139b7-3ab0-4520-a6c5-d46acf7c42d6.jpg' githubLink='https://github.com/Mateuss18/Agency' deployLink='https://agency-2.netlify.app' />,
    <ProjectCard name='OdontoCare' imageLink='https://user-images.githubusercontent.com/71786964/223006950-2e22c8b9-4bfa-4838-b2d6-aec513066cfd.jpg' githubLink='https://github.com/Mateuss18/NLW-Return_OdontoCare' deployLink='https://mateuss18.github.io/NLW-Return_OdontoCare/' />,
    <ProjectCard name='Desafio 21 dias de codigo' imageLink='https://user-images.githubusercontent.com/71786964/223006457-1d9e6bb7-896e-405b-b83f-7e911f833f3f.jpg' githubLink='https://github.com/Mateuss18/21-dias-de-codigo-Rocketseat' deployLink='https://mateuss18.github.io/21-dias-de-codigo-Rocketseat/21-Portfolio/index.html' />,
    <ProjectCard name='P.A. Informática' imageLink={emDesenvolvimento} githubLink='#' deployLink='#' />,
  ];

  return (
    <section id='projects'>
      <div className="wrapper">
        <h2 className='title'>Projetos</h2>
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayInterval={2000}
          animationDuration={950}
          infinite={true}
          autoPlayStrategy={'default'}
          disableButtonsControls={true}
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          keyboardNavigation={true}
        />
      </div>
    </section>
  )
}

export default Projects