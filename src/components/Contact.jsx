import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/sgandresouza',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/17uVeykrPG/?mibextid=wwXIfr',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.2 3.5h-2.1a3.7 3.7 0 0 0-3.7 3.7v2.6H7v3h2.4v7.7h3v-7.7h2.5l.4-3h-2.9V7.6c0-.6.5-1.1 1.1-1.1h1.8z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/16892638382',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
        <path d="M8.5 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5.2.5.6 1.6.7 1.8.1.2.1.4 0 .6-.1.2-.2.3-.4.5-.2.2-.4.4-.2.7.2.4 1 1.6 2.1 2.2.9.5 1.2.4 1.4.4.2 0 .5-.3.7-.5.2-.2.4-.3.6-.2l1.6.8c.2.1.4.2.4.4.1.6-.2 1.2-.7 1.5-.5.4-1.1.6-1.8.5-1.6-.2-3.4-1-4.7-2.3-1.3-1.3-2.1-2.9-2.3-3.6-.2-.7-.1-1.4.3-1.9z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:sg.andresouza@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
]

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
        <a href="mailto:sg.andresouza@gmail.com" className="contact__email">
          sg.andresouza@gmail.com
        </a>
        <p className="contact__note">
          Agências, produtoras e marcas — disponível para projetos
          audiovisuais no Brasil e nos Estados Unidos.
        </p>

        <ul className="contact__socials">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="contact__social-link"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
