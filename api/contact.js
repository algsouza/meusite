export default async function handler(req, res) {
  console.log('[api/contact] invoked', { method: req.method, url: req.url })

  try {
    return res.status(200).json({ ok: true, debug: 'minimal handler alive' })
  } catch (err) {
    console.error('[api/contact] Unexpected error in minimal handler:', err && err.message)
    return res.status(500).json({ ok: false, error: 'Erro interno.' })
  }
}
