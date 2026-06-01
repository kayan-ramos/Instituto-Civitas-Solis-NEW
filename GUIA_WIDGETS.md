# Guia de Configuração dos Widgets Elfsight

## 🎯 Visão Geral

O site do Instituto Civitas Solis utiliza **Elfsight** para exibir feeds reais do Instagram e YouTube, atualizados automaticamente.

---

## 📸 Instagram Feed - Elfsight

### Widget Atual:
- **ID do Widget**: `2cc72e29-c017-4e3d-b58a-9685d7873f99`
- **Perfil**: @institutocivitassolis
- **Localização**: `js/pages/instagram.js` (linha 42)

### Código Implementado:
```html
<div class="elfsight-app-2cc72e29-c017-4e3d-b58a-9685d7873f99" data-elfsight-app-lazy></div>
```

### ⚙️ Como Editar o Widget:

1. **Acesse sua conta Elfsight**: https://elfsight.com/
2. **Faça login** com suas credenciais
3. **Acesse "My Widgets"** no painel
4. **Encontre o widget Instagram Feed** (ID: `2cc72e29-c017-4e3d-b58a-9685d7873f99`)
5. **Clique em "Edit"**

### 🎨 Opções de Personalização:

#### Layout:
- **Grid** (atual) - Grade de posts
- **Carousel** - Carrossel deslizante
- **Slider** - Slider com navegação

#### Número de Posts:
- Mínimo: 6
- Recomendado: 9-12
- Máximo: 30

#### Tema:
- **Light** (atual)
- Dark
- Custom (cores personalizadas)

#### Configurações Avançadas:
- Mostrar/ocultar likes
- Mostrar/ocultar comentários
- Mostrar/ocultar legenda
- Filtrar por hashtag
- Popup ao clicar

### 🔄 Atualização Automática:
- ✅ Posts novos aparecem automaticamente
- ⏱️ Delay: 5-15 minutos após publicação
- 🔄 Sincronização: A cada hora

---

## 📺 YouTube Gallery - Elfsight

### Widget Atual:
- **ID do Widget**: `a0895143-ea93-4311-9987-4bd3b9f4ee8d`
- **Canal**: @institutocivitassolis5117
- **Localizações**: 
  - Página `/youtube`: `js/pages/youtube.js` (linha 67)
  - Home: `js/pages/home.js` (linha 229)

### Código Implementado:
```html
<div class="elfsight-app-a0895143-ea93-4311-9987-4bd3b9f4ee8d" data-elfsight-app-lazy></div>
```

### ⚙️ Como Editar o Widget:

1. **Acesse sua conta Elfsight**: https://elfsight.com/
2. **Faça login** com suas credenciais
3. **Acesse "My Widgets"** no painel
4. **Encontre o widget YouTube Gallery** (ID: `a0895143-ea93-4311-9987-4bd3b9f4ee8d`)
5. **Clique em "Edit"**

### 🎨 Opções de Personalização:

#### Layout:
- **Grid** (atual) - Grade de vídeos
- **List** - Lista vertical
- **Slider** - Carrossel horizontal

#### Número de Vídeos:
- Mínimo: 3
- Recomendado: 6-12
- Máximo: 50

#### Fonte dos Vídeos:
- **Channel** (atual) - Todos os vídeos do canal
- Playlist - Vídeos de uma playlist específica
- Search - Vídeos por palavra-chave

#### Player:
- Tamanho do thumbnail
- Autoplay: Sim/Não
- Mostrar/ocultar título
- Mostrar/ocultar descrição
- Mostrar/ocultar estatísticas (views, likes)

#### Configurações Avançadas:
- Ordenar por: Mais recentes / Mais populares / Aleatório
- Filtrar por data
- Modo popup ou embed inline

### 🔄 Atualização Automática:
- ✅ Vídeos novos aparecem instantaneamente
- ⏱️ Delay: < 1 minuto após publicação
- 🔄 Sincronização: Em tempo real

---

## 🛠️ Gerenciamento Centralizado

### Vantagens do Elfsight:

1. **Painel Único**: Gerencie Instagram e YouTube no mesmo lugar
2. **Sem Código**: Edite aparência sem mexer no site
3. **Analytics**: Veja estatísticas de visualizações e cliques
4. **Responsivo**: Funciona automaticamente em mobile
5. **Performance**: Lazy loading integrado

### Dashboard Elfsight:

**URL**: https://apps.elfsight.com/panel/

