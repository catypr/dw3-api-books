# API The Books
Esta API é utilizada para gerenciar um catálogo de livros, permitindo operações de CRUD(criar, ler, atualizar e deletar) sobre livros.
## Endpoints
### - GET /books
Esse endpoint é responsável por retornar a listagem de todos os livros cadastrados no banco de dados.
#### Parâmetros:

Nenhum

#### Respostas:

#### OK! 200

Caso essa resposta aconteça, você vai receber a listagem de todos os livros.

Exemplo de resposta:

```
  {
       "books": [
          {
            "title": "Lendários",
            "authot": "Tracy Deon",
            "genre": "Fantasia",
            "publicationYear": 2021,
            "isbn": "9786555602661",
            "price": 34,39
            "publisher": [
                {
                    "name": "Intrínseca",
                    "country": "Brasil",
                    "foundedYear": 2003
                }
            ]
        },
        {
            "title": "Pessoas Normais",
            "author": "Sally Rooney",
            "genre": "Romance",
            "publicationYear": 2018,
            "isbn": "9788439736455",
            "price": 42,32,
            "publisher": [
                {
                    "name": "Companhia das Letras",
                    "country": "Brasil",
                    "foundedYear": 1986
                }
            ]
        }
    ]
}
```

#### Erro Interno do Servidor! 500

Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
   {
    "error": "Erro interno do servidor!"
   }
```

### - POST /books
Esse endpoint é resposável por cadastrar um novo livro no banco de dados.

#### Parâmetros:

title: Título do livro.
author: Autor(a) do livro.
genre: Gênero do livro.
publicationYear: Ano de publicação do livro.
isbn: Identificador numérico do livro.
price: Preço do livro.
publisher: Editora do livro.

Exemplo de requisição:

```
{
      "title": "Pessoas Normais",
      "author": "Sally Rooney",
      "genre": "Romance",
      "publicationYear": 2018,
      "isbn": "9788439736455",
      "price": 42,32,
      "publisher":[
          {
            "name" "Companhia das Letras",
            "country": "Brasil",
            "foundedYear": 1986
         }
      ]
   }
```

#### Respostas:

#### Criado! 201

Caso esse reposta aconteça, o novo livro foi criado com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

#### Erro Interno no Servidor! 500

Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
    {
      "error": "Erro interno do Servidor."
    }
```

### - DELETE /books/:id
Esse endpoint é responsável por deletar um livro específico pelo seu ID.

#### Parâmetros:

id: ID do livro a ser deletado.

#### Respostas:

#### Sem Conteúdo! 204

Caso essa resposta aconteça, o livro foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Nenhum conteúdo retornado.

#### Requisisção Inválida! 400

Caso essa requisição aconteça, siginifica que o ID fornecido é inválido.

Exemplo de resposta:

```
   {
      "error": "A ID enviada é inválida."
   }
```

#### Erro Interno no Servidor 500

Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
   {
     "error": "Erro interno do Servidor."
   }
```

### - PUT /books/:id
Esse endpoint é responsável por atualizar as informações de um jogo específico pelo seu ID.

#### Parâmetros:

- id: ID do livro a ser atualizado.
- title: Título do livro (opcional).
- author: Autor(a) do livro (opcional).
- genre: Gênero dp livro (opcional).
- publicationYear: Ano de lançamento do livro (opcional).
- isbn: Identificador numérico do livro (opcional).
- price: Preço do livro (opcional).
- publisher: Editora do livro (opcional).

Exemplo de requisição:

```
   {
      "title": "Lendários",
      "author": "Tracy Deon",
      "genre": "Fantasia",
      "publicationYear": 2021,
      "isbn": "9786555602661",
      "price": 34,39,
      "publisher":[
          {
            "name" "Intrínseca",
            "country": "Brasil",
            "foundedYear": 2003
         }
      ]
   }
```

#### Respostas: 

#### OK! 200

Caso essa resposta aconteça, as informações do livro foram atualizadas com sucesso.

Exemplo de resposta:

```
  {
      "title": "Pessoas Normais",
      "author": "Sally Rooney",
      "genre": "Romance",
      "publicationYear": 2018,
      "isbn": "9788439736455",
      "price": 42,32,
      "publisher":[
          {
            "name" "Companhia das Letras",
            "country": "Brasil",
            "foundedYear": 1986
         }
      ]
    }
```

#### Requisição Inválida! 400

Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
   {
      "error": "A ID enviada é inválida."
   }
```

#### Erro Interno do Servidor! 500

Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
  {
     "error": "Erro interno do Servidor."
   }
```

### - GET /books/:id
Esse endpoint é responsável por retornar as informações de um livro específico pelo seu ID.

#### Parâmetros:

id: ID do livro a ser consultado.

#### Respostas:

#### OK! 200

Caso essa resposta aconteça, você vai receber as informações do livro solicitado.

Exemplo de reposta:

```
  {
      "title": "Pessoas Normais",
      "author": "Sally Rooney",
      "genre": "Romance",
      "publicationYear": 2018,
      "isbn": "9788439736455",
      "price": 42,32,
      "publisher":[
          {
            "name" "Companhia das Letras",
            "country": "Brasil",
            "foundedYear": 1986
         }
      ]
   }
```

#### Não Encontrado! 404

Caso essa resposta aconteça, significa que o jogo com o ID fornecido não foi encontrado.

Exemplo de resposta:

```
   {
      "error": "Livro não encontrado!"
   }
```

#### Requisição Inválida! 400

Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
  {
     "error": "ID inválido!"
  }
```

#### Erro Interno do Servidor! 500

Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:
```
   {
     "error": "Erro interno do Servidor!"
   }
```

# Cadastro do Usuário
Essa parte da API é utilizada para o cadastro do usuário.

### -POST /user

Esse endpoint é responsável por cadastrar um novo usuário no banco de dados.

#### Parâmetros:

- name: Nome do usuário.
- email: E-mail do usuário.
- password: Senha do usuário.

Exemplo de requisição:
```
{
    "name": "Maria Clara",
    "email": "mariaC@email.com",
    "password": "698053",
}
```

#### Respostas:

#### Criado! 201

Caso essa resposta aconteça, o novo usuário foi criado com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

#### Erro Interno do Servidor! 500

Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:
```
{
  "error": Erro interno do servidor."
}
```

### -POST /login

Esse endpoint é responsável por verificar se o usuário tem acesso permitido ou não.

#### Parâmetro:

- id: Data do ID do login
- email: Data do E-mail do usuário

Exemplo de requisição:
```
{
    req.LoggedUser = {
    id: data.id,
    email: data.email,
        };
}
```

#### Respostas:

#### Criado! 201

Caso essa resposta aconteça, o usuário é válido.

Exemplo de resposta: Usuário válido.

#### Erro Interno do Servidor! 401

Caso essa resposta aconteça, significa que o usuário não é válido.

Exemplo de resposta:
```
{
   "error": "Token inválido."
}
```
