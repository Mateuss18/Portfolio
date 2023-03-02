import iconGithub from './assets/iconGithubWhite.svg'
import iconDeploy from './assets/iconDeploy.svg'
import './projectCard.scss'

const ProjectCard = ({name, imageLink, githubLink, deployLink}: any) => {
  return (
    <div className='card-project'>
      <h3 className='card-project-title'>{name}</h3>
      <img className="card-project-image" src={imageLink} alt="" />
      <div className="card-project-links">
        <a href={githubLink} target='_blank' className="link">
          <img src={iconGithub} alt="" />
          <span>Repositório</span>
        </a>
        <a href={deployLink} target='_blank' className="link">
          <img src={iconDeploy} alt="" />
          <span>Ver projeto</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard