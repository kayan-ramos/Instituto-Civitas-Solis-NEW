# 🎨 GUIA DE IMPLEMENTAÇÃO - Design Civitas Solis
## Aplicando o Visual do Site Atual no Novo Site

---

## ✅ O QUE JÁ FOI FEITO

### 1. **Paleta de Cores Atualizada**
```css
/* Variáveis CSS criadas em css/style.css */
--civitas-orange: #E36727         /* Cor principal */
--civitas-orange-alt: #e46a29     /* Títulos de seção */
--civitas-orange-dark: #d45a20    /* Hover escuro */
--civitas-text-dark: #333333      /* Texto escuro */
--civitas-text-medium: #555555    /* Texto médio */
--civitas-text-light: #999999     /* Texto claro */
```

### 2. **Tailwind Config Customizado**
- Cores Civitas Orange adicionadas (50-900)
- Font family Montserrat configurada
- Disponível via classes: `bg-civitas-orange-500`, `text-civitas-orange-600`, etc.

### 3. **Tipografia Atualizada**
- Fonte Montserrat carregada (similar ao Museo)
- Pesos: 300 (light), 400 (regular), 700 (bold), 900 (black)
- Classes CSS criadas: `.font-museo-light`, `.font-museo-bold`, etc.
- Classe especial: `.section-title-civitas` (60px, laranja, centralizado)

---

## 🔄 PRÓXIMAS ALTERAÇÕES NECESSÁRIAS

### **FASE 1: Atualizar Cores nos Componentes**

#### A) **Substituir todas as cores laranja antigas:**

**Buscar e substituir:**
```
DE: #e36727 ou #f97316
PARA: #E36727 (ou usar classe Tailwind)
```

**Buscar:**
- `bg-orange-500` → `bg-civitas-orange-500`
- `text-orange-500` → `text-civitas-orange-500`
- `hover:bg-orange-600` → `hover:bg-civitas-orange-600`
- `border-orange-500` → `border-civitas-orange-500`

#### B) **Atualizar gradientes:**
```
DE: from-orange-50 to-orange-100
PARA: from-civitas-orange-50 to-civitas-orange-100

DE: from-orange-500 to-amber-600
PARA: from-civitas-orange-500 to-civitas-orange-600
```

---

### **FASE 2: Atualizar Tipografia**

#### A) **Substituir Georgia por Montserrat onde apropriado:**

**Manter Georgia:**
- ✅ Textos longos e parágrafos (melhor legibilidade)
- ✅ Citações
- ✅ Conteúdo institucional formal

**Usar Montserrat:**
- ✅ Títulos e headings
- ✅ Navegação
- ✅ Botões
- ✅ Labels e formulários

#### B) **Aplicar classes:**
```html
<!-- Títulos -->
<h1 class="font-museo-black">Título Principal</h1>
<h2 class="font-museo-bold">Subtítulo</h2>

<!-- Texto body -->
<p class="font-museo-light">Texto corpo</p>

<!-- Títulos de seção grandes -->
<h2 class="section-title-civitas">Nossa Organização</h2>
```

---

### **FASE 3: Ajustar Componentes Específicos**

#### **1. Header**

**Arquivo:** `js/components/header.js`

**Mudanças:**
```javascript
// Adicionar classes Montserrat
className="text-xl font-museo-bold text-gray-900"

// Atualizar cores dos links
className="text-gray-700 hover:text-civitas-orange-500"

// Menu ativo
className="text-civitas-orange-500 border-b-2 border-civitas-orange-500"
```

**Adicionar fundo escuro opcional (como WordPress):**
```javascript
// No header principal, trocar:
className="bg-white"
// Por:
className="bg-civitas-bg-dark bg-opacity-90"
```

#### **2. Footer**

**Arquivo:** `js/components/footer.js`

**Mudanças:**
```javascript
// Links hover
className="text-gray-400 hover:text-civitas-orange-500"

// Ícones
className="h-6 w-6 text-gray-400 hover:text-civitas-orange-500"
```

#### **3. Botões**

**Buscar em todos os arquivos:**
```javascript
// Botões primários
DE: "bg-orange-500 hover:bg-orange-600"
PARA: "bg-civitas-orange-500 hover:bg-civitas-orange-600"

// Botões secundários com borda
DE: "border-orange-300"
PARA: "border-civitas-orange-300"
```

#### **4. Formulário de Contato**

**Arquivo:** `js/components/contact-form.js`

**Mudanças:**
```javascript
// Focus rings
DE: "focus:ring-orange-500 focus:border-orange-500"
PARA: "focus:ring-civitas-orange-500 focus:border-civitas-orange-500"

// Botão submit
DE: "bg-orange-500 hover:bg-orange-600"
PARA: "bg-civitas-orange-500 hover:bg-civitas-orange-600"

// Mensagens de erro
className="text-red-600" // Manter
```

