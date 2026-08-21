import { cases } from '../data/cases'
import { useReveal } from '../hooks/useReveal'
import CaseCard from './CaseCard'
import './Cases.css'

function Cases() {
  const ref = useReveal()

  return (
    <section id="cases" className="cases" ref={ref}>
      <div className="container">
        <div className="cases__heading reveal">
          <span className="eyebrow">Cases</span>
          <h2>Trabalhos selecionados</h2>
          <p>
            Uma seleção de projetos ao longo de mais de 20 anos de carreira —
            da televisão aberta a campanhas publicitárias e produções
            internacionais.
          </p>
        </div>

        <div className="cases__grid">
          {cases.map((item, index) => (
            <div
              className="reveal"
              key={item.id}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <CaseCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
