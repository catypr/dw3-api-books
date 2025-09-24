# API The Books
Esta API é utilizada para gerenciar um catálogo de livris, permitindo operações de CRUD(criar, ler, atualizar e deletar) sobre livros.
## Endpoints
### - GET / books
Esse endpoint é responsável por retornar a listagem de todos os livros cadastrados no banco de dados.
### Parâmetros:

Nenhum

### Respostas:

OK! 200

Caso essa resposta aconteça, você vai receber a listagem de todos os livros.

Exemplo de resposta:

### Erro Interno do Servidor! 500

Caso essa resposta aconteça, siginifica que ocorreu um erro interno no servidor. Motivos podem incluir falhar na comunicação com o banco de dados.

Exemplo de resposta:


### - POST / book
Esse endpoint é resposáveç por cadastrar um novo jogo no banco de dados.

