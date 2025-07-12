# 🧮 Calculadora | OFS

<div align="center">
  <img src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752274561/Canva_SEO_calculator_wkeqbs.png" alt="Calculator Banner" width="100%">
</div>

<div align="center">

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=plastic&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=plastic&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.5-38B2AC?style=plastic&logo=tailwind-css)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=plastic&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ESLint](https://img.shields.io/badge/ESLint-9.25.0-4B32C3?style=plastic&logo=eslint)](https://eslint.org/)

</div>

---

## 📋 Índice

- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏗️ Arquitetura e Padrões](#️-arquitetura-e-padrões)
- [⚙️ Configuração e Instalação](#️-configuração-e-instalação)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [👨‍💻 Desenvolvedor](#-desenvolvedor)

---

## 📖 Sobre o Projeto

Uma calculadora web moderna desenvolvida com React e TailwindCSS, oferecendo uma interface elegante e funcional para cálculos matemáticos. O projeto inclui histórico de operações persistente e design responsivo.

### ✨ Funcionalidades

- 🧮 Operações matemáticas básicas
- 📊 Histórico de operações
- 💾 Persistência de dados no localStorage
- 📱 Design responsivo
- 🎨 Interface moderna com gradientes

---

## 🚀 Tecnologias Utilizadas

### **Frontend**

- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 6.3.5** - Build tool e dev server
- **TailwindCSS 4.1.5** - Framework CSS utilitário
- **JavaScript ES6+** - Linguagem de programação

### **Ferramentas de Desenvolvimento**

- **ESLint 9.25.0** - Linter para JavaScript
- **SWC** - Compilador JavaScript rápido
- **Bun** - Runtime JavaScript e package manager

---

## 🏗️ Arquitetura e Padrões

### **Padrões de Projeto**

- **Context API** - Gerenciamento de estado global
- **Component-Based Architecture** - Componentes reutilizáveis
- **Custom Hooks** - Lógica reutilizável
- **CSS-in-JS com TailwindCSS** - Estilização moderna

### **Estrutura de Componentes**

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Calculator.jsx   # Componente principal da calculadora
│   ├── Button.jsx       # Botões da calculadora
│   ├── Display.jsx      # Display de resultados
│   └── ...
├── context/             # Context API
│   └── CalculatorContext.jsx
├── hooks/               # Custom hooks
└── constants/           # Constantes do projeto
```

---

## ⚙️ Configuração e Instalação

### **Pré-requisitos**

- Node.js (versão 18 ou superior)
- Bun (recomendado) ou npm

### **Instalação**

1. **Clone o repositório**

```bash
git clone https://github.com/emmanuelmarcosdeoliveira/calculator
cd calculator
```

2. **Instale as dependências**

```bash
# Com Bun (recomendado)
bun install

# Ou com npm
npm install
```

3. **Execute o projeto**

```bash
# Desenvolvimento
bun dev
# ou
npm run dev

# Build para produção
bun build
# ou
npm run build
```

4. **Acesse o projeto**

```
http://localhost:5173
```

### **Scripts Disponíveis**

- `dev` - Inicia o servidor de desenvolvimento
- `build` - Gera build de produção
- `preview` - Visualiza o build de produção
- `lint` - Executa o linter

---

## 📁 Estrutura do Projeto

```
calculator/
├── src/
│   ├── assets/          # Recursos estáticos
│   ├── components/      # Componentes React
│   ├── context/         # Context API
│   ├── hooks/           # Custom hooks
│   ├── constants/       # Constantes
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── public/              # Arquivos públicos
├── index.html           # HTML principal
├── vite.config.js       # Configuração do Vite
├── package.json         # Dependências e scripts
└── README.md           # Documentação
```

---

## 👨‍💻 Desenvolvedor

**Desenvolvido por Emmanuel Oliveira | OFS**

- 🚀 Desenvolvedor Full Stack
- 💻 Especialista em React e JavaScript
- 🎨 Apaixonado por UI/UX
- 📚 Sempre em busca de aprendizado

---

<div align="center">

**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

</div>
