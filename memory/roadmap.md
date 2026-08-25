# 🗺️ Roadmap

Melhorias planejadas e possibilidades futuras para o portfólio.

---

## Curto Prazo (Próximas 2-4 semanas)

### ✅ In Progress / Planned

- [ ] **Testar responsividade completa**
  - Desktop (1280px+), tablet (768-1279px), mobile (320-768px)
  - Validar carrosseis, lightbox, navegação em todos os tamanhos
  - Testar swipe em mobile (Android Chrome, Safari iOS)
  
- [ ] **Deploy com Vercel** (confirmar pipeline)
  - Verificar build process
  - Testar performance (LCP, CLS, FID)
  - Confirm custom domain (se houver)

### 📋 Backlog (Não urgente)

- [ ] **Adicionar mais casos** (quando novos projetos forem aprovados)
  - Criar novo item em `data/experience.js`
  - Atualizar `memory/experiences.md`, `assets.md`, `changelog.md`
  - Seguir template: period/org/role + caseText[] + videoUrl + gallery[]

- [ ] **Expandir Lifehouse Church** (se houver mais fotos)
  - Atualmente: 7 fotos em carousel
  - Possível: adicionar vídeo resumido ou highlights

---

## Médio Prazo (1-3 meses)

- [ ] **Melhorar SEO**
  - Adicionar meta tags estruturadas (Open Graph, JSON-LD)
  - Descrições melhores para cada page/case
  - Slug URLs legíveis (se aplicável)

- [ ] **Analytics leve** (sem rastreamento pesado)
  - Considerar Plausible Analytics ou similar (simples, GDPR-compliant)
  - Rastrear: visitantes, casos mais vistos, origem do tráfego

- [ ] **Otimização de Performance**
  - Lazy loading de imagens (já tem `loading="lazy"`, confirmar)
  - Compressão de fotos (converter para WebP com fallback JPG)
  - Cache strategy para vídeos YouTube

- [ ] **Internacionalização (i18n)** — Português + Inglês?
  - Escopo: App.jsx com language selector + arquivo de translations
  - Prioridade: MÉDIA (depende de demanda de clientes internacionais)

---

## Longo Prazo (3+ meses)

- [ ] **Nova seção: Blog / Insights** (se André quiser compartilhar conhecimento)
  - Artigos sobre produção audiovisual, trends, case studies
  - Estrutura: Markdown → RSS
  - Prioridade: BAIXA (portfolio não é blog, confirmar alinhamento com filosofia)

- [ ] **Galeria de Cases Expandida**
  - Adicionar 3-5 novos cases com vídeos + fotos
  - Consolidar RedeTV! com exemplos visuais (se acesso ao arquivo)
  - Criar página dedicada a cada case (possível: /cases/gerando-talentos)

- [ ] **Sistema de Comentários / Feedback**
  - Integrar Giscus (GitHub-based, GDPR-friendly) ou simples e-mail
  - Permitir que visitantes deixem feedback
  - Prioridade: BAIXA

- [ ] **Teste de Acessibilidade**
  - Auditar WCAG 2.1 (A/AA)
  - Testar com screen readers
  - Validar keyboard navigation

- [ ] **PWA (Progressive Web App)**
  - Service Worker para offline access
  - Install prompt
  - Prioridade: MUITO BAIXA (portfolio não beneficia muito)

---

## Decisões Futuras

### Quando adicionar novo case:
1. Coletar vídeo (YouTube) + fotos (JPG, numeradas)
2. Criar pasta em `public/nome-case/`
3. Atualizar `data/experience.js`
4. Atualizar `memory/experiences.md`, `assets.md`, `changelog.md`
5. Testar desktop + mobile
6. Commit + deploy

### Sobre rebranding:
- Mudanças de nome/e-mail: atualizar em 6 arquivos chave (ver `memory/decisions.md`)
- Mudanças de cor: alterar tokens em `src/index.css` + atualizar `memory/branding.md`
- Mudanças de tipografia: alterar `src/index.css` + atualizar `memory/design.md`

### Sobre novas features:
- ❌ Evitar: analytics pesado, ads, popups, chat widgets
- ✅ Aceitar: melhorias em performance, acessibilidade, SEO
- ❓ Caso a caso: blog, i18n, novos componentes

---

## Métricas de Sucesso

- ✅ **Carregamento:** < 3s no desktop, < 5s no mobile (3G)
- ✅ **Responsividade:** 0 horizontal scrolls, texto legível em mobile
- ✅ **Interatividade:** Carrosseis suaves, lightbox sem lag, navegação sem atrito
- ✅ **Conteúdo:** Vídeos tocam, fotos são nítidas, texto é claro
- ✅ **Navegação:** Tudo achável em < 3 cliques

---

**Última atualização:** 2026-08-25  
**Próxima revisão:** 2026-09-25 (mensal)
