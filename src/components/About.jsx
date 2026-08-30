import { useReveal } from '../hooks/useReveal'
import andrePhoto from '../assets/andre-photo.png'
import './About.css'

function About() {
  const ref = useReveal()

  return (
    <section id="sobre" className="about" ref={ref}>
      <div className="container about__grid">
        <div className="about__heading reveal">
          <div className="about__photo-frame" aria-hidden="true">
            <div className="about__photo-glow" />
            <div className="about__photo">
              <img src={andrePhoto} alt="" className="about__photo-img" />
            </div>
          </div>
          <div className="about__heading-text">
            <span className="eyebrow">Sobre</span>
            <h2>Mais de 20 anos transformando ideias em imagem</h2>
          </div>
        </div>

        <div className="about__body reveal">
          <p>
            André Souza é editor de vídeo, filmmaker e produtor audiovisual,
            com uma trajetória construída ao longo de mais de 20 anos entre
            televisão, publicidade, projetos institucionais e produções
            especiais.
          </p>
          <p>
            Sua experiência inclui passagens por grandes emissoras
            brasileiras, como <strong>RedeTV!</strong>, <strong>Band</strong>{' '}
            e <strong>SBT</strong>, atuando em diferentes etapas da produção
            audiovisual, da edição à construção da narrativa e finalização.
          </p>
          <p>
            Um capítulo importante dessa trajetória também está ligado à{' '}
            <strong>FAAP</strong> — Fundação Armando Alvares Penteado,
            instituição reconhecida por sua formação nas áreas de Cinema,
            Rádio e TV. Ao trabalhar em projetos acadêmicos junto aos alunos,
            Andre também teve a oportunidade de contribuir para a formação e
            o desenvolvimento de novas produções audiovisuais.
          </p>
          <p>
            Ao longo da carreira, participou ainda de projetos de diferentes
            formatos e alcances, incluindo publicidade, televisão,
            entretenimento, dublagem e pós-produção de conteúdos destinados à
            distribuição internacional.
          </p>
          <p>
            Entre essas experiências estão trabalhos realizados em Israel,
            além de projetos que ampliaram sua atuação para diferentes
            linguagens e contextos dentro do audiovisual.
          </p>
          <p>
            Mais do que reunir trabalhos, seu portfólio revela uma trajetória
            marcada pela capacidade de transformar ideias em imagens, unindo
            experiência técnica, olhar criativo e compreensão da narrativa.
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
              <strong>Israel</strong>
              <span>projeto internacional</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
