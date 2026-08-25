# 📝 Changelog

Histórico completo de mudanças do projeto, desde o início até agora.

---

## [2026-08-25] Implementar Sistema de Memória Local

**Type:** Documentation  
**Scope:** /memory (11 arquivos)  

**Arquivos criados:**
- `INDEX.md` — Índice de navegação para toda a memória
- `project.md` — Documentação do projeto (objetivo, techs, arquitetura)
- `branding.md` — Identidade visual e tom (cores, tipografia, diferenciadores)
- `design.md` — Design system (tokens, componentes, responsividade)
- `experiences.md` — Registro de todas as 7 experiências profissionais
- `portfolio.md` — Filosofia e princípios do portfólio
- `prompts.md` — Workflows salvos e comandos importantes
- `decisions.md` — Histórico de decisões com motivos e impactos
- `roadmap.md` — Melhorias planejadas (curto/médio/longo prazos)
- `changelog.md` — Este arquivo, histórico de mudanças
- `assets.md` — Organização de mídia (fotos, vídeos, pastas)
- `rules.md` — Padrões gerais e regras do projeto

**Impacto:** Alto — estrutura de conhecimento persistente, facilitando futuras atualizações  
**Commit:** "Implement memory system with 11 documentation files"

---

## [2026-08-24] Adicionar Case: Lifehouse Church + Galeria

**Type:** Feature  
**Scope:** data/experience.js, Experience.jsx, Experience.css, fotos  

**Mudanças:**
- Atualizar Lifehouse de texto-only para "Media Director" com 7 fotos em carousel
- Criar PhotoCarousel component (sem dependências, scroll-snap nativo)
- Adicionar pasta `public/lifehouse/` com fotos numeradas (01-07.jpg)
- Testar setas + lightbox + swipe no mobile
- Responsive: fotos 260px desktop / 200px mobile

**Impacto:** Médio — novo tipo de case (expandido com galeria)  
**Teste:** Desktop + mobile, setas funcionam, lightbox abre  
**Commit:** "Add Lifehouse Church gallery with PhotoCarousel"

---

## [2026-08-24] Adicionar Case: FAAP + Articulando Juliana Sandes

**Type:** Feature  
**Scope:** data/experience.js, Experience.jsx, Experience.css, fotos  

**Mudanças:**
- Adicionar bloco `highlight` dentro do case FAAP
- Incorporar 3 VTs YouTube em grid (3 cols desktop / 1 col mobile)
- Adicionar 2 fotos de apoio horizontais
- Incluir título, subtítulo, créditos
- Criar pasta `public/faap-articulando/` com 2 fotos

**Vídeos:**
1. https://www.youtube.com/embed/A0w4w9b1QHo (Fotógrafa Juliana Sandes)
2. https://www.youtube.com/embed/zey8QAs8iw4 (Produção Articulando)
3. https://www.youtube.com/embed/kc6dufBi_WA (Trabalho FAAP)

**Impacto:** Médio — novo tipo de bloco destacado dentro de case existente  
**Commit:** "Add FAAP Articulando highlight with 3 VTs + 2 support photos"

---

## [2026-08-24] Fix: Corrigir Navegação do Carrossel (Index-based)

**Type:** Bug Fix  
**Scope:** PhotoCarousel.jsx, PhotoCarousel.css  

**Problema:** Setas não navegavam corretamente entre fotos (conflito scroll-snap + scrollBy relativo)  
**Solução:** Reescrever com navegação por índice (scrollTo absoluto + state syncing)  
**Teste:** scrollLeft em 0px, 216px, 1296px, 2344px — todas as transições suaves  

**Impacto:** Crítico — carrossel não funciona sem esta fix  
**Commit:** "Fix carousel navigation: use index-based scrollTo instead of scrollBy"

---

## [2026-08-24] Fix: PhotoCarousel Lightbox preso em Transform

**Type:** Bug Fix  
**Scope:** PhotoCarousel.jsx  

**Problema:** Lightbox `position: fixed` era relativo ao transform do parent (scroll-reveal)  
**Solução:** Usar `createPortal()` para renderizar lightbox no body, fora da árvore de componentes  
**Resultado:** Lightbox agora cobre tela inteira com z-index correto

**Impacto:** Crítico — lightbox inutilizável sem esta fix  
**Commit:** "Use React Portal for lightbox to break out of parent transform context"

---

## [2026-08-24] Fix: Grid Item não permite Overflow do Carrossel

**Type:** Bug Fix (CSS)  
**Scope:** Experience.css  

**Problema:** `.experience__content` tinha `min-width: auto` implícito, comprimindo carrossel  
**Solução:** Adicionar `min-width: 0` ao `.experience__content`  
**Uma linha, grande impacto:** permite overflow-x: auto funcionar

**Impacto:** Crítico — uma linha que destranca todo o carrossel  
**Commit:** "Add min-width: 0 to .experience__content to fix carousel overflow"

---

## [2026-08-24] Atualizar Foto do André em About

**Type:** Enhancement  
**Scope:** About.jsx, About.css  

**Mudanças:**
- Importar nova foto (andre-photo.png do Facebook)
- Aplicar CSS filters: grayscale(0.15), contrast(1.1), brightness(0.9), saturate(1.15)
- Adicionar mask-image com radial-gradient para fade elegante
- Duotone glow com cores Ember + Azure ao fundo
- Object-position: 38% 22% para enquadramento correto (notebook visível)

