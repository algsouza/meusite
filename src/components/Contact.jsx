import { useReveal } from '../hooks/useReveal'
import './Contact.css'

function Contact() {
  const ref = useReveal()

  return (
    <section id="contato" className="contact" ref={ref}>
      <div className="container contact__inner reveal">
        <span className="eyebrow">Contato</span>
        <h2>
          Vamos transformar sua próxima
          <br />
          ideia em imagem.
        </h2>
        <a href="mailto:contato@andrepizza.com" className="contact__email">
          contato@andrepizza.com
        </a>
        <p className="contact__note">
          Agências, produtoras e marcas — disponível para projetos
          audiovisuais no Brasil e nos Estados Unidos.
        </p>
      </div>
    </section>
  )
}

export default Contact
