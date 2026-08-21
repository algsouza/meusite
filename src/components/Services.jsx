import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import './Services.css'

function Services() {
  const ref = useReveal()

  return (
    <section id="especialidades" className="services" ref={ref}>
      <div className="container">
        <div className="services__heading reveal">
          <span className="eyebrow">Especialidades</span>
          <h2>Do conceito ao corte final.</h2>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div className="services__item reveal" key={service.title}>
              <span className="services__index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
