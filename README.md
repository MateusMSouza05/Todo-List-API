# Todo List API

## Sobre o Projeto

Esta é uma API REST para gerenciamento de uma lista de tarefas (To-do list), desenvolvida em Node.js com TypeScript. O projeto utiliza Prisma como ORM para interação com o banco de dados e Zod para validação de esquemas.

A principal característica deste projeto é a sua estrutura, que foi organizada seguindo os princípios da Arquitetura em Cebola (Onion Architecture), visando um código desacoplado, testável e de fácil manutenção.

## Arquitetura em Cebola

A Arquitetura em Cebola organiza o projeto em camadas, onde a regra de dependência é sempre direcionada para o centro. As camadas externas conhecem as internas, mas as internas não sabem nada sobre as externas.

```
+------------------------------------------------------------------+
| Infrastructure | Presentation |                       |
| (Prisma, Repositories) | (Controllers, Routes)      |
| +------------------------------------------------------------+ |
| | Application (Use Cases, DTOs/Schemas)                  | |
| | +------------------------------------------------------+ | |
| | | Core (Domain Entities, Repository Interfaces)        | | |
| | +------------------------------------------------------+ | |
| +------------------------------------------------------------+ |
+------------------------------------------------------------------+
```

### Estrutura de Pastas

*   `src/core`: O coração da aplicação. Contém as entidades de domínio (`Todo.ts`) e as interfaces (contratos) dos repositórios (`ITodoRepository.ts`). Não depende de nenhuma outra camada.
*   `src/application`: Contém a lógica de negócio e os casos de uso (`todoUseCases.ts`). Define os schemas de entrada e saída de dados (`todoSchema.ts`). Depende apenas da camada **Core**.
*   `src/infrastructure`: Implementa as interfaces definidas no **Core**. É aqui que as tecnologias externas são utilizadas, como o Prisma para implementar o `TodoRepository.ts`. Depende da camada **Core**.
*   `src/presentation`: A camada mais externa, responsável por interagir com o mundo exterior (neste caso, requisições HTTP). Contém os controladores (`todoController.ts`) e as rotas (`todoRoutes.ts`). Depende da camada de **Application** para executar os casos de uso.

## Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 18 ou superior)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como Executar

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    cd Todo-List-API
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o ambiente:**
    Crie um arquivo `.env` na raiz do projeto. A principal variável é a string de conexão com o banco de dados.

    `.env.example`
    ```
    # Exemplo para PostgreSQL
    DATABASE_URL="file:./dev.db"

    # Porta da aplicação
    PORT=3000
    ```

4.  **Execute as migrações do banco de dados:**
    Este comando irá criar e aplicar as migrações definidas na pasta `prisma/migrations` no seu banco de dados.
    ```bash
    npx prisma migrate dev
    ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

## Dependências Principais

*   **Express**: Framework para criar o servidor e as rotas da API.
*   **Prisma**: ORM para interação com o banco de dados.
*   **Zod**: Para declaração e validação de schemas de dados.
*   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
*   **dotenv**: Para carregar variáveis de ambiente a partir de um arquivo `.env`.
