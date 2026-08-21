import { experience } from '../data/experience'
import { useReveal } from '../hooks/useReveal'
import './Experience.css'

function Experience() {
  const ref = useReveal()

  return (
    <section id="experiencia" className="experience" ref={ref}>
      <div className="container">
        <div className="experience__heading reveal">
          <span className="eyebrow">Experiência</span>
          <h2>Uma trajetória construída na tela.</h2>
        </div>

        <ol className="experience__timeline">
          {experience.map((item) => (
            <li key={item.org} className="reveal">
              <div className="experience__period">{item.period}</div>
              <div className="experience__content">
                <h3>{item.org}</h3>
                <p className="experience__role">{item.role}</p>
                <p className="experience__description">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