**Métricas Disponíveis**:
- Impressões (quantas vezes o widget foi visto)
- Cliques (interações com posts/vídeos)
- Taxa de engajamento
- Origem do tráfego

---

## 📋 Estrutura de Arquivos

```
Instituto-Civitas-Solis/
├── index.html                    ✅ Script Elfsight adicionado
├── js/
│   ├── pages/
│   │   ├── home.js              ✅ YouTube widget na home
│   │   ├── instagram.js         ✅ Instagram widget
│   │   └── youtube.js           ✅ YouTube widget página dedicada
│   └── components/
│       └── (youtube-feed.js)    ❌ REMOVIDO (não usado)
└── GUIA_WIDGETS.md              📖 Este arquivo
```

---

## 🚨 Solução de Problemas

### Widget não aparece:

**Causa**: Script não carregou
**Solução**:
1. Verifique se o script está no `<head>` do `index.html`:
   ```html
   <script src="https://elfsightcdn.com/platform.js" async></script>
   ```
2. Limpe o cache do navegador (Ctrl+Shift+R)
3. Aguarde 5-10 segundos para o widget carregar

### Widget mostra mensagem de erro:

**Causa**: Perfil privado ou ID inválido
**Solução**:
1. Confirme que os perfis são públicos:
   - Instagram: https://instagram.com/institutocivitassolis
   - YouTube: https://youtube.com/@institutocivitassolis5117
2. Verifique os IDs dos widgets no painel Elfsight
3. Regenere o widget se necessário

### Widget demora para carregar:

**Causa**: Muitos posts/vídeos configurados
**Solução**:
1. Reduza o número de itens para 6-9
2. Ative lazy loading (já ativado: `data-elfsight-app-lazy`)
3. Use grid em vez de carousel (mais leve)

### Posts/Vídeos não atualizam:

**Causa**: Cache do Elfsight
**Solução**:
1. Aguarde 15-30 minutos
2. Force atualização no painel Elfsight:
   - Acesse o widget
   - Clique em "Refresh Data"
3. Limpe cache do site

---

## 🎨 Personalização Avançada

### Cores Personalizadas (Instagram):

No editor Elfsight:
1. Vá em **Appearance** > **Colors**
2. Defina:
   - Background: `#FFFFFF` (branco)
   - Text: `#333333` (cinza escuro)
   - Links: `#E36727` (laranja Civitas)
   - Hover: `#d45a20` (laranja escuro)

### Botões Customizados (YouTube):

1. Vá em **Content** > **CTA Button**
2. Configure:
   - Texto: "Inscrever-se no Canal"
   - Link: `https://www.youtube.com/@institutocivitassolis5117?sub_confirmation=1`
   - Cor: `#FF0000` (vermelho YouTube)

---

## 📊 Planos Elfsight

### Plano Atual:
- **Free** - Widgets com marca d'água Elfsight

### Upgrade Recomendado:
- **Pro** ($9.99/mês)
  - Remove marca d'água
  - Estatísticas avançadas
  - Suporte prioritário
  - Widgets ilimitados

### Como fazer upgrade:
1. Acesse: https://elfsight.com/pricing/
2. Escolha o plano **Pro**
3. Após pagamento, widgets atualizam automaticamente (sem marca d'água)

---

## 🔐 Segurança

### API Keys:
- ❌ Não expor credenciais da conta
- ✅ IDs dos widgets são públicos (podem ficar no código)

### Autenticação:
- Widgets funcionam sem autenticação
- Perfis devem ser públicos

---

## 🎯 Próximos Passos

### Instagram:
- [ ] Considerar upgrade para remover marca d'água
- [ ] Criar filtro por hashtag (#civitassolis)
- [ ] Adicionar CTA customizado

### YouTube:
- [ ] Criar playlist com vídeos em destaque
- [ ] Adicionar descrição do canal
- [ ] Implementar analytics tracking

### Geral:
- [ ] Monitorar métricas no dashboard
- [ ] Testar performance em mobile
- [ ] Adicionar mais widgets (Facebook, Twitter)

---

## 📞 Suporte

**Elfsight Support**:
- Email: support@elfsight.com
- Chat: https://elfsight.com/ (canto inferior direito)
- Docs: https://help.elfsight.com/

**Desenvolvedor do Site**:
- Qualquer dúvida sobre implementação, consulte este guia ou a documentação do projeto.

---

**Desenvolvido com ❤️ para Instituto Civitas Solis**
