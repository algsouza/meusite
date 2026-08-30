import { useState } from 'react'
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
    href: 'mailto:contato@andresouzafilms.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
]

const DESTINATIONS = {
  contato: {
    email: 'contato@andresouzafilms.com',
    subjectPrefix: 'Novo contato pelo site',
    messagePlaceholder: 'Conte um pouco sobre o seu projeto...',
  },
  orcamento: {
    email: 'orcamento@andresouzafilms.com',
    subjectPrefix: 'Solicitação de orçamento',
    messagePlaceholder: 'Descreva o escopo, prazo e formato do projeto...',
  },
}

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' }

function Contact() {
  const ref = useReveal()
  const [formType, setFormType] = useState('contato')
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle')

  const destination = DESTINATIONS[formType]

  function handleChange(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return
    if (!e.target.checkValidity()) {
      e.target.reportValidity()
      return
    }

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: formType }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Falha ao enviar mensagem.')
      }

      setStatus('sent')
      setForm(EMPTY_FORM)
    } catch (err) {
      setStatus('error')
    }
  }

  function handleTypeChange(type) {
    setFormType(type)
    setStatus('idle')
  }

  return (
    <section id="contato" className="contact" ref={ref}>
      <div className="container contact__inner reveal">
        <div className="contact__intro">
          <img
            src="/header/logo-header-white.png"
            alt=""
            aria-hidden="true"
            className="contact__mark"
          />
          <span className="eyebrow">Contato</span>
          <h2>
            Vamos transformar sua próxima
            <br />
            ideia em imagem.
          </h2>
          <a href="mailto:contato@andresouzafilms.com" className="contact__email">
            contato@andresouzafilms.com
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

        <div className="contact__form-wrap">
          <div className="contact__tabs" role="tablist" aria-label="Tipo de solicitação">
            <button
              type="button"
              role="tab"
              aria-selected={formType === 'contato'}
              className={`contact__tab${formType === 'contato' ? ' contact__tab--active' : ''}`}
              onClick={() => handleTypeChange('contato')}
            >
              Contato
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={formType === 'orcamento'}
              className={`contact__tab${formType === 'orcamento' ? ' contact__tab--active' : ''}`}
              onClick={() => handleTypeChange('orcamento')}
            >
              Orçamento
            </button>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="contact-name">Nome</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange('name')}
                placeholder="Seu nome"
                autoComplete="name"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">E-mail</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange('email')}
                placeholder="voce@email.com"
                autoComplete="email"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-phone">Telefone <span>(opcional)</span></label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                placeholder="+55 (11) 90000-0000"
                autoComplete="tel"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                placeholder={destination.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar'}
            </button>

            {status === 'sent' && (
              <p className="contact__status" role="status">
                Mensagem enviada com sucesso! Obrigado pelo contato.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--error" role="alert">
                Não foi possível enviar sua mensagem agora. Tente novamente em
                instantes.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
