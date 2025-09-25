# API The Books
Esta API é utilizada para gerenciar um catálogo de livris, permitindo operações de CRUD(criar, ler, atualizar e deletar) sobre livros.
## Endpoints
### - GET /books
Esse endpoint é responsável por retornar a listagem de todos os livros cadastrados no banco de dados.
#### Parâmetros:

Nenhum

#### Respostas:

#### OK! 200

Caso essa resposta aconteça, você vai receber a listagem de todos os livros.

Exemplo de resposta:

{
    "books": [
        {
            "title": "Lendários",
            "author": "Tracy Deon",
            "genre": "Fantasia",
            "publicationYear": 2021,
            "isbn": "9786555602661",
            "price": 34,39
            "publisher": [
            {
                    "name": "Intrínseca",
                    "country": "Brasil",
                    "founedYear": 2003
                }
            ]
        },
        {
            "title": "Pessoas Normais",
            "author": "Sally Rooney",
            "genre": "Romance",
            "publicationYear": 2018,
            "isbn": "9788439736455",
            "price": 42,32
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

#### Erro Interno do Servidor! 500

Caso essa resposta aconteça, siginifica que ocorreu um erro interno no servidor. Motivos podem incluir falhar na comunicação com o banco de dados.

Exemplo de resposta:



### - POST /book
Esse endpoint é resposáveç por cadastrar um novo jogo no banco de dados.

#### Parâmetros:

title: Título do livro.
author: Autor(a) do livro.
genre: Genêro do livro.
publicationYear: Ano de publicação do livro.
isbn: Identificador numérico do livro.
price: Preço do livro.
publisher: Editora do livro.

Exemplo de requisição:



#### Respostas:

#### Criado! 201

Caso esse reposta aconteça, o novo jogo foi criado com sucesse.

Exemplo de resposta: Nenhum conteúdo retornado.

#### Erro Interno no Servidor! 500

Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:



### - DELETE /book/
Esse endpoint é responsável por deletar um livro específico pelo seu ID.

#### Parâmetros:

id: ID do livro a ser deletado.

#### Respostas:

#### Sem Conteúdo! 204

Caso essa resposta aconteça, o livro foi deletado com sucesso e não há conteúdo ára retornar ao cliente.

Exemplo de resposta: Nenum conteúdo retornado.

#### Requisisção Inválida! 400

Caso essa requisição acontecça, siginifica que o ID fornecido é inválido.

Exemplo de resposta:



#### Erro Interno no Servidor1 500

Caso essa resposta aconteça, siginifica que ocorreu um erro interno no servidor.

Exemplo de resposta:



### - PUT /book/
Esse endpoint é responsável por atualizar as infromações de um jogo específico pelo seu ID.

#### Parâmetros:

id: ID do livro a ser atualizado.
title: Título do livro (opcional).
author: Autor(a) do livro (opcional).
genre: Genêro dp livro (opcional).
publicationYear: Ano de lançamento do livro (opcional).
isbn: Identificador numérico do livro (opcional).
price: Preço do livro (opcional).
publisher: Editora do livro (opcional).

Exemplo de requisição:



#### Respostas: 

#### OK! 200

Caso essa resposta aconteça, as informações do livro forma atualizadas com sucesso.

Exemplo de resposta:



#### Requisição Inválida! 400

Caso essa resposta acpnteça, siginifica qie o ID fornecido é inválido ou s requisição contém dados malformados.

Exemplo de resposta:



#### Erro Interno do Servidor! 500

Caso essa resposta aconteça, siginifica que ocorreu um erro interno no servidor.

Exemplo de resposta:



### - GET /book/
Esse endpoint é responsável por retornar as inrformações de um livro específico pelo sei ID.

#### Parâmetros:

id: ID do jogo a ser consultado.

#### Respostas:

#### OK! 200

Caso essa resposta aconteça, você vai receber as onformações do livro solicitado.

Exemplo de repsosta:



#### Não Encontrado! 404

Caso essa resposta aconteça, siginifica que o jogo com o ID fornecido não foi encontrado.

Exemplo de resposta:



#### Requisição Inválida! 400

Caso essa resposta aconteça, siginifica que o ID fornecido é inválido.

Exemplo de resposta:



#### Erro Interno do Servidor! 500

Caso essa resposta aconteça, siginifica qie ocorreu um erro inerno no servidor.

Exemplo de resposta:



