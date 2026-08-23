import { cases } from '../data/cases'
import { useReveal } from '../hooks/useReveal'
import CaseCard from './CaseCard'
import './Cases.css'

function Cases() {
  const ref = useReveal()
  const featuredCases = cases.filter((item) => item.featured)

  return (
    <section id="cases" className="cases" ref={ref}>
      <div className="container">
        <div className="cases__heading reveal">
          <span className="eyebrow">Cases</span>
          <h2>Trabalhos selecionados</h2>
          <p>
            Uma seleção de projetos em televisão, publicidade, institucional
            e videoclipes.
          </p>
        </div>

        <div className="cases__grid">
          {featuredCases.map((item, index) => (
            <div
              className="reveal"
              key={item.id}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <CaseCard item={item} />
            </div>
          ))}
        </div>

        <div className="cases__cta reveal">
          <a href="#" className="btn btn--ghost">
            Explorar Portfólio Completo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cases
