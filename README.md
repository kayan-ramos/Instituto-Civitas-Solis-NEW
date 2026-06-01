# Instituto Civitas Solis - Website Institucional

Website institucional do Instituto Civitas Solis, uma organização filosófico-cultural dedicada ao desenvolvimento humano integral através da ciência, arte e espiritualidade.

## 🌟 Características Principais

### ✅ Funcionalidades Implementadas

- **Design Civitas Solis**: Cores (#E36727) e tipografia (Montserrat) do site original
- **Multi-idiomas (PT/EN)**: Sistema completo de internacionalização com i18next
- **🎉 Feed Instagram Real**: Widget Elfsight com posts atualizados automaticamente
- **🎉 Feed YouTube Real**: Widget Elfsight Gallery com vídeos do canal ao vivo
- **🔐 Contato Seguro**: Sistema de e-mail com proteção anti-spam/robôs
- **Widgets Centralizados**: Plataforma Elfsight para gerenciamento unificado
- **Design Responsivo**: Layout adaptativo para desktop, tablet e mobile
- **Single Page Application (SPA)**: Navegação sem recarregamento de página
- **Animações Suaves**: Transições e efeitos visuais modernos
- **Acessibilidade**: Seguindo boas práticas de WCAG
- **Performance**: Otimizado com lazy loading e widgets leves

### 📄 Páginas Disponíveis

1. **Home** (`/` ou `#/`)
   - Hero section com call-to-actions
   - Apresentação institucional
   - Pilares (Ciência, Arte, Espiritualidade)
   - **Seção Trabalho Global** (movida para a home)
   - **Seção YouTube** (4 vídeos mais recentes)
   - Formulário de contato

2. **Missão, Visão e Valores** (`#/missao-visao-valores`)
   - Nossa missão
   - Nossa visão
   - Sete valores fundamentais

3. **YouTube Civitas Solis** (`#/youtube`)
   - Feed RSS dinâmico do canal
   - Todos os vídeos publicados
   - Botão de inscrição no canal
   - Estatísticas e sobre o canal
   - Links diretos para YouTube

4. **Instagram** (`#/instagram`)
   - Feed do Instagram
   - Galeria de posts
   - Links para perfil oficial

5. **Contato** (`#/contato`)
   - Informações de contato
   - Formulário de contato com validação
   - Horário de funcionamento
   - Opções de conexão

6. **Livro** (`#/livro`)
   - Página dedicada ao livro "A Renascença Oculta"
   - Descrição detalhada
   - Depoimentos de leitores
   - Links para compra
   - Livros relacionados

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização customizada
- **Tailwind CSS**: Framework CSS via CDN
- **JavaScript ES6+**: Lógica da aplicação

### Bibliotecas
- **i18next**: Internacionalização (v23.7.6)
- **i18next-browser-languagedetector**: Detecção automática de idioma (v7.2.0)
- **Lucide Icons**: Ícones SVG modernos

### Recursos CDN
- Tailwind CSS (https://cdn.tailwindcss.com)
- i18next (https://cdn.jsdelivr.net/npm/i18next@23.7.6)
- Lucide Icons (https://unpkg.com/lucide@latest)

## 📁 Estrutura do Projeto

```
.
├── index.html                      # Página principal
├── css/
│   └── style.css                   # Estilos customizados
├── js/
│   ├── main.js                     # Entry point da aplicação
│   ├── router.js                   # Sistema de roteamento SPA
│   ├── i18n-config.js              # Configuração de internacionalização
│   ├── utils/
│   │   └── icons.js                # Utilitários para ícones
│   ├── components/
│   │   ├── header.js               # Componente de cabeçalho
│   │   ├── footer.js               # Componente de rodapé
│   │   └── email-contact.js        # Componente de contato por e-mail
│   └── pages/
│       ├── home.js                 # Página inicial (com Trabalho Global)
│       ├── missao-visao-valores.js # Página de missão/visão/valores
│       ├── youtube.js              # Página dedicada do YouTube
│       ├── instagram.js            # Página do Instagram
│       ├── contato.js              # Página de contato
│       └── livro.js                # Página do livro
└── README.md                       # Este arquivo
```

## 🚀 Como Usar

### Executar Localmente

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em um navegador moderno
3. Ou use um servidor HTTP local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server
   ```

### Navegação

- Acesse `http://localhost:8000` (se usando servidor local)
- Use o menu de navegação no topo
- Alterne entre idiomas usando o seletor de idiomas
- Em mobile, use o menu hambúrguer

## 🌐 Internacionalização

O site suporta dois idiomas:
- **Português (PT)** - Idioma padrão
- **English (EN)**

A preferência de idioma é:
1. Salva no localStorage
2. Detectada automaticamente do navegador
3. Pode ser alterada pelo usuário a qualquer momento

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ♿ Acessibilidade

Implementações de acessibilidade:
- Estrutura HTML semântica
- Labels ARIA apropriados
- Navegação por teclado
- Contraste adequado de cores
- Textos alternativos em imagens
- Focus visível em elementos interativos

## 🎨 Design

### Cores Principais
- **Laranja**: `#e36727` (Primary)
- **Âmbar**: `#f97316` (Secondary)
- **Cinza**: Escala de tons para textos e fundos
- **Branco**: `#ffffff` (Background)

### Tipografia
- **Font Principal**: Georgia (serif)
- **Tamanhos**: Escala responsiva de 14px a 72px

## 🔄 Funcionalidades Futuras (Sugestões)

### Curto Prazo
- [ ] Integração com API real de formulário de contato
- [ ] Embed real do Instagram feed
- [ ] Galeria de vídeos funcional
- [ ] Sistema de busca
- [ ] Newsletter signup

### Médio Prazo
- [ ] Blog/Notícias
- [ ] Área de membros
- [ ] Calendário de eventos
- [ ] Loja online integrada
- [ ] Sistema de doações

### Longo Prazo
- [ ] Progressive Web App (PWA)
- [ ] Modo escuro
- [ ] Chat ao vivo
- [ ] Plataforma de cursos online
- [ ] Comunidade/Fórum

## 📊 Performance

- **Otimizações Implementadas**:
  - Lazy loading de imagens
  - CSS e JS minificados (via CDN)
  - Uso de CDNs para bibliotecas
  - Animações otimizadas com CSS
  - Scroll suave nativo

## 🔒 Segurança

- Formulário com validação client-side
- Links externos com `rel="noopener noreferrer"`
- Sem dependências de backend para funcionamento básico

## 📞 Contato

- **Email**: contato@civitassolis.org.br
- **Instagram**: [@institutocivitassolis](https://www.instagram.com/institutocivitassolis/)
- **Loja**: [loja.civitassolis.org.br](http://loja.civitassolis.org.br)

## 📝 Notas de Desenvolvimento

### Conversão de React para Vanilla JS

Este projeto foi convertido de React/TypeScript para HTML/CSS/JavaScript puro mantendo:
- ✅ Todas as funcionalidades originais
- ✅ Design e layout idênticos
- ✅ Sistema de internacionalização
- ✅ Roteamento SPA
- ✅ Componentes reutilizáveis
- ✅ Performance otimizada

### Diferenças Principais
- Sem necessidade de build/compilação
- Sem dependências Node.js
- Deploy instantâneo
- Compatibilidade universal
- Mais leve e rápido

## 📄 Licença

© 2025 Instituto Civitas Solis. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para promover filosofia, cultura e espiritualidade**
