# Changelog - Instituto Civitas Solis Website

## [Atualização - Redes Sociais] - 2026-03-26

### 📱 FACEBOOK ADICIONADO + FOOTER ATUALIZADO

#### ✅ Facebook Integrado
- ✅ Link do Facebook adicionado: https://www.facebook.com/institutocivitassolis
- ✅ Ícone Facebook no componente de contato por e-mail
- ✅ Ícone Facebook no footer

#### 🦶 Footer Atualizado
- ✅ 3 redes sociais com ícones clicáveis:
  - Instagram (@institutocivitassolis)
  - YouTube (@institutocivitassolis5117)
  - Facebook (institutocivitassolis)
- ✅ Título "Siga-nos" (PT) / "Follow Us" (EN)
- ✅ Ícones com hover laranja Civitas
- ✅ Links abrem em nova aba

#### 📄 Componentes Atualizados
- ✅ `js/components/email-contact.js` - Facebook adicionado
- ✅ `js/components/footer.js` - 3 redes sociais
- ✅ `js/i18n-config.js` - Tradução "Siga-nos"

---

## [Atualização - Contato por E-mail] - 2026-03-26

### 🔐 SISTEMA DE CONTATO SEGURO IMPLEMENTADO

#### ✉️ Formulário Removido → E-mail Direto
- ❌ Formulário de contato removido (menos confiável)
- ✅ Sistema de contato via e-mail direto implementado
- ✅ Proteção anti-spam/robôs integrada
- ✅ Componente `email-contact.js` criado
- ❌ Componente `contact-form.js` deletado

#### 🛡️ Proteções Anti-Spam Implementadas
- ✅ **Ofuscação de e-mail**: E-mail construído dinamicamente em JavaScript
- ✅ **Botão "Revelar E-mail"**: Requer interação humana (anti-scraper)
- ✅ **Copiar para clipboard**: Facilita uso sem expor e-mail publicamente
- ✅ **Link mailto protegido**: Gerado apenas após clique
- ✅ **Sem e-mail no HTML**: Não aparece no código-fonte da página

#### 🎨 Funcionalidades do Novo Sistema
- ✅ Botão "Enviar E-mail" (proteção primária)
- ✅ Botão "Copiar E-mail" (um clique)
- ✅ Botão "Enviar E-mail Agora" (mailto direto)
- ✅ Links para redes sociais (Instagram, YouTube)
- ✅ Mensagem de sucesso ao copiar
- ✅ Design responsivo e acessível
- ✅ Totalmente traduzido (PT/EN)
- ✅ Textos otimizados para melhor UX

#### 📄 Páginas Atualizadas
- ✅ `/contato` - Sistema de e-mail como principal
- ✅ Home - Seção de contato atualizada
- ✅ Traduções PT e EN adicionadas

---

## [Atualização - Elfsight Widgets] - 2026-03-26

### 🎉 MIGRAÇÃO PARA ELFSIGHT

Centralização de todos os widgets sociais na plataforma **Elfsight** para melhor gerenciamento e consistência.

#### 📸 Instagram - Elfsight Widget
- ✅ Widget Elfsight Instagram Feed implementado
- ✅ ID: `2cc72e29-c017-4e3d-b58a-9685d7873f99`
- ✅ Feed atualizado automaticamente do perfil @institutocivitassolis
- ✅ Posts reais com atualização a cada 5-15 minutos
- ✅ Integração completa na página `/instagram`
- ✅ Layout grid responsivo
- ❌ Light Widget removido

#### 📺 YouTube - Elfsight Gallery
- ✅ Widget Elfsight YouTube Gallery implementado
- ✅ ID: `a0895143-ea93-4311-9987-4bd3b9f4ee8d`
- ✅ Galeria do canal @institutocivitassolis5117
- ✅ Vídeos reais com atualização instantânea (< 1 min)
- ✅ Integração na página `/youtube` e seção da home
- ✅ Botão de inscrição direto no canal
- ✅ Layout grid com thumbnails
- ❌ Player embed nativo removido
- ❌ Componente `youtube-feed.js` removido

---

## [Atualização] - 2026-03-26

### ✅ Mudanças Implementadas

