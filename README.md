# ⚡ React + TypeScript + Vite

Este repositório contém um projeto frontend utilizando React com TypeScript e Vite. Siga os passos abaixo para configurar e executar o projeto corretamente.

## 📌 Requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

## 📥 Instalação

1. Clone este repositório:

   ```sh
   git clone https://github.com/danyllo-aniceto/investment.git
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:
   ```sh
   yarn install
   ```
   ou
   ```sh
   npm install
   ```

## ⚙️ Configuração

1. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:
   ```sh
   cp .env.example .env
   ```
   **Exemplo de `.env`**:
   ```sh
   VITE_API_URL=http://localhost:4000
   ```

## ▶️ Executando o Projeto

Para iniciar a aplicação em modo de desenvolvimento, execute:

```sh
yarn dev
```

ou

```sh
npm run dev
```

A aplicação estará rodando em `http://localhost:5173` (ou na porta definida no `.env`).

## 🚀 Build para Produção

Para gerar uma versão otimizada do projeto, execute:

```sh
yarn build
```

ou

```sh
npm run build
```

Os arquivos gerados estarão na pasta `dist/`.

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e contribuir! 🎉
