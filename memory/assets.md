# 🎬 Assets

Organização de mídia: vídeos, fotos e materiais do portfólio.

---

## Vídeos

### Hero Video
- **Arquivo:** `public/video/hero-laptop.mp4`
- **Uso:** Hero section background
- **Specs:** 1920x1080 (ou responsive), auto-play, muted, loop
- **Status:** ✅ Ativo
- **Nota:** Anterior era `hero-camera.mp4` (substituído em 2026-08-24)

### YouTube Videos (Embedded)

Todos os vídeos de cases são incorporados via `<iframe>` com embed URLs:

#### RedeTV! (2010-2023)
- Nenhum vídeo incorporado

#### Gerando Talentos — Israel (2018)
- **ID:** 9qCHkDwz5Og
- **URL:** https://www.youtube.com/embed/9qCHkDwz5Og
- **Título:** "Tu És Rei (A Terra Canta) — Final Gerando Talentos 2018"
- **Duração:** ~5 min (aproximado)
- **Aspect Ratio:** 16:9

#### FAAP (2011-2014)
- **ID:** A0w4w9b1QHo
  - URL: https://www.youtube.com/embed/A0w4w9b1QHo
  - Título: "Fotógrafa Juliana Sandes"
- **ID:** zey8QAs8iw4
  - URL: https://www.youtube.com/embed/zey8QAs8iw4
  - Título: "Produção do Programa Articulando"
- **ID:** kc6dufBi_WA
  - URL: https://www.youtube.com/embed/kc6dufBi_WA
  - Título: "Trabalho FAAP — Programa Articulando"

#### LAB3, Band, SBT, Lifehouse
- Nenhum vídeo incorporado (casos em texto-only ou com galeria)

---

## Fotos

### public/gerando-talentos/
**Case:** Gerando Talentos — Final em Israel (2018)  
**Total:** 12 fotos  
**Formato:** JPG  
**Componente:** PhotoCarousel (com setas + lightbox)  
**Tamanho por foto:** ~200-290KB  

**Ordem e descrição:**
- 01.jpg — israel.JPG (bandeira Israel, contexto)
- 02.jpg — GRAVAÇÕES EXTERNAS EM ISRAEL.JPG (barco, gravações)
- 03.jpg — CFF34628-851A-44A7-8894-083E7A5B21E5.JPG (bastidor)
- 04.jpg — corte.jpg (edição/bastidor)
- 05-12.jpg — Fotos de bastidor diversas (produção, equipe, cenário)

**Status:** ✅ Ativa  
**Responsive:** 260px width (desktop), 200px (mobile)  
**Lightbox:** Sim, com fade-in/out ~220ms + navegação setas/teclado

---

### public/faap-articulando/
**Case:** FAAP — Articulando Juliana Sandes (highlight dentro FAAP 2011-2014)  
**Total:** 2 fotos  
**Formato:** JPG  
**Componente:** Galeria simples (sem PhotoCarousel, apenas inline)  

**Fotos:**
- 01.jpg — galera.jpg (equipe, bastidor)
- 02.jpg — 20230111_161131.jpg (produção ao vivo)

**Status:** ✅ Ativa  
**Layout:** 2 fotos horizontais, grid responsivo (2 cols desktop / 1 col mobile)

---

### public/lifehouse/
**Case:** Lifehouse Church (Media Director, atual)  
**Total:** 7 fotos  
**Formato:** JPG  
**Componente:** PhotoCarousel (com setas + lightbox)  

**Fotos:**
- 01.jpg — camera ap.jpg (câmera ao vivo)
- 02-07.jpg — Fotos de evento e produção (telão, setup, serviço)

**Status:** ✅ Ativa  
**Responsive:** 260px width (desktop), 200px (mobile)  
**Lightbox:** Sim, mesmo componente que Gerando Talentos

---

## Estrutura de Pastas

```
public/
├── video/
│   └── hero-laptop.mp4 ........................ Hero background
├── gerando-talentos/
│   ├── 01.jpg
│   ├── 02.jpg
│   └── ... (até 12.jpg)
├── faap-articulando/
│   ├── 01.jpg
│   └── 02.jpg
├── lifehouse/
│   ├── 01.jpg
│   └── ... (até 07.jpg)
└── [outras pastas do Vite]

src/
├── components/
│   ├── PhotoCarousel.jsx ..................... Carousel + lightbox
│   ├── PhotoCarousel.css
│   ├── About.jsx ............................ Foto do André
│   └── Experience.jsx ....................... Timeline com cases
└── data/
    └── experience.js ........................ Array de experiências
```

---

## Referências em Código

### data/experience.js
```js
{
  period: '2018',
  org: 'Gerando Talentos — Final em Israel',
  // ... período, cargo, descrição
  videoUrl: 'https://www.youtube.com/embed/9qCHkDwz5Og',
  videoTitle: 'Tu És Rei (A Terra Canta) — Final Gerando Talentos 2018',
  galleryLabel: 'Behind the Scenes',
  gallery: [
    '/gerando-talentos/01.jpg',
    '/gerando-talentos/02.jpg',
    // ... até 12.jpg
  ],
}
```

### About.jsx
```jsx
import andrePhoto from '/andre-photo.png';
// Renderiza com CSS filters + mask-image para fade
```

### Hero.jsx
```jsx
const HERO_VIDEO_SRC = '/video/hero-laptop.mp4';
```

---

## Convenções

✅ **Nomes de pasta:** lowercase, sem espaços, com hífen (public/gerando-talentos/)  
✅ **Nomes de foto:** números simples (01.jpg, 02.jpg, ...) para ordem clara  
✅ **Formato:** JPG (lossy compression, adequado para web)  
✅ **Tamanho:** ~200-290KB por foto (balanceado entre qualidade + load time)  
✅ **Aspect ratio:** 16:9 para vídeos, variável para fotos  

❌ **Nunca:** espaços em nomes, maiúsculas mistas (pode quebrar em case-sensitive servers), versioning em nomes (v1, v2)

---

## Próximas Adições

Quando novo case for adicionado (ex.: novo projeto audiovisual):

1. **Criar pasta:** `public/nome-case/`
2. **Copiar fotos:** 01.jpg, 02.jpg, ... (numeradas sequencialmente)
3. **YouTube ID:** obter embed URL (youtube.com/embed/ID, não youtu.be/ID)
4. **data/experience.js:** adicionar objeto com videoUrl, gallery[]
5. **memory/experiences.md:** registrar detalhes
6. **memory/assets.md:** adicionar seção de pasta nova
7. **memory/changelog.md:** registrar mudança

---

## Performance Notes

- **Lazy loading:** Imagens têm `loading="lazy"` no HTML
- **Lightbox images:** Renderizadas em `object-fit: contain` para melhor encaixe
- **Carousel items:** Renderizadas em `object-fit: cover` para enquadramento consistente
- **Vídeos:** Embutidos do YouTube (delegam load ao CDN da Google)
- **Próxima otimização:** Considerar WebP com fallback JPG (verificar browser support)

---

**Última atualização:** 2026-08-25  
**Total de fotos:** 21 (12 + 2 + 7)  
**Total de vídeos incorporados:** 4 (1 Gerando + 3 FAAP)  
**Vídeo local:** 1 (hero-laptop.mp4)
