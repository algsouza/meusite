# 🎭 Design

## Cores (Tokens)

Definidas em `src/index.css` como CSS custom properties:

```css
--accent: #f0954f;           /* Ember Orange */
--accent-blue: #3fa8e0;      /* Azure Blue */
--accent-dim: rgba(240, 149, 79, 0.08);
--accent-border: rgba(240, 149, 79, 0.2);
--accent-blue-dim: rgba(63, 168, 224, 0.08);
--accent-blue-border: rgba(63, 168, 224, 0.2);
--text: #e1e3e8;             /* Light gray */
--text-h: #f5f6f8;           /* Lighter */
--border: #2a2c30;           /* Dark gray */
--bg: #0a0b0d;               /* Almost black */
--bg-raised: #14100c;        /* Dark warm */
```

## Tipografia

### Font Families (Google Fonts)
- `--heading: Bricolage Grotesque, sans-serif;`
- `--body: Inter, sans-serif;`
- `--mono: JetBrains Mono, monospace;`

### Escala Tipográfica
| Elemento | Size | Weight | Line-Height | Uso |
|---|---|---|---|---|
| h1 | 48px | 500/600 | 1.2 | Títulos Hero |
| h2 | 32px | 500 | 1.2 | Section headings |
| h3 | 20px | 500 | 1.2 | Subheadings |
| p | 15px | 400 | 1.6 | Body text |
| .eyebrow | 12px | 600 | 1 | Labels acima de títulos |
| .small | 13px | 400 | 1.5 | Textos secundários |

### Espaçamento Textual
- Letter-spacing nas labels: 1-1.5px (uppercase)
- Line-height body: 1.6 (legibilidade)
- Line-height heading: 1.2 (compacto)

## Animações

### Scroll Reveal (`.reveal` + `useReveal()`)
- **Trigger:** Elemento 15% visível
- **Effect:** Fade-in + slide-up (definido em index.css)
- **Duration:** ~300-250ms ease-out
- **One-time:** Dispara apenas uma vez ao entrar na viewport

### Hover States
```css
/* Imagem */
.photo-carousel__item:hover img {
  transform: scale(1.06);
  filter: saturate(1) brightness(1);
}

/* Link/Button */
.btn:hover {
  border-color: var(--accent-border);
  background: var(--accent-dim);
}

/* Ícone Social */
.contact__social-link:hover {
  border-color: var(--accent-border);
  color: var(--accent);
}
```

### Transições Globais
- Default: `transition: all 0.25s ease;` (hover, color changes)
- Longos: `transition: transform 0.6s ease;` (scale, slides)
- Rápidos: `transition: opacity 0.15s ease;` (fade)

## Componentes

### Buttons
```css
.btn--primary {
  background: var(--accent);
  color: #1c0f06;           /* Dark text on orange */
  border: 1px solid var(--accent-border);
  padding: 14px 32px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
}

.btn--ghost {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}
```

### Cards/Raised Blocks
```css
.raised {
  background: var(--bg-raised);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 24px;
}
```

### Grid Layout
- Desktop: 2 colunas (140px label + 1fr content) no Experience timeline
- Mobile: 1 coluna (stack)
- Gap: 32px (desktop), 8px (mobile)

## Responsividade

### Breakpoints
- **Desktop:** 1280px+
- **Tablet:** 769px – 1279px
- **Mobile:** 320px – 768px

### Mobile-First Adjustments
- Font sizes: -2px em mobile (h1: 48px → 38px, p: 15px → 14px)
- Padding: 24px → 16px em mobile
- Gap: 32px → 16px/8px em mobile
- Grid: 2 cols → 1 col
- Radius: mantém 4px/6px (não aumentar)

### Images
- `object-fit: cover;` com `object-position` customizado
- Lazy loading: `loading="lazy"` em img tags
- Max-width: 100% (responsive)

### Video
- `aspect-ratio: 16/9;` para embeds
- `max-width: 720px;` em vídeos principal
- Lightbox: `object-fit: contain;` e `max-height: 85vh;`

## Componentes Customizados

### PhotoCarousel
Carrossel horizontal nativo do browser (scroll-snap):
- **Track:** `overflow-x: auto; scroll-snap-type: x mandatory;`
- **Items:** `width: 260px; scroll-snap-align: start;`
- **Navegação:** Setas prev/next com `scrollBy()` por card
- **Lightbox:** Modal em tela cheia via `createPortal()` (React)
  - Setas e teclado (← → Esc) para navegar
  - Swipe básico no mobile
  - Fade-in/out ~220ms

### CaseCard
Card de case com thumbnail, título, categoria, descrição:
- **Video thumbnail:** Auto-gerado do YouTube ID ou custom
- **Play icon:** Overlay no hover
- **Sub-videos:** Lista inline de `videos[]` com iframes embedded

## Consistência

✅ **Sempre usar:** design tokens (CSS vars), não hardcode colors
✅ **Grid baseado em:** container max-width + padding lateral
✅ **Spacing:** múltiplos de 8px (8, 16, 24, 32, 40, 56, ...)
✅ **Radius:** 4px padrão, 6px em cards elevados
✅ **Borders:** sempre `var(--border)`, nunca hardcode

❌ **Nunca:** usar cores hardcoded, fonts inline, media queries sem breakpoint
❌ **Nunca:** gradientes além do necessário, animações automáticas sem interação

**Última atualização:** 2026-08-25
