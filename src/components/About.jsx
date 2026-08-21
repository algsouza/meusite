import { useReveal } from '../hooks/useReveal'
import './About.css'

function About() {
  const ref = useReveal()

  return (
    <section id="sobre" className="about" ref={ref}>
      <div className="container about__grid">
        <div className="about__heading reveal">
          <span className="eyebrow">Sobre</span>
          <h2>Mais de 20 anos transformando ideias em imagem.</h2>
        </div>

        <div className="about__body reveal">
          <p>
            André Pizza é editor de vídeo e filmmaker com uma trajetória
            construída dentro da televisão brasileira e de projetos
            audiovisuais que vão do jornalismo à publicidade, das lives aos
            documentários.
          </p>
          <p>
            Foram 13 anos na <strong>RedeTV!</strong>, principalmente como
            editor de promo, dando forma à linguagem visual de chamadas,
            aberturas e campanhas. A experiência passa também por{' '}
            <strong>Band</strong>, <strong>SBT</strong>, <strong>FAAP</strong>{' '}
            e <strong>Lab3</strong>, além de projetos institucionais,
            culturais e internacionais — incluindo uma iniciativa com
            aprovação na Lei Rouanet, reforçando uma atuação que também
            dialoga com projetos de dimensão cultural.
          </p>
          <p>
            Atualmente, André segue atuando nos Estados Unidos com
            audiovisual e mídia, participando de transmissões ao vivo,
            operação de telão, câmera e produção de conteúdo para redes
            sociais.
          </p>

          <ul className="about__stats">
            <li>
              <strong>20+</strong>
              <span>anos de audiovisual</span>
            </li>
            <li>
              <strong>13</strong>
              <span>anos na RedeTV!</span>
            </li>
            <li>
              <strong>EUA</strong>
              <span>atuação atual</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
