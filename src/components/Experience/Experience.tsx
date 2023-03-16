import './experience.scss'

function Experience() {
  return (
    <section id="experience">
      <div className="wrapper">
        <h2 className="title">Expêriencias</h2>
        <div className="container">
          <div className="card">
            <div className="head">
              <h3 className="card-title">
                Desenvolvedor Front-End Freelancer
              </h3>
              <span className="card-time">Fevereiro 2022 - atualmente ({new Date().getMonth()} meses)</span>
            </div>
            <div className="info">
              <div className="company">
                Freelancer
              </div>
              <p className="description">
                Faço o desenvolvimento de páginas web utilizando HTML5, SASS, JavaScript e React. Também realizo o desenvolvimento do design das páginas através do software Figma.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="head">
              <h3 className="card-title">
                Estágiario em Análise de dados
              </h3>
              <span className="card-time">Outubro 2022 - Dezembro 2022 (2 meses)</span>
            </div>
            <div className="info">
              <div className="company">
                Bitflowin
              </div>
              <p className="description">
                Estágio em análise de dados na empresa Bitflowin. 
                Fui responsável pela criação de tabelas SQL para analise de estatísticas de empresas para melhorar estratégias de marketing e divulgação utilizando a tecnologia Google Big Query. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience