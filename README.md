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

## Contributors or owners

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png"><br>
<small>Emmanuel Oliveira</small>

developed by 💖 [Emmanuel Oliveira](https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit)<br>
&copy; Todos os Direitos Reservados

### Contribute to the projects

> Clique na seta abaixo e veja como você pode contribuir para o projeto

<details close>
<summary>Como fazer uma contribuição ao Projeto ?</summary>
 
 - Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.<br>
- Explore o código do projeto para entender sua estrutura e funcionamento.
<br>

**Faça um Fork**

- Crie uma cópia (fork) do repositório original em sua conta do GitHub.<br>

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

**Clone o Repositório**

Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

**Crie uma Nova Branch:**

- Crie uma nova branch para isolar suas alterações.<br>
- Isso facilita a organização do seu trabalho e a criação de pull requests.<br>

**Faça as Alterações:**

- Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.<br>

**Crie um Pull Request:**

- Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>
- Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.
  <br>

**Revise e Responda a Feedback:**

- Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

</details>

## Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/emmanuel-marcos-oliveira/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

<sub>😁Obrigado por chegar até aqui!<sub>

## License

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>
Released in 2025 This project is under the **MIT license**<br>
<br>

[`voltar ao topo`](#-calculadora--ofs)

<div align="center">

**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

</div>
