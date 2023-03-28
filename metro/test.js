const http = require('http');

// Opções da solicitação HTTP
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/texto',
  method: 'GET'
};

// Faz a solicitação HTTP e recebe a resposta
const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (error) => {
  console.error('Erro ao fazer solicitação HTTP:', error);
});

req.end();