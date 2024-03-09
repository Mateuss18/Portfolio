import ExperienceCard from "./ExperienceCard";
import "./experience.scss";

function Experience() {
  return (
    <section id="experience">
      <div className="wrapper">
        <h2 className="title">Expêriencias</h2>
        <div className="container">
          <ExperienceCard
            title="Desenvolvedor Front End Junior"
            time={`Abril 2023 - Atualmente`}
            company="Agência Delucca"
            description="Atuo como Desenvolvedor Front End lidando com projetos para clientes de renome, como Growth Supplements. Desenvolvo e mantenho landing pages com HTML, CSS e JavaScript, utilizando CMS como Wap.store e Wordpress. Tenho experiência sólida com GitHub e GitLab para versionamento. Realizo o desenvolvimento baseado em protótipos no Adobe XD e Figma, gerencio tasks no Runrun.it e Monday e colaboro ativamente com colegas desenvolvedores. Destaco meu papel no desenvolvimento de E-commerces de destaque, como Agriestufa Shop, Eletronovo e Natural Fitness."
          />

          <ExperienceCard
            title="Desenvolvedor Front-End Freelancer"
            time="Fevereiro 2023 - Abril 2023 (3 meses)"
            company="Freelancer"
            description="Atuei com o desenvolvimento de páginas web utilizando HTML5, SASS,
            JavaScript e React. E também ralizando o desenvolvimento do design
            das páginas através do software Figma."
          />

          <ExperienceCard
            title="Estágiario em Análise de dados"
            time="Outubro 2022 - Dezembro 2022 (3 meses)"
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
