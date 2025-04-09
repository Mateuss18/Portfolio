import ExperienceCard from "./ExperienceCard";
import "./experience.scss";

function Experience() {
  return (
    <section id="experience">
      <div className="wrapper">
        <h2 className="title">Expêriencias</h2>
        <div className="container">
        <ExperienceCard
            title="Desenvolvedor Front End Pleno"
            time={`Janeiro 2025 - Atualmente`}
            company="Agência Delucca"
            description="Atuo como Desenvolvedor Front End Pleno com foco em projetos escaláveis e de alta performance, especialmente no desenvolvimento de e-commerces com Vue.js e Nuxt. Participei da implementação de mais de 7 projetos completos, desde a concepção até a entrega, sempre buscando soluções inovadoras e otimizadas. Tenho experiência sólida em criação de componentes personalizados, melhorias de performance, SEO e acessibilidade, além de desenvolvimento de ferramentas internas, como uma aplicação em Electron que reduziu o tempo de produção de landing pages em até 35%."
          />

          <ExperienceCard
            title="Desenvolvedor Front End Junior"
            time="Abril 2023 - Dezembro 2024 (20 meses)"
            company="Agência Delucca"
            description="Atuei como Desenvolvedor Front End lidando com projetos para clientes de renome, como Growth Supplements. Desenvolvo e mantenho landing pages com HTML, CSS e JavaScript, utilizando CMS como Wap.store e Wordpress. Tenho experiência sólida com GitHub e GitLab para versionamento. Realizei o desenvolvimento baseado em protótipos no Adobe XD e Figma, gerencio tasks no Runrun.it e Monday e colaborei ativamente com colegas desenvolvedores. Destaco meu papel no desenvolvimento de E-commerces de destaque, como Agriestufa Shop, Eletronovo e Natural Fitness."
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
