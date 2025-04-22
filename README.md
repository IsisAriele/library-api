# Library API

## Descrição
A **Library API** é uma aplicação backend desenvolvida em **Node.js** que permite o gerenciamento de bibliotecas, incluindo funcionalidades para cadastro, consulta, atualização e remoção de livros, autores, usuários e empréstimos.

## Funcionalidades Principais
- Cadastro de livros
- Consulta de livros
- Atualização de informações de livros
- Exclusão de livros
- Conexão com um banco de dados MongoDB para armazenamento persistente

---

## Tecnologias Utilizadas

### Node.js
- Plataforma que permite a execução de JavaScript no servidor.
- Utilizado como base para o desenvolvimento da API.

### Express
- Framework para Node.js que facilita a criação de servidores HTTP.
- Utilizado para gerenciar as rotas e requisições da API.

### Mongoose
- Biblioteca para modelagem de dados em MongoDB.
- Utilizada para definir esquemas e interagir com o banco de dados MongoDB.

### MongoDB
- Banco de dados NoSQL utilizado para armazenamento dos dados da aplicação.
- Conexão realizada através da biblioteca **mongoose**.

### dotenv
- Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.
- Utilizada para gerenciar configurações sensíveis, como a string de conexão com o banco de dados.

### Nodemon
- Ferramenta que reinicia automaticamente o servidor Node.js sempre que algum arquivo é alterado.
- Utilizada para facilitar o desenvolvimento.

---

## Configuração do Projeto
### Pré-requisitos
- Node.js instalado na máquina
- MongoDB em execução (localmente ou em um serviço na nuvem)

### Passos para Rodar o Projeto
1. Clone este repositório:
```bash
git clone <URL-do-repositorio>
```
2. Navegue até a pasta do projeto:
```bash
cd library-api
```
3. Instale as dependências:
```bash
npm install
```
4. Crie um arquivo `.env` na raiz do projeto com a variável de ambiente de conexão com o banco de dados:
```env
DB_CONNECTION_STRING=mongodb+srv://<usuario>:<senha>@<cluster-url>/<nome-do-banco>
```
5. Execute a aplicação em modo de desenvolvimento:
```bash
npm run dev
```
6. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

---

## Rotas Disponíveis

### **GET /**
- Retorna uma mensagem de boas-vindas.

### **GET /livros**
- Retorna a lista de todos os livros cadastrados.

### **GET /livros/:id**
- Retorna um livro específico pelo ID.

### **POST /livros**
- Cadastra um novo livro.
- Requisição:
  ```json
  {
    "titulo": "Livro Exemplo",
    "editora": "Editora Exemplo",
    "preco": 39.90,
    "paginas": 200
  }
  ```

### **PUT /livros/:id**
- Atualiza as informações de um livro existente.

### **DELETE /livros/:id**
- Remove um livro do banco de dados.

---

## Melhorias Futuras
#### Implementação de autenticação de usuários.
- Autenticação com JWT, middleware de proteção de rotas e controle de sessão.

#### Adição de validações mais robustas nos modelos de dados.
- Validações com express-validator para campos obrigatórios, formatos de dados e regras de negócio.

#### Criação de rotas para gerenciamento de autores, usuários e empréstimos.
- Cadastro, consulta, atualização e remoção de autores, usuários e registros de empréstimos.

#### Controle de acesso por tipo de usuário.
- Definição de papéis (admin, bibliotecário, leitor) e permissões específicas por papel.

#### Sistema de empréstimo e devolução de livros.
- Registro de data de empréstimo, devolução, controle de disponibilidade e histórico.

#### Notificações por e-mail.
- Envio automático de lembretes de devolução e confirmações de empréstimo.

#### Dashboard de estatísticas.
- Visualização de livros mais emprestados, usuários ativos e indicadores gerais da biblioteca.

#### Paginação e filtros em listagens.
- Consulta de livros, autores e usuários com filtros por nome, categoria e paginação de resultados.

#### Geração de relatórios.
- Exportação de dados em PDF ou CSV para controle da biblioteca.



---


