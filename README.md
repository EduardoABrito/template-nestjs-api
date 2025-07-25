# Template NestJS API

Um template base para APIs REST usando NestJS com TypeScript, PostgreSQL e documentação Swagger.

## 🚀 Tecnologias

- **NestJS** - Framework Node.js progressivo
- **TypeScript** - Superset tipado do JavaScript
- **PostgreSQL** - Banco de dados relacional
- **Swagger** - Documentação automática da API
- **Winston** - Sistema de logs
- **Class Validator** - Validação de dados
- **Docker** - Containerização (se aplicável)

## 📋 Pré-requisitos

- Node.js (versão 18+)
- npm ou yarn
- PostgreSQL
- Git

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd template-nestjs-api
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Configure o banco de dados no arquivo `.env`:
```env
DATABASE_URL=postgres://user:password@localhost:5432/template_nestjs_api
```

## 🔧 Configuração

### Variáveis de Ambiente

| Variável | Descrição | Valor Padrão |
|----------|-----------|--------------|
| `APP_NAME` | Nome da aplicação | template-nestjs-api |
| `ENV` | Ambiente de execução | dev |
| `PORT` | Porta do servidor | 3000 |
| `DATABASE_URL` | URL de conexão do PostgreSQL | - |
| `LOG_LEVEL` | Nível de log | debug |

### Banco de Dados

1. Crie o banco de dados PostgreSQL:
```sql
CREATE DATABASE template_nestjs_api;
```

2. Execute as migrações (se aplicável):
```bash
npm run migration:run
```

## 🚀 Execução

### Desenvolvimento
```bash
npm run start:dev
```

### Produção
```bash
npm run build
npm run start:prod
```

## 📚 Documentação da API

Após iniciar a aplicação, acesse a documentação Swagger em:
```
http://localhost:3000
```

## 🏗️ Estrutura do Projeto

```
src/
├── config/           # Configurações da aplicação
├── database/         # Configuração do banco de dados
├── filters/          # Filtros de exceção
├── middleware/       # Middlewares personalizados
├── modules/          # Módulos da aplicação
│   └── health/       # Módulo de health check
└── main.ts          # Arquivo principal
```

## 📋 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev     # Inicia em modo de desenvolvimento
npm run start:debug   # Inicia em modo debug

# Build
npm run build         # Gera build de produção
npm run start:prod    # Inicia em produção

# Testes
npm run test          # Executa testes unitários
npm run test:e2e      # Executa testes end-to-end
npm run test:cov      # Executa testes com coverage

# Lint
npm run lint          # Executa ESLint
npm run format        # Formata código com Prettier
```

## 🔍 Health Check

A aplicação possui um endpoint de health check:
```
GET /health
```

## 🐛 Debug

Para debug, use:
```bash
npm run start:debug
```

Conecte seu debugger na porta 9229.

## 📦 Build

Para gerar o build de produção:
```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Features

- ✅ Configuração tipada com validação
- ✅ Sistema de logs com Winston
- ✅ Documentação automática com Swagger
- ✅ Middleware de autenticação
- ✅ Middleware de logging
- ✅ Filtro global de exceções
- ✅ Health check endpoint
- ✅ Validação de dados com class-validator
- ✅ Suporte a variáveis de ambiente

