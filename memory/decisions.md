# 📋 Decisions

Registro de decisões importantes com data, motivo e impacto.

---

## 2026-08-23 | Rebranding: Andre Pizza → André Souza

**Motivo:** Novo nome/identidade do titular do portfólio  
**Impacto:** Alto — altera identidade visual em múltiplos pontos  
**Escopo:** index.html, Nav, Footer, Hero, Contact, cases.js IA  
**Status:** ✅ Implementado  

---

## 2026-08-23 | Adicionar Case: Gerando Talentos Israel 2018

**Motivo:** Projeto internacional de destaque merecia ser prominente no portfólio  
**Impacto:** Alto — novo componente PhotoCarousel + estrutura de case expandido  
**Escopo:** Experience.jsx, data/experience.js, novo PhotoCarousel.jsx, 12 fotos  
**Decisões internas:**
- Usar carrossel nativo (scroll-snap) em vez de libs
- Lightbox via React Portal (não setPageOffset)
- Foto 1 = bandeira (Israel), Foto 2 = barco (gravações)
- Ordem 3-12 = bastidor diverso  

**Status:** ✅ Implementado e testado (setas + lightbox funcionam)

---

## 2026-08-24 | Foto do André em About (Integração visual)

**Motivo:** Humanizar o portfólio, conectar visualmente ao "André Souza"  
**Impacto:** Médio — mudança visual na seção About  
**Escopo:** About.jsx, nova foto (andre-photo.png), CSS filters/masks  
**Decisões internas:**
- Usar foto do Facebook (fonte confiável)
- CSS filters: grayscale(0.15), contrast(1.1), brightness(0.9), saturate(1.15)
- Mask-image com radial-gradient para fade elegante
- Duotone glow (Ember + Azure) ao fundo  

**Status:** ✅ Implementado

---

## 2026-08-24 | Adicionar Social Links em Contact

**Motivo:** Facilitar contato via múltiplos canais (Instagram, Facebook, WhatsApp, Email)  
**Impacto:** Baixo — apenas novo componente visual  
**Escopo:** Contact.jsx, SVG inline icons, color alternation (hover)  
**Links:**
- Instagram: @sgandresouza
- Facebook: /share/17uVeykrPG/
- WhatsApp: +1 689-263-8382
- Email: sg.andresouza@gmail.com

**Status:** ✅ Implementado

---

## 2026-08-24 | Novo Video Hero: hero-laptop.mp4

**Motivo:** Trocar hero-camera.mp4 (video anterior) por hero-laptop.mp4 (novo)  
**Impacto:** Baixo — apenas mudança de asset  
**Status:** ✅ Implementado

---

## 2026-08-24 | Corrigir Navegação do Carrossel (Indice-based)

**Motivo:** Setas de carrossel não funcionavam (conflito com scroll-snap)  
**Problema:** scrollBy() relativo brigava com o scroll-snap-type  
**Solução:** Reescrever com navegação por índice (scrollTo absoluto)  
**Impacto:** Alto — crítico para carrossel de Israel  
**Status:** ✅ Fixado e testado (desktop + mobile)

---

## 2026-08-24 | PhotoCarousel: Usar React Portal para Lightbox

**Motivo:** Lightbox ficava preso dentro do card (transform do `.reveal`)  
**Problema:** `position: fixed` relativo a transform do parent  
**Solução:** `createPortal()` renderiza lightbox direto no body  
**Impacto:** Crítico para experiência de visualização de fotos  
**Status:** ✅ Implementado (lightbox agora cobre tela inteira)

---

## 2026-08-24 | Adicionar Case FAAP + Articulando Juliana Sandes

**Motivo:** Destacar série de 3 VTs + incluir 2 fotos de apoio  
**Impacto:** Médio — novo bloco de destaque dentro da Experience FAAP  
**Escopo:** 
- 3 VTs YouTube embedded (grid 3 cols / coluna no mobile)
- 2 fotos horizontais de apoio
- Título, subtítulo, créditos

**Estrutura:** Novo campo `highlight` em item FAAP  
**Status:** ✅ Implementado e testado

---

## 2026-08-24 | Lifehouse Church: Media Director + Galeria

**Motivo:** Organizar experiência Lifehouse com título correto + 7 fotos  
**Impacto:** Médio — alteração em item existente  
**Mudanças:**
- Cargo: "Audiovisual & Mídia" → "Media Director"
- Descrição: longa → curta e direto ("Media, vídeo, produção...")
- Adicionar gallery[] com PhotoCarousel

**Status:** ✅ Implementado e testado (setas + lightbox funcionam)

---

## 2026-08-24 | min-width: 0 em .experience__content

**Motivo:** Carrossel não podia fazer overflow (grid item auto-shrink)  
**Problema:** grid template tinha min-width: auto implícito no children  
**Solução:** Adicionar `min-width: 0` ao `.experience__content`  
**Impacto:** Crítico para carrossels funcionar com overflow  
**Status:** ✅ Fixado (CSS one-liner)

---

## 2026-08-25 | Implementar Sistema de Memória Local (/memory)

**Motivo:** Base de conhecimento persistente, documentação compartilhada  
**Impacto:** Estrutural — organiza conhecimento do projeto  
**Escopo:** 11 arquivos MD + 1 INDEX  
**Conteúdo:**
- project.md (objetivo, techs, arquitetura)
- branding.md (posicionamento, identidade)
- design.md (tokens, tipografia, componentes)
- experiences.md (todas as experiências)
- portfolio.md (filosofia do site)
- prompts.md (workflows salvos)
- decisions.md (histórico de decisões)
- roadmap.md (futuro planejado)
- changelog.md (histórico de mudanças)
- assets.md (organização de mídia)
- rules.md (padrões gerais)

**Regras:**
- Flexibilidade: mudanças do usuário têm prioridade
- Auto-update: novos cases → atualizar experiences + assets + changelog
- Única fonte verdadeira: memória > código

**Status:** ✅ Implementado

---

**Total de decisões registradas:** 12  
**Status geral:** ✅ Todas implementadas  
**Última atualização:** 2026-08-25
