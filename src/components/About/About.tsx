import ilustracao from './assets/ilustracao.svg'
import './about.scss'

function About() {
  return (
    <section id='about'>
      <div className="wrapper">
        <h2 className='title'>Sobre</h2>
        <div className="container">
          <img className='ilustration' src={ilustracao} alt="Ilustração de um desenvolvedor" />
          <div className='description'>
            <p>
              Com 2 anos de experiência em desenvolvimento de projetos web e graduado em Análise e Desenvolvimento de Sistemas, possuo amplo conhecimento nas tecnologias Front End para criar soluções de qualidade, dinâmicas e responsivas.
            </p>
            <p>
              Também sou apaixonado por fazer atividade física, algo que me ajuda muito a manter o foco e a disciplina nas tarefas do dia a dia.
            </p>
            <p>
              Atualmente trabalho como desenvolvedor freelancer, contudo tenho como objetivo trabalhar em como desenvolvedor fixo em um ambiente de trabalho dinâmico e desafiador.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About