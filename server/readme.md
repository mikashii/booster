Servidor está utilizando o typeScript
Para inicializar o servidor, utilizar o comando: **npx run dev**

Pacotes utilizados com o typeScript:
* **@types/express**: Para documentar o TS (Tipagem).

* **ts-node**: Permite rodar um script TS dentro do node.
* **ts-node-dev**: Substitudo do Nodemon, para atualizar o servidor a cada alteração do código.
 
*  **Typescript**

---
Rotas: Endereço completo da requisição
Entidade/Recurso: Qual recurso estamos utlizando e acessando no sistema, por exemplo: --localhost:3000/**users**

### Arquivos estáticos

Arquivos que serão servidos diretamente pelo front, como imagens, docx, pdf ou conteúdos a serem baixados.
```
app.use('/tmp', express.static())
```
As imagens serão servidas atráves de uma rota específica do express a partir do recurso **tmp/nome_da_imagem**



---

Indica ao express, que estamos utilizando informações no formato JSON

```
app.use(express.json());
```
---

Utilizar response para forçar a aplicação a retornar um resposta, caso haja algum código abaixo desse retorno para o usuário.

## Router

* Criar arquivo routes, importar o Express, utilizar o método express.Router(), criar as rotas e exportar elas.
``` 
import express from 'express';
const routes = express.Router();

routes.get('/', (req, res) => {} )
```

* No arquivo server.ts, você irá importar as Rotas e usar: 
```
app.use(routes)
```



## Criar rota para listar items

* Importar a conexão do banco de dados
```import knex from './database/connection.ts```

* Criar a rota de forma assíncrona para listar todos os itens que estão dentro do banco
```
routes.get('/items', async(req, res) => {
    const items = await knex('items').select('*');
})
```
---
# Pontos de coleta.
Em cada criação de "Ponto de coleta" feita via post, o método **insert** do Knex gera um ID para a operação.



---

## Banco de dados
*Será utilizado o banco de dados SQLite evitando a necessidade de instalar um cliente de DB*

* Knex
Uma biblioteca que permite criar querys em formato de JavaScript, evitando o famoso **Select \* from users**

## Migrations
Serão utilizadas para a criação das tabelas do banco de dados

*Migration = histórico do banco de dados*

Função UP: Criar a tabela.

Função DOWN: Voltar ou deletar uma criação, tabela ou item.

## Comandos
```
npx knex migrate:latest
```

# Seeds

Seed criam informações *Default* dentro do banco de dados para serem passadas ao usuário no Front.

Seeds são criadas como array de objetos.
```
knex('items').insert([
    {
    name: 'Nome da seed',
    image: 'path_da_img.formato'
    },
    {
    name: 'Nome da seed',
    image: 'path_da_img.formato'
    }
])
```

A pasta seeds é inclusa dentro do arquivo **knexfile.ts**



---
# Configurando funcionalidades da aplicação.

* Cadastro de ponto de coleta
* Listar os items
* Listar os pontos (filtros definidos por estado,  cidade e items)
* Listar um único ponto de coleta


