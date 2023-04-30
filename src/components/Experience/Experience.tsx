import ExperienceCard from "./ExperienceCard";
import "./experience.scss";

function Experience() {
  return (
    <section id="experience">
      <div className="wrapper">
        <h2 className="title">Expêriencias</h2>
        <div className="container">
          <ExperienceCard
            title="Desenvolvedor Front End"
            time={`Abril 2023 - Atualmente ${new Date().getMonth()} meses`}
            company="Agência Delucca"
            description="Desenvolvimento e atualizações de páginas para e-commerces e criação de post utilizando Wordpress"
          />

          <ExperienceCard
            title="Desenvolvedor Front-End Freelancer"
            time="Fevereiro 2023 - Abril 2023"
            company="Freelancer"
            description="Faço o desenvolvimento de páginas web utilizando HTML5, SASS,
            JavaScript e React. Também realizo o desenvolvimento do design
            das páginas através do software Figma."
          />

          <ExperienceCard
            title="Estágiario em Análise de dados"
            time="Outubro 2022 - Abril 2022"
            company="Bitflowin"
            description="Estágio em análise de dados na empresa Bitflowin. Fui
            responsável pela criação de tabelas SQL para analise de
            estatísticas de empresas para melhorar estratégias de marketing
            e divulgação utilizando a tecnologia Google Big Query."
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