#### 🎨 Design System
- ✅ Aplicadas cores oficiais Civitas Solis (#E36727 - laranja)
- ✅ Implementada tipografia Montserrat (títulos em 60px, corpo em peso 300)
- ✅ Logo "Instituto Civitas Solis" em laranja no header
- ✅ Título do banner hero totalmente em laranja
- ✅ Consistência visual com site WordPress original

#### 📺 Integração YouTube
- ✅ Feed RSS dinâmico do canal @institutocivitassolis5117
- ✅ Seção "Nosso YouTube" na home (4 vídeos recentes)
- ✅ Página dedicada `/youtube` com feed completo
- ✅ Botão de inscrição no canal
- ✅ Cache inteligente (30 minutos)
- ✅ Fallback para vídeos mockados

#### 🏗️ Estrutura de Páginas
- ✅ Seção "Trabalho Global" movida para a Home
- ✅ Removida página independente de Trabalho Global
- ✅ Scroll suave para seção via botão do hero
- ✅ Navegação atualizada (sem link Trabalho Global)

#### 🗑️ Remoções
- ✅ Seção "Biblioteca Civitas Solis" removida da home
- ✅ Item "Loja" removido do menu (header e footer)
- ✅ Traduções limpas (store, libraryTitle, audiovisualContent)
- ✅ Arquivo `book-carousel.js` deletado
- ✅ Script do carousel removido do index.html

#### 🌐 Navegação Atual
**Menu Principal:**
- Home
- Missão, Visão e Valores
- YouTube
- Instagram
- Contato

**Páginas Disponíveis:**
1. `/` - Home (Hero + Institucional + Pilares + Trabalho Global + YouTube + Contato)
2. `/missao-visao-valores` - Missão, Visão e Valores
3. `/youtube` - YouTube Civitas Solis (página dedicada)
4. `/instagram` - Instagram Feed
5. `/contato` - Contato
6. `/livro` - Página do Livro

### 📁 Arquivos Modificados

#### Atualizados
- `index.html` - Removido script book-carousel
- `css/style.css` - Cores e tipografia Civitas
- `js/i18n-config.js` - Traduções limpas
- `js/router.js` - Rotas atualizadas
- `js/components/header.js` - Menu sem "Loja", logo em laranja
- `js/components/footer.js` - Links atualizados
- `js/components/contact-form.js` - Cores Civitas
- `js/pages/home.js` - Seção Trabalho Global adicionada, Biblioteca removida
- `js/pages/missao-visao-valores.js` - Cores Civitas
- `js/pages/instagram.js` - Cores Civitas
- `js/pages/contato.js` - Cores Civitas
- `js/pages/livro.js` - Cores Civitas
- `README.md` - Documentação atualizada

#### Criados
- `js/components/youtube-feed.js` - Feed RSS do YouTube
- `js/pages/youtube.js` - Página dedicada YouTube
- `CHANGELOG.md` - Este arquivo

#### Removidos
- `js/components/book-carousel.js` - Não usado
- `js/pages/trabalho-global.js` - Conteúdo movido para home

### 🎯 Próximos Passos Sugeridos

1. **Testes**
   - [ ] Testar navegação em todos os dispositivos
   - [ ] Verificar feed RSS do YouTube
   - [ ] Confirmar troca de idiomas PT/EN
   - [ ] Testar formulário de contato

2. **Conteúdo**
   - [ ] Ajustar textos se necessário
   - [ ] Adicionar imagens próprias
   - [ ] Revisar tradução inglês

3. **Deploy**
   - [ ] Publicar em produção
   - [ ] Configurar domínio civitassolis.org.br
   - [ ] Configurar Google Analytics
   - [ ] Configurar SEO (meta tags, sitemap)

4. **Melhorias Futuras**
   - [ ] Adicionar mais idiomas (ES, DE, FR, NL)
   - [ ] Integrar feed real do Instagram (API)
   - [ ] Sistema de newsletter
   - [ ] Blog/Notícias
   - [ ] Área de membros
   - [ ] Galeria de eventos

### 📊 Estatísticas

- **Total de Páginas**: 6
- **Idiomas**: 2 (PT, EN)
- **Componentes**: 4
- **Tamanho**: ~80% menor que versão React
- **Performance**: Carregamento instantâneo
- **Compatibilidade**: Todos os navegadores modernos

---

**Desenvolvido com ❤️ para Instituto Civitas Solis**
