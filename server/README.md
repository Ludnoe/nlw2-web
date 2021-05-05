# Notas

  (00:24) Instalação das dependencias do projeto 
    - Criação dapasta 
      - criação arquivo 'server.ts'
    -"yarn add typescript -D"
    -criação do arquivo de configurção do typescript
      -'yarn tsc --init'  == 'tsconfig.json' 
      - Nesse arquivo trocar "target": "es5" por "es2017" para suporte a aplicação
    - install de outra dependencia "yarn add ts-node-dev -D" para executar o script e    alteração do script para restartar automatico do servidor
      - Após, cirar um script no package.json:
      "script": {
        "start": "ts-node-dev src/server.ts"
      },
   (00:31:00)Instalçaõ da dependencia express: "yarn add express" micro framework  com algumas funcionalidades de configuração


  (00:42:40)Apresentação do Insomnia

  // http://localhost:3333/users
  // http://localhost:3333/contacts

  // GET: Buscar ou listar uma informação
  // POST: Criar alguma nova informação
  // PUT: Atualizar uma informção existente
  // DELTE: Deletar uma informção existente

   
  **Parâmetros:
  // Corpo (Request Body): Dados para criação ou atualização de um registro
      app.use(express.json()); => faz com que o express entenda JSON. 
  // Route Params: Identificar qual recurso eu quero atualizar ou deletar
  // Query Params: paginação, filtros, ordenação ....


(00:51:00) Casos de uso:

# Funcionalidades

## Conexões

  - Rota para listar o total de conexões realizadas;
  - Rota pra criar uma nova conexão;

## Aulas
  - Rota pra criar uma aula;
  - Rota pra listar aulas;
    - Filtrar por matéria, dia da semana e horárioP;


  (00:57)Intalação do "yarn add knex sqlite3" um banco de dados relacional
   - sqlite3 -> é um drive pra o node se comunicar com o banco sqlite
   - knex -> permite escrever as quires pro sql em javascript
    // SELECT * FROM users
    // knex('users').select('*') <- jS

  (00:58) Criação da Api

  (01:00:00) criação de tabelas
    - migrations -controlam as versões do banco de dados

  (01:04:00) criação do arquivo na raiz do projeto de um knexfile.ts

  (01:07:00) subescrevendo dois comandos:
    - pegando os comandos: yarn knex
    -> package.json