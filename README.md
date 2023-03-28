# API para extração de texto de arquivos PDF usando Node.js
Este projeto consiste em uma API Node.js que utiliza o módulo pdf-lib para extrair texto de arquivos PDF. A API utiliza o framework Express.js para gerenciar as rotas e responder as solicitações HTTP.

# Uso
A rota /texto da API recebe uma solicitação HTTP GET e retorna o texto extraído do arquivo PDF. O arquivo PDF é carregado a partir do diretório pdfs do projeto, que deve conter um arquivo chamado documento.pdf.

# Requisitos
Antes de executar este projeto, certifique-se de ter o Node.js instalado em seu computador. Além disso, é necessário instalar as seguintes dependências:

 pdf-lib: para manipulação de arquivos PDF
express: framework para criação de aplicativos web em Node.js

# Instalação
Para instalar as dependências do projeto, execute o comando npm install no terminal na pasta do projeto.

Para iniciar o servidor da API, execute o comando npm start no terminal. O servidor será iniciado na porta 3000.

# Uso
Para testar a API, envie uma solicitação HTTP GET para a rota http://localhost:3000/texto. A resposta da API deve conter o texto extraído do arquivo PDF.

# Dependências
Este projeto usa as seguintes dependências do NPM:

pdf-lib@1.16.0: módulo para manipulação de arquivos PDF
express@4.17.1: framework para criação de aplicativos web em Node.js
Certifique-se de que estas dependências estejam instaladas no seu projeto antes de executá-lo.

# Contribuição
Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

# Licença
Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
