import ilustracao from "./assets/ilustracao.svg";
import "./about.scss";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h2 className="title">Sobre</h2>
        <div className="container">
          <img
            className="ilustration"
            src={ilustracao}
            alt="Ilustração de um desenvolvedor"
            width={530}
            height={570}
          />
          <div className="description">
            <p>
              Sou Desenvolvedor Front-End com mais de 3 anos de experiência e
              formado em Análise e Desenvolvimento de Sistemas. Me especializei
              na criação de interfaces modernas e funcionais, com foco em
              performance, SEO e acessibilidade.
            </p>
            <p>
              Atualmente atuo na Agência Delucca, desenvolvendo e-commerces com Vue.js e Nuxt.js. Já participei de mais de 7 projetos completos, criando componentes personalizados e otimizando a experiência do usuário. Também desenvolvi uma ferramenta interna em Electron que reduziu em até 35% o tempo de produção de landing pages.
            </p>
            <p>
              Gosto de colaborar com a equipe por meio de code reviews, documentação técnica e suporte a outros desenvolvedores. Fora do trabalho, sou entusiasta de atividades físicas, o que me ajuda a manter disciplina e foco no dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;