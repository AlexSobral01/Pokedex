# 🧠 Pokédex com Next.js + PokéAPI

Seja bem-vindo(a) ao meu projeto de **Pokédex**, feito com muito carinho para fãs de Pokémon!  
Este projeto foi desenvolvido com **Next.js**, consumindo dados diretamente da **[PokéAPI](https://pokeapi.co/)** para criar uma experiência divertida de busca e visualização de Pokémons.

---

## 🚀 Funcionalidades

- 🔍 Busca dinâmica por Pokémon conforme você digita
- 📋 Listagem dos primeiros 100 Pokémons com imagens e nomes
- 📄 Página individual para cada Pokémon (em progresso)
- ⚡ Interface rápida com renderização no lado do servidor (SSR)
- 🌐 Uso inteligente de `use client` apenas onde é necessário

---

## 🛠️ Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokéAPI](https://pokeapi.co/)

---

## 📁 Estrutura do Projeto

📦 app
┣ 📜 page.tsx # Página principal
┣ 📂 components
┃ ┣ 📜 RenderPokemon.tsx # Renderiza os cards dos Pokémons
┃ ┗ 📜 SearchPokemon.tsx # Input de busca

yaml
Copiar
Editar

---

## 🧪 Como rodar o projeto localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/pokedex-app.git

# 2. Acesse a pasta
cd pokedex-app

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador:
http://localhost:3000
💡 O que aprendi com esse projeto
Consumo de APIs REST com Axios e TypeScript

Prática com renderização assíncrona no Next.js

Uso de Suspense para loading em Server Components

Boas práticas de separação entre client/server

⚠️ Observações
Este projeto começou quando o Next ainda usava o pages/ para rotas.
Recentemente, atualizei para a nova arquitetura com App Router (app/), utilizando boas práticas modernas.

💬 Não é um projeto profissional de portfólio, mas foi super divertido trabalhar com ele — e espero que você também curta explorar!

📸 Preview
![Pokedex Banner](https://github.com/alexsobraldev/pokedex-project/raw/main/public/image.png)
