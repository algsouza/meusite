# 📋 Project

## Objetivo

Portfólio audiovisual de André Souza, editor de vídeo e filmmaker. Demonstrar experiência profissional de 20+ anos em TV, publicidade, eventos e produção audiovisual. Destacar trabalhos audiovisuais como protagonistas com suporte de fotografia, texto curto e design elegante.

## Tecnologias

- **Framework:** React 18+ + Vite
- **Linguagem:** JavaScript/JSX
- **Styling:** CSS puro (component-scoped)
- **Fonts:** Google Fonts (Bricolage Grotesque, Inter, JetBrains Mono)
- **Componentes Custom:** Sem dependências externas de UI/carrossel/lightbox
- **Versionamento:** Git (remoto: https://github.com/algosouza/meusite)

## Arquitetura

```
meusite/
├── public/
│   ├── video/           # Vídeos do Hero e cases
│   ├── gerando-talentos/  # Fotos do case Israel 2018 (12 fotos)
│   ├── faap-articulando/  # Fotos do case FAAP (2 fotos)
│   ├── lifehouse/         # Fotos do Lifehouse Church (7 fotos)
│   └── fotos [ORIGINAIS]/ # Pastas originais (backup)
├── src/
│   ├── components/       # Componentes React
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Cases.jsx/css
│   │   ├── Services.jsx/css
│   │   ├── Experience.jsx/css
│   │   ├── Contact.jsx/css
│   │   ├── Footer.jsx/css
│   │   ├── Nav.jsx/css
│   │   ├── CaseCard.jsx/css
│   │   └── PhotoCarousel.jsx/css
│   ├── data/            # Dados estruturados
│   │   ├── experience.js  (array de experiências com video/gallery/highlight)
│   │   └── cases.js       (array de cases com videos/thumbnails)
│   ├── hooks/           # Hooks customizados
│   │   └── useReveal.js (scroll-reveal com IntersectionObserver)
│   ├── assets/          # Imagens, fonts, ícones
│   ├── index.css        # Design tokens centralizados (cores, fonts, spacing)
│   └── main.jsx         # Entry point
├── memory/              # BASE DE CONHECIMENTO (você está aqui)
└── index.html           # Meta tags, title, description
```

## Design Tokens (src/index.css)

### Cores
- **Accent (Primária):** #f0954f (Ember orange)
- **Accent-Blue (Secundária):** #3fa8e0 (Azure)
- **Text:** #e1e3e8 (Light gray)
- **Text-H:** #f5f6f8 (Lighter)
- **Border:** #2a2c30 (Dark gray)
- **BG:** #0a0b0d (Almost black)
- **BG-Raised:** #14100c (Dark warm)

### Typography
- **Display/Heading:** Bricolage Grotesque (wght: 400, 500, 600, 700)
- **Body:** Inter (wght: 400, 500, 600)
- **Mono:** JetBrains Mono (wght: 400, 500)

### Espaçamento & Radius
- Radius padrão: 4px (clean, não arredondado demais)
- Grid: container max-width 1200px

## Convenções

### Nomenclatura
- Classes CSS: BEM modificado (`.component__element--modifier`)
- Arquivos React: PascalCase (Hero.jsx, PhotoCarousel.jsx)
- Dados: camelCase (experiences, videoUrl, galleryLabel)

### Padrões de Componente
1. **Import + CSS** no topo
2. **Função principal** sem intermediárias
3. **Hooks** (useState, useEffect) antes do JSX
4. **Renderização condicional** inline com ternário
5. **Sem comentários** (código auto-documentado)

### Dados Estruturados
- Experiências em `src/data/experience.js` (array de objetos)
- Cada item pode ter: `period`, `org`, `role`, `description`, `caseText[]`, `videoUrl`, `videoTitle`, `gallery[]`, `galleryLabel`, `highlight{}`, `videos[]`
- Casos em `src/data/cases.js` (array com video/thumbnail/videos[])

### Animações
- **Entrada:** scroll-reveal via `.reveal` class + `useReveal` hook
- **Threshold:** 15% do elemento visível
- **Transição:** fade-in (definida em index.css, ~300-250ms)
- **Interação:** hover subtil (scale, brightness, border-color)
- **Sem autoplay** de carrosséis/videos

## Deploy

- **Local Dev:** http://localhost:5173
- **Platform:** Vercel (connected to GitHub)
- **Branch:** main
- **Build:** npm run build
- **Preview:** npm run dev (port 5173)

## Estado Atual

- ✅ Rebranding André Souza (nome + email atualizado)
- ✅ Case Gerando Talentos Israel 2018 (texto + YouTube + 12 fotos com carrossel/lightbox)
- ✅ Case FAAP Articulando Juliana Sandes (3 VTs YouTube + 2 fotos de apoio)
- ✅ Experiência Lifehouse Church (Media Director + 7 fotos com carrossel)
- ✅ Carrossel/Lightbox customizado (sem libs externas)
- ✅ Responsividade desktop/mobile completa
- ✅ Nenhum erro no console

**Última atualização:** 2026-08-24
