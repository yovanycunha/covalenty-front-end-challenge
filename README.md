# Catálogo de Produtos

Aplicação referente ao desafio da Covalenty para a vaga de desenvolvedor front end.

## 🚀 Funcionalidades

- **Listagem de Produtos**: Navegue por um catálogo abrangente de produtos com layout responsivo em cards
- **Detalhes do Produto**: Visualize informações detalhadas sobre produtos individuais, incluindo imagens, descrições e preços
- **Gerenciamento de Estado**: Estado global com Redux para rastreamento de produtos selecionados
- **Busca de Dados**: Chamadas de API otimizadas com React Query para cache e tratamento de erros
- **Design Responsivo**: Design mobile-first com Tailwind CSS
- **Tratamento de Erros**: Estados de erro elegantes e indicadores de carregamento
- **Testes**: Cobertura abrangente de testes com Vitest e React Testing Library

## 🛠️ Desenvolvimento Local

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd covalenty-front-end-challenge
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Constrói a aplicação para produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o ESLint
- `npm run test` - Executa os testes com Vitest
- `npm run test:coverage` - Executa os testes com relatório de cobertura

## 🏗️ Stack de Tecnologias

### Framework Principal
- **Next.js 15.5.0** - Framework React com renderização server-side e roteamento
- **React 19.1.0** - Biblioteca para construção de interfaces de usuário
- **TypeScript** - Verificação de tipos estáticos

### Gerenciamento de Estado e Busca de Dados
- **Redux Toolkit** - Container de estado previsível para aplicações JavaScript
- **React Redux** - Bindings oficiais do React para Redux
- **TanStack Query (React Query)** - Biblioteca para busca e cache de dados
- **Axios** - Cliente HTTP para requisições de API

### Estilização
- **Tailwind CSS v4** - Framework CSS utility-first
- **CSS Modules** - Estilização CSS com escopo

### Testes
- **Vitest** - Framework de testes unitários rápido
- **React Testing Library** - Utilitários de teste para componentes React
- **Jest DOM** - Matchers customizados do Jest para DOM

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e formatação de código
- **Turbopack** - Bundler rápido para desenvolvimento e build
- **PostCSS** - Ferramenta de processamento CSS

### API
- **Platzi Fake Store API** - API externa para dados de produtos

## 🏗️ Estrutura do Projeto

```
src/
├── app/                 # Diretório de apps do Next.js
├── components/          # Componentes de UI reutilizáveis
├── lib/                 # Store Redux e slices
├── providers/           # Provedores de contexto React
├── services/            # Serviços de API e cliente HTTP
├── types/               # Definições de tipos TypeScript
└── utils/               # Funções utilitárias
```

## 🌐 Integração com API

Esta aplicação consome a [Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/products) para exibir informações de produtos incluindo:

- Listagens de produtos com paginação
- Detalhes individuais de produtos
- Imagens e metadados de produtos

## 👤 Autor

**Yovany Cunha**
- GitHub: [@yovanycunha](https://github.com/yovanycunha)
- LinkedIn: [Yovany Cunha](https://linkedin.com/in/yovanycunha)