---

### **FASE 4: Atualizar Páginas**

#### **Padrão para Títulos de Seção:**
```html
<!-- EM TODAS AS PÁGINAS -->
<!-- DE: -->
<h2 class="text-4xl font-bold text-gray-900 serif">

<!-- PARA: -->
<h2 class="section-title-civitas font-museo-bold">
```

#### **Páginas a atualizar:**
1. `js/pages/home.js`
2. `js/pages/trabalho-global.js`
3. `js/pages/missao-visao-valores.js`
4. `js/pages/instagram.js`
5. `js/pages/contato.js`
6. `js/pages/livro.js`

---

### **FASE 5: Ícones e Elementos Visuais**

#### **Cores de Ícones:**
```javascript
// Ícones laranja
className="h-10 w-10 text-civitas-orange-500"

// Ícones em círculos laranja
className="bg-civitas-orange-100 ... text-civitas-orange-500"
className="group-hover:bg-civitas-orange-200"
```

---

## 🎯 IMPLEMENTAÇÃO PRÁTICA

### **Script de Busca e Substituição Global:**

```javascript
// Executar em todos os arquivos .js

// Cores
s/bg-orange-500/bg-civitas-orange-500/g
s/bg-orange-600/bg-civitas-orange-600/g
s/text-orange-500/text-civitas-orange-500/g
s/hover:bg-orange-600/hover:bg-civitas-orange-600/g
s/hover:text-orange-500/hover:text-civitas-orange-500/g
s/border-orange-500/border-civitas-orange-500/g
s/ring-orange-500/ring-civitas-orange-500/g

// Gradientes
s/from-orange-50 to-orange-100/from-civitas-orange-50 to-civitas-orange-100/g
s/from-amber-50 to-orange-100/from-civitas-orange-50 to-civitas-orange-100/g
s/from-orange-100 to-amber-100/from-civitas-orange-50 to-civitas-orange-100/g
```

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### Cores:
- [ ] Atualizar css/style.css (✅ FEITO)
- [ ] Atualizar index.html Tailwind config (✅ FEITO)
- [ ] Substituir cores em header.js
- [ ] Substituir cores em footer.js
- [ ] Substituir cores em contact-form.js
- [ ] Substituir cores em book-carousel.js
- [ ] Substituir cores em todas as páginas (6 arquivos)
- [ ] Testar todos os hovers

### Tipografia:
- [ ] Adicionar Montserrat (✅ FEITO)
- [ ] Criar classes CSS (✅ FEITO)
- [ ] Aplicar em títulos
- [ ] Aplicar em navegação
- [ ] Aplicar em botões
- [ ] Manter Georgia em textos longos
- [ ] Testar hierarquia visual

### Componentes:
- [ ] Header: cores + fontes
- [ ] Footer: cores + fontes
- [ ] Formulário: cores focus
- [ ] Botões: cores hover
- [ ] Carrossel: indicadores laranja
- [ ] Ícones: cores Civitas

### Páginas:
- [ ] Home
- [ ] Trabalho Global
- [ ] Missão, Visão e Valores
- [ ] Instagram
- [ ] Contato
- [ ] Livro

### Testes Visuais:
- [ ] Comparar lado a lado com site WordPress
- [ ] Verificar cores idênticas
- [ ] Verificar fontes similares
- [ ] Testar responsividade
- [ ] Testar todos os hover states

---

## 🎨 COMPARAÇÃO VISUAL

### Antes (Original):
```
Cor: #e36727 (inconsistente)
Fonte: Georgia (serifada)
Títulos: Variados
```

### Depois (Civitas):
```
Cor: #E36727 (consistente, identidade)
Fonte: Montserrat (moderna, similar Museo)
Títulos: 60px laranja centralizado
```

---

## 💡 DICAS DE IMPLEMENTAÇÃO

### 1. **Use Find & Replace Global:**
- VS Code: Ctrl+Shift+H
- Substituir em todos os arquivos .js

### 2. **Teste Incremental:**
- Faça uma página por vez
- Veja o resultado
- Ajuste se necessário

### 3. **Mantenha Backup:**
- Commit antes de fazer mudanças globais
- Fácil reverter se precisar

### 4. **Cores em CSS Variables:**
- Melhor usar `var(--civitas-orange)` em CSS
- Ou classes Tailwind em HTML

---

## 🚀 PRÓXIMO PASSO IMEDIATO

**Vou fazer as substituições automaticamente em todos os arquivos!**

Quer que eu:
1. ✅ Faça todas as substituições de cores agora?
2. ✅ Aplique as classes de tipografia?
3. ✅ Atualize todos os componentes?

**Confirma para eu continuar?** 😊