**Feedback do usuário:** "foto muito ruim, não aparece o notebook... um pouquinho mais de luz, um pouquinho mais de tom"  
**Iterações:** 1 (ajuste fino de filters até encontrar balanço)  

**Impacto:** Médio — integração visual humanizadora  
**Commit:** "Update André's photo in About with improved color grading and framing"

---

## [2026-08-24] Adicionar Redes Sociais em Contact

**Type:** Feature  
**Scope:** Contact.jsx, Contact.css  

**Mudanças:**
- Adicionar social links inline com SVG icons
- Plataformas: Instagram (@sgandresouza), Facebook, WhatsApp (+1 689-263-8382), Email
- Cores alternadas no hover (Ember orange, Azure blue)
- Acessibilidade: aria-label em cada ícone

**Impacto:** Baixo — apenas componente visual novo  
**Commit:** "Add social media links to Contact section (Instagram, Facebook, WhatsApp, Email)"

---

## [2026-08-24] Trocar Video Hero: hero-camera.mp4 → hero-laptop.mp4

**Type:** Enhancement  
**Scope:** src/components/Hero.jsx  

**Mudança:** HERO_VIDEO_SRC atualizado  
**Impacto:** Baixo — apenas troca de asset  
**Commit:** "Update hero video from hero-camera.mp4 to hero-laptop.mp4"

---

## [2026-08-24] Criar Novo Case: Gerando Talentos — Israel 2018

**Type:** Feature  
**Scope:** data/experience.js, Experience.jsx, Experience.css, novo PhotoCarousel.jsx  

**Mudanças:**
- Novo item no array experience (2º position, após RedeTV)
- 3 parágrafos de `caseText` com contexto completo do projeto
- 1 vídeo YouTube incorporado: "Tu És Rei (A Terra Canta) — Final Gerando Talentos 2018"
- 12 fotos de bastidor com PhotoCarousel (setas + lightbox em tela cheia)
- Pasta: `public/gerando-talentos/` com fotos numeradas (01-12.jpg)

**Descrição:** Projeto internacional 2018, produção da final em Israel, edição e finalização de programa  
**Impacto:** Alto — novo componente (PhotoCarousel) + novo tipo de case (expandido)  
**Commit:** "Add Gerando Talentos 2018 case with video and 12-photo carousel"

---

## [2026-08-23] Rebranding: Andre Pizza → André Souza

**Type:** Rebranding  
**Scope:** index.html, Nav.jsx, Footer.jsx, Hero.jsx, Contact.jsx, cases.js  

**Mudanças:**
- `index.html`: `<title>`, meta description, og:title
- Nav: logo nome
- Footer: copyright
- Hero: h1 title
- Contact: email (2 ocorrências: href social + link grande)
- cases.js: client + description (em IA case)

**Total de 8 ocorrências alteradas**  
**Não alterado:** About.jsx (conforme solicitado — "não alterar seção Sobre")

**Impacto:** Alto — afeta identidade em múltiplos pontos  
**Email novo:** sg.andresouza@gmail.com  
**Commit:** "Rebrand portfolio: Andre Pizza → André Souza"

---

## [2026-08-23] Design Upgrade: Nova Paleta de Cores

**Type:** Design Rebranding  
**Scope:** src/index.css (design tokens)  

**Cores alteradas:**
- `--accent`: #17e0ff (cyan antigo) → #f0954f (Ember orange)
- `--accent-blue`: (novo) → #3fa8e0 (Azure blue)
- `--text`: ajuste para tom mais quente
- `--text-h`: ajuste para tom mais quente
- `--border`: ajuste para cinza mais escuro/quente
- `--bg-raised`: ajuste para tom mais quente (dark brown)

**Tokens RGBA adicionados:**
- `--accent-dim`: rgba(240, 149, 79, 0.08)
- `--accent-border`: rgba(240, 149, 79, 0.2)
- `--accent-blue-dim`: rgba(63, 168, 224, 0.08)
- `--accent-blue-border`: rgba(63, 168, 224, 0.2)

**Impacto:** Alto — toda a paleta visual muda (afetar todos os componentes)  
**Commit:** "Update design tokens: new Ember + Azure color palette"

---

## [2026-08-23] Projeto Inicial: Rebranding + Cases

**Type:** Initial Project Setup (from previous state)  
**Scope:** Full app  

**Estado inicial:** Portfolio de "Andre Pizza" com casos básicos de texto  
**Requisitos:** Rebranding + 2 novos casos (Gerando Talentos + FAAP) com componentes visuais  
**Resultado:** Fase 1 (cores) + Fase 2 (cases) + Fase 3 (memory) = portfolio atualizado

---

## Version History

| Date | Version | Type | Notes |
|---|---|---|---|
| 2026-08-25 | 1.4 | Documentation | Memory system implemented |
| 2026-08-24 | 1.3 | Feature | Lifehouse + FAAP highlights + fixes |
| 2026-08-24 | 1.2 | Feature | Gerando Talentos case + PhotoCarousel |
| 2026-08-23 | 1.1 | Rebranding | André Souza + new color palette |
| Earlier | 1.0 | Initial | Original portfolio (Andre Pizza) |

---

**Última atualização:** 2026-08-25  
**Total de commits:** ~15 (estimado, baseado em features/fixes)  
**Status:** ✅ Todas as fases implementadas e testadas
