# 🎯 Portfólio - Leandro Feder

Um portfólio profissional, moderno e responsivo criado com HTML, CSS e JavaScript puro. Totalmente customizável e pronto para hospedar no GitHub Pages.

## ✨ Características

- **Design Moderno**: UI limpa com gradientes e animações suaves
- **Responsivo**: Totalmente adaptado para dispositivos móveis, tablets e desktops
- **Multilíngue**: Suporte para Português (PT-BR), Inglês (EN) e Espanhol (ES)
- **Performance**: Sem dependências externas, apenas HTML, CSS e JavaScript puro
- **Acessibilidade**: Estrutura semântica e navegação intuitiva
- **Temas Escuros**: Design moderno com paleta de cores profissional
- **Animações**: Transições suaves e efeitos de scroll

## 🚀 Começando

### Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/leandrofeder/leandrofeder.git
cd leandrofeder
```

2. Abra o arquivo `index.html` no seu navegador:
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

Ou use um servidor local como:
```bash
# Python 3
python -m http.server 8000

# Node.js (se tiver http-server instalado)
npx http-server

# PHP
php -S localhost:8000
```

## 📝 Personalização

### 1. Atualize suas informações

Edite o arquivo `index.html` e procure pelas seções correspondentes:

- **Nome e Título**: Procure por `<h1>` na seção Hero
- **Descrição**: Atualize `hero.description` nas traduções
- **Experiências**: Modifique as cards de experiência na seção Experience
- **Habilidades**: Adicione/remova skills na seção Skills
- **Links de Contato**: Atualize LinkedIn, GitHub e Email na seção Contact

### 2. Atualize as traduções

Edite o arquivo `script.js` e procure por `const translations`. Cada idioma tem uma entrada que pode ser atualizada:

```javascript
translations = {
    'pt-BR': { ... },
    'en': { ... },
    'es': { ... }
}
```

### 3. Personalizar cores

No arquivo `styles.css`, modifique as variáveis CSS no `:root`:

```css
:root {
    --primary-color: #0ea5e9;      /* Azul principal */
    --secondary-color: #f59e0b;    /* Cor secundária */
    --bg-primary: #0f172a;         /* Fundo primário */
    --accent: #10b981;             /* Cor de destaque */
    /* ... outras cores ... */
}
```

## 🌐 Hospedando no GitHub Pages

### Passo 1: Prepare o repositório

1. Se ainda não tem um repositório GitHub chamado `leandrofeder.github.io`, crie um
2. Clone ou reinicialize seu repositório local

### Passo 2: Configure para GitHub Pages

O portfólio já está pronto! Basta:

1. Faça push dos arquivos para o repositório `leandrofeder.github.io`:
```bash
git add .
git commit -m "Portfólio inicial"
git push origin main
```

2. Vá para as configurações do repositório (Settings > Pages)
3. Certifique-se de que "Source" está configurado para `main`
4. Aguarde alguns minutos

### Passo 3: Acesse seu portfólio

Seu portfólio estará disponível em: `https://leandrofeder.github.io`

> **Nota**: Se quiser usar um domínio personalizado:
> 1. Configure um CNAME no seu registrador de domínio
> 2. Adicione um arquivo `CNAME` na raiz do repositório com seu domínio
> 3. Vá para Settings > Pages e configure o domínio customizado

## 📁 Estrutura do Projeto

```
leandrofeder/
├── index.html          # Arquivo principal
├── styles.css          # Estilos e responsividade
├── script.js          # Scripts e traduções
└── README.md          # Este arquivo
```

## 🎨 Seções Disponíveis

- **Hero**: Introdução com CTA (Call to Action)
- **About**: Informações pessoais e estatísticas
- **Experience**: Timeline de experiências profissionais
- **Skills**: Habilidades técnicas organizadas por categoria
- **Contact**: Links de contato e redes sociais

## 🌍 Suporte de Idiomas

O portfólio suporta 3 idiomas com seletor no topo da página:
- 🇧🇷 Português (PT-BR)
- 🇺🇸 English (EN)
- 🇪🇸 Español (ES)

A seleção é salva no localStorage do navegador.

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints em:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 🔧 Personalizações Avançadas

### Adicionar novas seções

Crie uma nova seção em `index.html`:

```html
<section id="minhasecao" class="minhasecao">
    <div class="container">
        <h2 data-i18n="minhasecao.title">Minha Seção</h2>
        <!-- Seu conteúdo -->
    </div>
</section>
```

Adicione os estilos em `styles.css`:

```css
.minhasecao {
    padding: 80px 0;
    background: var(--bg-secondary);
}
```

### Adicionar novo idioma

1. Adicione uma nova entrada em `translations`:
```javascript
'pt-PT': {
    'title': 'Portfólio - Leandro Feder',
    // ... mais traduções
}
```

2. Adicione um novo botão de idioma em `index.html`:
```html
<button class="lang-btn" data-lang="pt-PT">PT-PT</button>
```

## 🎯 Dicas de SEO

1. Atualize a tag `<meta name="description">` em `index.html`
2. Adicione palavras-chave relevantes
3. Mantenha a estrutura semântica
4. Otimize as imagens (se adicionar)

## 🐛 Solução de Problemas

### O portfólio não aparece no GitHub Pages?
- Aguarde 5-10 minutos (tempo de deploy)
- Verifique se o repositório é público
- Verifique as configurações em Settings > Pages

### As traduções não estão funcionando?
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique o console (F12 > Console) para erros
- Certifique-se de que as chaves em `data-i18n` existem em `translations`

### O layout quebrou no mobile?
- Verifique se a viewport meta tag está em `<head>`
- Limpe o cache do navegador
- Teste em diferentes navegadores

## 📄 Licença

Código aberto e livre para usar e modificar.

## 🤝 Contribuições

Para melhorias e sugestões, abra uma issue ou envie um pull request!

---

**Criado com ❤️ utilizando HTML, CSS e JavaScript puro**
