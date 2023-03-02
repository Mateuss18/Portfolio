import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProjectCard from './ProjectCard/ProjectCard'
import './projects.scss'

const Projects = () => {
  const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1250: { items: 3, itemsFit: 'contain' },
  };

  const items = [
    <ProjectCard name='Projeto 1' imageLink='https://raw.githubusercontent.com/Mateuss18/Electrum/main/assets/readme-image.png' githubLink='https://github.com/Mateuss18/Electrum' deployLink='https://mateuss18.github.io/Electrum/' />,
    <ProjectCard name='Projeto 2' imageLink='https://raw.githubusercontent.com/Mateuss18/Agency/main/src/assets/readme-image.png' githubLink='#' deployLink='#' />,
    <ProjectCard name='Projeto 3' imageLink='https://raw.githubusercontent.com/Mateuss18/Electrum/main/assets/readme-image.png' githubLink='#' deployLink='#' />,
    <ProjectCard name='Projeto 4' imageLink='https://raw.githubusercontent.com/Mateuss18/Electrum/main/assets/readme-image.png' githubLink='#' deployLink='#' />,
    <ProjectCard name='Projeto 5' imageLink='https://raw.githubusercontent.com/Mateuss18/Electrum/main/assets/readme-image.png' githubLink='#' deployLink='#' />,
    <ProjectCard name='Projeto 6' imageLink='https://raw.githubusercontent.com/Mateuss18/Electrum/main/assets/readme-image.png' githubLink='#' deployLink='#' />,
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