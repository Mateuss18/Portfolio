import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProjectCard from './ProjectCard/ProjectCard';
import emDesenvolvimento from './assets/em-desenvolvimento.webp';
import project1 from './assets/project-electrum.webp';
import project2 from './assets/project-agency.webp';
import project3 from './assets/project-odontocare.webp';
import project4 from './assets/project-21dias.webp';
import './projects.scss';

const Projects = () => {
  const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1250: { items: 3, itemsFit: 'contain' },
  };

  const items = [
    <ProjectCard name='P.A. Informática' imageLink='https://raw.githubusercontent.com/Mateuss18/PA-Informatica/main/assets/readme-image.png' githubLink='https://github.com/Mateuss18/PA-Informatica' deployLink='https://pa-informatica.vercel.app' />,
    <ProjectCard name='Electrum' imageLink={project1} githubLink='https://github.com/Mateuss18/Electrum' deployLink='https://electrum-chi.vercel.app/' />,
    <ProjectCard name='Agency' imageLink={project2} githubLink='https://github.com/Mateuss18/Agency' deployLink='https://agency-2.netlify.app' />,
    <ProjectCard name='OdontoCare' imageLink={project3} githubLink='https://github.com/Mateuss18/NLW-Return_OdontoCare' deployLink='https://nlw-return-odonto-care.vercel.app/' />,
    <ProjectCard name='Desafio 21 dias de codigo' imageLink={project4} githubLink='https://github.com/Mateuss18/21-dias-de-codigo-Rocketseat' deployLink='https://mateuss18.github.io/21-dias-de-codigo-Rocketseat/21-Portfolio/index.html' />,
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