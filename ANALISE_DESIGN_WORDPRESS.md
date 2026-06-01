# 🎨 ANÁLISE COMPLETA - Site WordPress Atual
## Instituto Civitas Solis

**Data da Análise:** 20 de Fevereiro de 2026  
**Tema WordPress:** Mercycorp v4.5.6  
**Tipo:** Single Page Application  

---

## 📊 DESIGN SYSTEM EXTRAÍDO

### 🎨 **Paleta de Cores Identificada**

#### Cores Principais:
```css
/* COR PRIMÁRIA - Laranja Civitas Solis */
--cor-primaria: #E36727;      /* Laranja principal (hover, destaque) */
--cor-primaria-alt: #e46a29;  /* Laranja títulos de seção */

/* CORES DE TEXTO */
--texto-principal: #555555;    /* Texto body padrão */
--texto-escuro: #333333;       /* Títulos e destaques */
--texto-cinza: #999999;        /* Texto secundário, navegação */

/* CORES DE FUNDO */
--fundo-branco: #FFFFFF;       /* Fundo principal */
--fundo-escuro: #313131;       /* Header background */
--fundo-preto: #212121;        /* Elementos escuros */

/* CORES DE BORDAS */
--borda-escura: #353535;       /* Borda superior header */
--borda-media: #5a5a5a;        /* Sombras internas */
--borda-clara: #5f5f5f;        /* Separadores */
```

#### Resumo Visual:
- 🟠 **Laranja Civitas**: #E36727 (COR ASSINATURA)
- ⚫ **Cinza Escuro**: #333 - #555
- ⚪ **Branco**: #FFFFFF
- ⬛ **Preto**: #212121 - #313131

---

### 🔤 **Tipografia**

#### Família de Fontes:
```css
/* FONTE PRINCIPAL */
font-family: 'MuseoLight', Helvetica, Arial, sans-serif;

/* FONTE PARA NEGRITO/DESTAQUES */
font-family: 'MuseoBlack';

/* Fallbacks */
- Helvetica
- Arial  
- sans-serif
```

#### Hierarquia de Tamanhos:
```css
/* TÍTULOS */
h1 { font-size: 40px; }
h2 { font-size: 18px; }
h3 { font-size: 22px; }
h4 { font-size: 20px; }
h5 { font-size: 18px; }
h6 { font-size: 16px; }

/* ESPECIAIS */
.section-title { 
  font-size: 60px; 
  color: #e46a29; /* Laranja */
}

/* CORPO */
body { 
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
}
```

#### Características:
- ✅ **Museo Light** - Fonte principal (elegante, moderna)
- ✅ **Museo Black** - Para negritos e destaques
- ✅ Títulos de seção: **60px em laranja**
- ✅ Texto body: **16px, peso 300**
- ✅ Line-height: **24px** (confortável para leitura)

---

### 📐 **Espaçamentos e Layout**

#### Estrutura:
```css
/* HEADER */
- Padding top strip: 13px 0 25px 0
- Border-top: 4px solid (laranja?)
- Logo padding: 31px 0 0 0

/* NAVEGAÇÃO */
- Height: 59px
- Padding: 5px 0 0 0
```

#### Sistema de Grid:
```css
.element_size_100 { width: 100%; }
.element_size_75  { width: 75%; }
.element_size_50  { width: 50%; }
.element_size_25  { width: 25%; }
```

---

## 📄 ESTRUTURA DO SITE (Single Page)

### Baseado no screenshot PDF, o site atual possui:

#### 1. **Header**
- Logo Civitas Solis
- Navegação horizontal
- Seletor de idiomas
- Informações de contato/social

#### 2. **Seções Single Page**
(Ordem de aparição no scroll)
- Hero/Banner principal
- Sobre o Instituto
- Pilares/Atividades
- Trabalho Global
- Missão, Visão e Valores
- Galeria/Mídia
- Publicações/Livros
- Contato/Formulário
- Footer

#### 3. **Footer**
- Informações institucionais
- Links rápidos
- Redes sociais
- Copyright

---

## 🌐 MULTILÍNGUE

### Sistema Identificado:
```css
/* Seletor de idiomas no header */
header #lang_sel_list {
  float: left;
  margin-right: 16px;
}

/* Estilo dos botões de idioma */
header #lang_sel_list ul li a {
  font-size: 11px;
  color: #999999;
  background-color: #212121;
  border-left: 1px solid #1e1e1e;
}

/* Idioma ativo */
header #lang_sel_list ul li a.lang_sel_sel {
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}
```

### Características:
- Plugin de tradução WordPress (provavelmente WPML ou Polylang)
- Seletor com bandeiras
- Múltiplos idiomas disponíveis
- Visual integrado ao header escuro

---

## 🎯 ELEMENTOS VISUAIS ESPECÍFICOS

### Efeitos e Detalhes:

#### 1. **Header com Pattern**
```css
background: url(images/header-patren.png);
background-color: rgba(49,49,49,0.9);
```

