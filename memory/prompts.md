# 🤖 Prompts

Comandos importantes e workflows salvos para referência rápida.

---

## Importante: Usar Sonnet 5

Sempre que possível, use Claude Sonnet 5 para trabalhar neste projeto.

```bash
# No terminal Claude Code
/model claude-sonnet-5
```

---

## Exploração de Codebase

**Buscar componentes React:**
```
Explore o diretório src/components/ procurando por componentes que usem [PALAVRA-CHAVE].
Retorne lista com nome do arquivo, função, e trecho de código relevante.
```

**Encontrar uso de um hook:**
```
Grep para encontrar todos os usos de useReveal() no projeto.
Reporte com arquivo, linha, e contexto.
```

---

## Adicionar Novo Case

**Template para novo case na Experience:**
```js
{
  period: '20XX',
  org: 'Name — Subtitle',
  role: 'Role 1 · Role 2 · Role 3',
  description: '',
  caseText: [
    'Paragraph 1...',
    'Paragraph 2...',
  ],
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  videoTitle: 'Video Title',
  galleryLabel: 'Behind the Scenes',  // ou outro label
  gallery: ['/folder/01.jpg', '/folder/02.jpg', ...],
}
```

**Passo a passo:**
1. Criar pasta `public/nome-case/` com fotos numeradas (01.jpg, 02.jpg, ...)
2. Adicionar objeto ao array em `src/data/experience.js`
3. Atualizar `memory/experiences.md`
4. Atualizar `memory/assets.md`
5. Atualizar `memory/changelog.md`
6. Testar no browser (npm run dev) — desktop + mobile
7. Commit com mensagem clara

---

## Rebranding / Alteração de Identidade

**Arquivos que mencionam nome/email do titular:**
- `index.html` (title, meta description, og:title)
- `src/components/Nav.jsx` (logo)
- `src/components/Footer.jsx` (copyright)
- `src/components/Hero.jsx` (h1)
- `src/components/Contact.jsx` (email href + display)
- `src/data/cases.js` (client, description)

**Comando:** Buscar e substituir `Andre Pizza` → nome novo (respeitar acentuação)

---

## Testar Carrossel / Lightbox

**Para qualquer galeria (PhotoCarousel):**
1. Verificar se setas funcionam (prev/next)
2. Clicar em foto → deve abrir lightbox em tela cheia
3. Testar navegação: setas, teclado (← →), Esc para fechar
4. Testar swipe no mobile (esquerda/direita entre fotos)
5. Confirmar que nenhuma seta quebrada (desktop + mobile)

**Comando rápido no console do navegador:**
```js
// Verificar se carrossel encontra as fotos
document.querySelectorAll('.photo-carousel__item').length
```

---

## Responsividade

**Testar em:**
- Desktop (1280px+)
- Tablet (768px-1279px)
- Mobile (320px-767px)

**Pontos-chave:**
- Texto legível sem zoom
- Imagens escaladas corretamente
- Setas/buttons acessíveis em mobile
- Sem scroll horizontal

---

## Adicionar Redes Sociais

Se adicionar novas redes (além de Instagram, Facebook, WhatsApp, Email):

**Em Contact.jsx:**
```jsx
const socials = [
  { label: 'Network Name', href: 'url', icon: (<svg>...</svg>) },
  ...
]
```

**Em Contact.css:**
```css
.contact__social-link:nth-child(n) {
  /* hover color específica se quiser */
}
```

---

## Git Workflow

**Commit padrão:**
```bash
git add [arquivos]
git commit -m "Descrição breve

Detalhes da mudança.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
```

**Sem push automático** — sempre pedir confirmação antes de fazer push

---

## Localização de Arquivos Críticos

| Arquivo | Propósito |
|---|---|
| `src/index.css` | Design tokens (cores, fonts, spacing) |
| `src/data/experience.js` | Array de experiências profissionais |
| `src/data/cases.js` | Array de cases com vídeos |
| `src/components/Experience.jsx` | Timeline de experiências |
| `src/components/PhotoCarousel.jsx` | Carrossel + lightbox customizado |
| `public/gerando-talentos/` | Fotos do case Israel 2018 |
| `public/faap-articulando/` | Fotos do case FAAP |
| `public/lifehouse/` | Fotos do case Lifehouse Church |
| `public/video/` | Vídeos do Hero (hero-laptop.mp4) |
| `memory/` | Base de conhecimento (você está aqui!) |

---

**Última atualização:** 2026-08-25
