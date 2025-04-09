import iconGithub from './assets/iconGithubWhite.svg'
import iconDeploy from './assets/iconDeploy.svg'
import './projectCard.scss'

const ProjectCard = ({name, imageLink, githubLink, deployLink}: any) => {
  return (
    <div className='card-project'>
      <h3 className='card-project-title'>{name}</h3>
      <img className="card-project-image" src={imageLink} alt={name} width={339} height={191} />
      <div className="card-project-links">
        <a href={githubLink} target='_blank' className="link">
          <img src={iconGithub} alt="Github link" height={26} width={26} />
          <span>Repositório</span>
        </a>
        <a href={deployLink} target='_blank' className="link">
          <img src={iconDeploy} alt="Link de deploy" height={26} width={26} />
          <span>Ver projeto</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard