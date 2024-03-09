import iconHTML5 from './assets/iconHtml5.svg';
import iconCSS3 from './assets/iconCss3.svg';
import iconSASS from './assets/iconSass.svg';
import iconGit from './assets/iconGit.svg';
import iconJavascript from './assets/iconJavascript.svg'
import iconFigma from './assets/iconFigma.svg';
import iconReact from './assets/iconReact.svg';
import iconVue from './assets/iconVue.svg';
import iconNuxt from './assets/iconNuxt.svg';
import iconTypescript from './assets/iconTypescript.svg';
import iconMysql from './assets/iconMysql.svg';
import SkillCard from "./SkillCard"
import './skills.scss'

function Skills() {
  return (
    <section id="skills">
      <div className="wrapper">
        <h2 className="title">Habilidades</h2>
        <div className="container-skills">
          <SkillCard name='HTML5' image={iconHTML5} />
          <SkillCard name='CSS3' image={iconCSS3} />
          <SkillCard name='JavaScript' image={iconJavascript} />
          <SkillCard name='SASS' image={iconSASS} />
          <SkillCard name='Git/GitHub' image={iconGit} />
          <SkillCard name='Vue' image={iconVue} />
          <SkillCard name='Nuxt' image={iconNuxt} />
          <SkillCard name='React' image={iconReact} />
          <SkillCard name='TypeScript' image={iconTypescript} />
          <SkillCard name='MySQL' image={iconMysql} />
          <SkillCard name='Figma' image={iconFigma} />
        </div>
      </div>
    </section>
  )
}

export default Skills