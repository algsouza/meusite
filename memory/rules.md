# ⚖️ Rules

Regras gerais, padrões e princípios que governam o desenvolvimento e manutenção do portfólio.

---

## 🏗️ Arquitetura

### Stack
- **Framework:** React 18 + Vite (build)
- **CSS:** Puro (sem Tailwind, Styled Components ou UI libs)
- **Design Tokens:** CSS custom properties (--var-name)
- **Componentes:** Sem dependências externas (PhotoCarousel é custom)
- **Deploy:** Vercel (main branch auto-deploys)

### Princípio de Simplicidade
- ✅ Usar primitivos HTML (div, button, a, img, iframe)
- ✅ Usar CSS vanilla com bem organizada (BEM)
- ✅ Usar hooks React built-in (useState, useEffect, useRef)
- ❌ Evitar libs de componentes (Material-UI, shadcn/ui, Chakra)
- ❌ Evitar frameworks CSS (Tailwind, Bootstrap)
- ❌ Evitar dependências que não são essenciais

**Por quê?** Controle total, bundle size pequeno, manutenção simples, sem vendor lock-in.

---

## 🎨 Design

### Cores
- Sempre usar variáveis CSS em `src/index.css` (--accent, --text, --border, etc.)
- Nunca hardcode cores em componentes
- Paleta atual: Ember (#f0954f) + Azure (#3fa8e0) + neutrals (dark theme)
- RGBA variants para dimming/borders: --accent-dim, --accent-border

### Tipografia
- Heading: Bricolage Grotesque (Google Fonts)
- Body: Inter (Google Fonts)
- Mono: JetBrains Mono (Google Fonts)
- Escala: h1 48px, h2 32px, h3 20px, p 15px (+ responsive mobile -2px)

### Spacing
- Grid de 8px: 8, 16, 24, 32, 40, 56 (nunca valores aleatórios)
- Gap em grid: 32px desktop / 16px mobile
- Padding de containers: 24px sides / 16px mobile

### Border Radius
- Padrão: 4px (buttons, inputs, small cards)
- Cards elevados: 6px
- Nunca 12px+ (parecer old-fashioned)

### Animações
- Scroll-reveal: fade-in + slide-up, trigger 15% visível, ~250-300ms ease-out
- Hover: scale(1.06) + brighten leve, ~250ms ease
- Transições rápidas: 150ms opacity
- Nunca auto-play (precisa de interação)

---

## 📝 CSS Padrões

### BEM Naming
```css
.component { ... }
.component__element { ... }
.component__element--modifier { ... }
```

Exemplos:
- `.photo-carousel` (bloco)
- `.photo-carousel__track` (elemento)
- `.photo-carousel__item` (elemento)
- `.photo-carousel__arrow` (elemento)
- `.photo-carousel__arrow--prev` (modificador)

### Organização de Arquivo CSS
```css
/* 1. Imports */
@import url(...);

/* 2. Variables/Custom Properties */
:root { ... }

/* 3. Base/Reset */
* { ... }
html, body { ... }

/* 4. Component Styles (BEM) */
.component { ... }
.component__element { ... }

/* 5. Media Queries */
@media (max-width: 768px) { ... }

/* 6. Utilities */
.reveal { ... }
.no-scroll { ... }
```

### Evitar
- ❌ Inline styles (exceto em casos muito raros)
- ❌ CSS-in-JS solutions
- ❌ SCSS nesting (usar CSS puro, nesting é menos legível)
- ❌ !important (reorganizar especificidade em vez disso)

---

## ⚛️ React Padrões

### Component Structure
```jsx
import './ComponentName.css';

export default function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(null);
  
  return (
    <div className="component">
      {/* Content */}
    </div>
  );
}
```

### Naming
- Componentes: PascalCase (ComponentName.jsx)
- Props: camelCase (propName)
- State: camelCase (state, setState)
- CSS classes: kebab-case (.component-name)

### Hooks Permitidos
- ✅ useState, useEffect, useRef, useContext
- ✅ Custom hooks (useReveal, etc.)
- ✅ Hooks customizados locais se necessário
- ❌ Redux, Zustand (overkill para este projeto)
- ❌ useReducer (overly complex, useState é suficiente)

### Props
- Sempre destructurar
- Sempre incluir PropTypes ou JSDoc (se houver múltiplas props)
- Evitar prop drilling (passar props através de vários níveis) — usar Context se precisar

---

## 📁 File Organization

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── About.jsx
│   ├── About.css
│   ├── Experience.jsx
│   ├── Experience.css
│   ├── PhotoCarousel.jsx ........... (novo: carousel custom)
│   ├── PhotoCarousel.css
│   └── ... (outros)
├── data/
│   ├── experience.js ............... (casos + data)
│   └── cases.js (deprecated, não usar)
├── hooks/
│   ├── useReveal.js
│   └── ... (se houver mais)
├── App.jsx
├── index.css ...................... (design tokens + global styles)
├── index.jsx
└── App.css

public/
├── video/
│   └── hero-laptop.mp4
├── gerando-talentos/ .............. (fotos case 1)
├── faap-articulando/ .............. (fotos case 2)
├── lifehouse/ ..................... (fotos case 3)
└── ... (assets estáticos)

memory/ ............................ (documentação do projeto)
├── INDEX.md
├── project.md
├── branding.md
├── design.md
├── experiences.md
├── portfolio.md
├── prompts.md
├── decisions.md
├── roadmap.md
├── changelog.md
├── assets.md
└── rules.md
```

### Regra de Ouro
- Um arquivo = um componente (ou um hook, ou um arquivo de dados)
- CSS ao lado do JSX (não em pasta /styles separada)
- Dados em /data separado de componentes

---

## 🔄 Git Workflow

### Commits
```
feat: Add new feature
fix: Fix bug in component
docs: Update documentation
refactor: Improve code quality
style: Update CSS tokens
test: Add test coverage
chore: Update dependencies
```

### Branch Naming
- `main` — production (auto-deploy via Vercel)
- Sempre commitar direto em `main` (repo simples, sem review necessário)

### Commit Messages
```
[Type] Brief description

- Longer description if needed
- Multiple lines for complex changes

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
```

### No-nos
- ❌ Force push (só com confirmação explícita)
- ❌ Merge commits (rebase preferível)
- ❌ Commits com "WIP" ou "test" (trabalho inacabado)

---

## 🧪 Testing / QA

### Antes de Commit
- [ ] `npm run build` sem erros
- [ ] `npm run dev` e verificar visualmente no browser
- [ ] Desktop (1280px+), tablet (768px), mobile (320px)
- [ ] Nenhum erro no console do navegador
- [ ] Novos componentes: testar interatividade (cliques, hover, keyboard nav)

### Responsividade
- **Desktop:** 1280px+ (layout completo, múltiplas colunas)
- **Tablet:** 768px–1279px (grid ajustado)
- **Mobile:** 320px–768px (single column, tap-friendly sizes)

### Carrossel / Lightbox (para novos cases)
- [ ] Setas funcionam (prev/next)
- [ ] Lightbox abre ao clicar foto
- [ ] Navegação dentro lightbox (setas, teclado ← →, Esc)
- [ ] Swipe no mobile (esquerda/direita entre fotos)
- [ ] Sem scroll horizontal na página

### Performance
- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] CLS < 0.1 (Cumulative Layout Shift)
- [ ] No render blocking scripts

---

## 🔐 Segurança

### Sanitization
- ✅ Se renderizar user-generated content, usar DOMPurify ou similar
- ✅ Se chamar APIs externas, validar respostas
- ❌ Never use dangerouslySetInnerHTML sem sanitizar
- ❌ Never put URLs diretas de usuário em `<a href>` sem validar

### Ambiente
- ❌ Nunca commitar .env com secrets
- ✅ Usar variáveis de ambiente via Vercel dashboard
- ✅ Confirmar que API keys não estão no JS (sempre server-side)

---

## 📚 Documentation

### Quando documentar
- ✅ Decisões arquiteturais (por quê, não como)
- ✅ Componentes complexos (props, estados, comportamento)
- ✅ Workflows não-óbvios (como adicionar novo case?)
- ❌ Código autoexplicativo (bom naming dispensa comentários)
- ❌ Comentários óbvios ("incrementar x", "renderizar div")

### Formato
- Markdown em `/memory` (nunca em comentários de código)
- Arquivos temáticos: branding.md, design.md, etc.
- Atualizar quando mudar comportamento

---

## 🎯 Filosofia do Portfólio

### O que É (✅)
- Audiovisual-first (vídeos + fotos protagonistas)
- Minimalista (sem excesso de UI)
- Profissional (elegante, sem clichês)
- Funcional (tudo funciona perfeitamente)

### O que NÃO É (❌)
- Blog (sem artigos, insights)
- Currículo (sem skills list, sem CV structure)
- Agência (sem "contact form" de serviços, sem pricing)
- Portfolio comercial (sem CTAs, sem vendas)

### Quando Adicionar Novo Case
1. Validar que encaixa na filosofia (audiovisual? relevante?)
2. Coletar vídeo YouTube + fotos
3. Seguir template em data/experience.js
4. Testar desktop + mobile
5. Atualizar experiences.md + assets.md + changelog.md
6. Commit + deploy

---

## 🔄 Regra de Flexibilidade

**Mudanças solicitadas pelo usuário têm prioridade absoluta.**

Fluxo:
1. Usuário solicita mudança
2. Atualizar memória (/memory arquivos) PRIMEIRO
3. Depois alterar código
4. Testar e validar

**Por quê?** A documentação é a fonte de verdade do projeto. Código segue a documentação.

---

## 👤 Autoria

**Responsável:** Claude Sonnet 5 (com feedback do user André Souza)  
**Co-authored commits:** Sempre incluir "Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"

---

**Última atualização:** 2026-08-25  
**Versão de regras:** 1.0  
**Aplicável de:** 2026-08-25 em diante
