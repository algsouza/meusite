const CONTACT_EMAIL = 'contato@andresouzafilmes.com'

const TYPE_LABELS = {
  contato: 'Contato',
  orcamento: 'Orçamento',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Método não permitido.' })
  }

  const { name, email, phone, message, type } = req.body || {}

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ ok: false, error: 'Informe seu nome.' })
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ ok: false, error: 'Informe um e-mail válido.' })
  }
  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ ok: false, error: 'Escreva uma mensagem.' })
  }

  const requestType = type === 'orcamento' ? 'orcamento' : 'contato'
  const typeLabel = TYPE_LABELS[requestType]
  const subjectAction = requestType === 'orcamento' ? 'orçamento' : 'contato'
  const subject = `Novo ${subjectAction} pelo site - ${name.trim()}`

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Never log the key itself — only that it's missing.
    console.error('[api/contact] RESEND_API_KEY is not set in this environment.')
    return res.status(500).json({ ok: false, error: 'Serviço de e-mail não configurado.' })
  }

  const fromAddress = process.env.RESEND_FROM || 'onboarding@resend.dev'

  const textLines = [
    `Tipo: ${typeLabel}`,
    `Nome: ${name.trim()}`,
    `E-mail: ${email.trim()}`,
    phone && phone.trim() ? `Telefone: ${phone.trim()}` : null,
    '',
    message.trim(),
  ].filter((line) => line !== null)

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `André Souza Filmes <${fromAddress}>`,
        to: [CONTACT_EMAIL],
        reply_to: email.trim(),
        subject,
        text: textLines.join('\n'),
      }),
    })

    if (!resendRes.ok) {
      const errBody = await resendRes.text().catch(() => '')
      console.error('[api/contact] Resend API responded with an error:', resendRes.status, errBody)
      // TEMP DEBUG — remove `debug` field once the Resend error is diagnosed.
      return res.status(502).json({
        ok: false,
        error: 'Falha ao enviar e-mail. Tente novamente.',
        debug: { status: resendRes.status, body: errBody, fromEnvSet: !!process.env.RESEND_FROM, keyLen: apiKey.length, keyPrefix: apiKey.slice(0, 5) },
      })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[api/contact] Unexpected error while calling Resend:', err.message)
    return res.status(500).json({ ok: false, error: 'Erro interno ao enviar mensagem.' })
  }
}
