import './experience.scss'

function Experience() {
  return (
    <section id="experience">
      <div className="wrapper">
        <h2 className="title">Expêriencia</h2>
        <div className="container">
          <div className="card">
            <div className="head">
              <h3 className="card-title">
                Estágiario em Análise de dados
              </h3>
              <span className="card-time">Outubro 2022 - Dezembro 2022 (2 mêses)</span>
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