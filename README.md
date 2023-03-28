Sobre o projeto
Este projeto é uma API Node.js que extrai texto de arquivos PDF usando o módulo pdf-lib. A API usa o framework Express.js para definir as rotas e responder às solicitações HTTP.

A rota /texto da API recebe uma solicitação HTTP GET e retorna o texto extraído do arquivo PDF. O arquivo PDF é carregado a partir do diretório pdfs do projeto, que deve conter um arquivo chamado documento.pdf.

Requisitos
Para executar este projeto, você precisa ter o Node.js instalado no seu computador. Você também precisa instalar as seguintes dependências do projeto:

pdf-lib: módulo para manipulação de arquivos PDF
express: framework para criação de aplicativos web em Node.js
Instalação
Clone este repositório para o seu computador usando o Git ou baixe o arquivo ZIP do projeto.
Abra o terminal na pasta do projeto.
Execute o comando npm install para instalar as dependências do projeto.
Uso
Para iniciar o servidor da API, execute o comando npm start no terminal. O servidor será iniciado na porta 3000.

Para testar a API, você pode usar uma ferramenta de teste de API, como o Postman ou o Insomnia. Crie uma solicitação HTTP GET para a rota http://localhost:3000/texto e envie a solicitação. A resposta da API deve conter o texto extraído do arquivo PDF.

Você também pode usar o código de exemplo fornecido neste repositório para fazer uma solicitação HTTP GET para a rota /texto a partir de uma aplicação Node.js ou React.js.

Dependências
Este projeto usa as seguintes dependências do NPM:

pdf-lib@1.16.0: módulo para manipulação de arquivos PDF
express@4.17.1: framework para criação de aplicativos web em Node.js
Certifique-se de que estas dependências estejam instaladas no seu projeto antes de executá-lo.
