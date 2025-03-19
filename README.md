# Backend Todo com NestJS --

Este é um projeto de backend para um sistema de gerenciamento de tarefas (To-Do) desenvolvido com o framework [NestJS](https://nestjs.com/). Ele utiliza autenticação e controle de acesso baseado em papéis (RBAC - Role-Based Access Control) para gerenciar permissões de usuários.

## Recursos Principais

- **Autenticação JWT**: Login seguro com tokens JWT.
- **RBAC (Role-Based Access Control)**: Controle de acesso baseado em papéis, permitindo diferentes níveis de permissões para usuários.
- **CRUD de Tarefas**: Criação, leitura, atualização e exclusão de tarefas.
- **Arquitetura Modular**: Código organizado e escalável.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Como Rodar o Projeto com Docker

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/backend-todo-nestjs.git
   cd backend-todo-nestjs
   ```
2. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias. Use o arquivo `.env.example` como referência.
3. Construa e inicie os contêineres Docker:

   ```bash
   docker-compose up --build
   ```
4. O backend estará disponível em `http://localhost:3000`.

## Endpoints Principais

- **Autenticação**:
  - `POST /auth/login`: Realiza login e retorna um token JWT.
- **Tarefas**:
  - `GET /tasks`: Lista todas as tarefas (requer permissão).
  - `POST /tasks`: Cria uma nova tarefa (requer permissão).
  - `PUT /tasks/:id`: Atualiza uma tarefa existente (requer permissão).
  - `DELETE /tasks/:id`: Exclui uma tarefa (requer permissão).

## Controle de Acesso (RBAC)

O sistema utiliza RBAC para gerenciar permissões. Existem três papéis principais:

- **Admin**: Acesso total ao sistema.
- **Manager**: Pode gerenciar tarefas, mas com restrições.
- **User**: Pode visualizar e gerenciar apenas suas próprias tarefas.

As permissões são verificadas em cada endpoint para garantir que os usuários só possam realizar ações permitidas pelo seu papel.

## Testes

Para rodar os testes, utilize o seguinte comando:

```bash
docker-compose exec app npm run test
```

## Roadmap

Aqui estão os próximos passos e funcionalidades planejadas para o projeto:

- [ ] Adicionar suporte a internacionalização (i18n).
- [ ] Criar documentação detalhada da API com Swagger.
- [ ] Melhorar a cobertura de testes automatizados.
- [ ] Implementar suporte a tarefas recorrentes.

## Rotas

### Obter login

**POST** `http://localhost:3000/auth/login`

**Corpo da requisição:**

```json
{
	"username": "test",
	"password": "test"
}
```

**Você terá um Bearer token para utilizar:**

```json
{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDIzODY1MDMsImV4cCI6MTc0MjM4NjU2M30.5slOlF4lBOsZ_fj2TYm6hUpoF-2gpByYgTwJbr4vMY0"}
```

### Listar todos os to-dos

**GET** `http://localhost:3000/todo/all`