#### 2. **Sombras**
```css
-moz-box-shadow: 0px 1px 0px #5a5a5a inset;
-webkit-box-shadow: 0px 1px 0px #5a5a5a inset;
box-shadow: 0px 1px 0px #5a5a5a inset;
```

#### 3. **Hover States**
```css
a:hover { 
  color: #E36727; /* Laranja */
  text-decoration: none; 
}
```

---

## ⚠️ PROBLEMAS IDENTIFICADOS (Não Replicar)

### ❌ Código Problemático:

1. **Reset Global Agressivo**
```css
* {
  padding: 0px;
  margin: 0px;
  font-weight: bold; /* ⚠️ PROBLEMA: Tudo em negrito */
}
```

2. **Responsividade**
- Provavelmente quebrada (como você mencionou)
- Não há media queries nas primeiras 400 linhas
- Layout fixo, não fluido

3. **Boas Práticas**
- Muitos !important
- Floats em excesso (desatualizado)
- Falta de flexbox/grid moderno

---

## ✅ O QUE APLICAR NO NOVO SITE

### 🎨 **Design Visual (MANTER)**

#### 1. Cores:
```css
/* Aplicar no novo site */
:root {
  /* Cores Civitas Solis */
  --orange-500: #E36727;  /* Substituir a atual */
  --orange-600: #e46a29;  /* Variação */
  
  /* Textos */
  --gray-900: #333333;
  --gray-700: #555555;
  --gray-500: #999999;
}
```

#### 2. Fontes:
- **Opção A:** Usar Museo via Google Fonts/Adobe Fonts
- **Opção B:** Fonte similar: Montserrat, Open Sans
- **Tamanhos:** Manter hierarquia (60px títulos, 16px body)

#### 3. Estilo Visual:
- Header escuro com padrão sutil
- Seções claras com fundo branco
- Laranja como cor de destaque/ação
- Títulos grandes (60px) em laranja

---

## 🚀 PLANO DE APLICAÇÃO

### FASE 1: Atualizar Cores (Imediato)

**Arquivo:** `css/style.css`

```css
/* Substituir variáveis de cor */

/* DE (atual): */
--orange-500: #e36727; (já similar)

/* AJUSTAR PARA: */
:root {
  --civitas-orange: #E36727;
  --civitas-orange-dark: #d45a20;
  --civitas-gray-dark: #333333;
  --civitas-gray-medium: #555555;
  --civitas-gray-light: #999999;
}
```

### FASE 2: Atualizar Tipografia

**Opções:**

#### A) Usar Museo (ideal):
```html
<!-- Adicionar no index.html -->
<link rel="stylesheet" href="https://use.typekit.net/xxxxxx.css">
```

#### B) Fonte Similar:
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&display=swap" rel="stylesheet">
```

```css
/* Aplicar */
body {
  font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
}

strong, .font-bold {
  font-weight: 900;
}
```

### FASE 3: Ajustar Componentes Visuais

1. **Header:**
   - Fundo escuro (#313131 com transparência)
   - Padrão sutil (opcional)
   - Logo com espaçamento similar

2. **Títulos de Seção:**
   - 60px (desktop)
   - Cor laranja #e46a29
   - Centralizado

3. **Links/Botões:**
   - Hover: laranja #E36727
   - Transitions suaves

4. **Seletor de Idiomas:**
   - Visual similar ao atual
   - Fundo escuro
   - Idioma ativo destacado

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### Design System:
- [ ] Atualizar paleta de cores
- [ ] Implementar fontes Museo ou similar
- [ ] Ajustar tamanhos de títulos
- [ ] Aplicar estilos de hover laranja

### Componentes:
- [ ] Header com fundo escuro
- [ ] Seletor de idiomas visual
- [ ] Títulos de seção 60px laranja
- [ ] Botões com cor Civitas
- [ ] Footer com estilo similar

### Conteúdo:
- [ ] Verificar todas as seções do single page
- [ ] Comparar com novo site multi-página
- [ ] Identificar gaps de conteúdo

---

## 🎯 PRÓXIMOS PASSOS

1. **Análise do PDF** - Vou examinar a captura de tela completa
2. **Mapear Conteúdo** - Listar todas as seções visíveis
3. **Criar CSS Atualizado** - Com as cores e fontes corretas
4. **Ajustar Componentes** - Aplicar o visual Civitas
5. **Testar Visualmente** - Comparar lado a lado

---

## 💡 OBSERVAÇÕES IMPORTANTES

### ✅ Manter:
- Cor laranja #E36727 (identidade)
- Fonte Museo (elegante, apropriada)
- Títulos grandes (60px)
- Header escuro
- Visual limpo e profissional

### ❌ NÃO Replicar:
- Responsividade quebrada
- Float layouts
- Reset CSS agressivo
- Código desatualizado
- Falta de acessibilidade

### ✨ Melhorar:
- Responsividade moderna (já temos)
- Flexbox/Grid (já temos)
- Acessibilidade (já temos)
- Performance (já temos)
- Código limpo (já temos)

---

**Resultado Final:**
🎨 Visual familiar do site atual  
+  
🚀 Estrutura moderna e funcional  
=  
✨ **Melhor dos dois mundos!**
