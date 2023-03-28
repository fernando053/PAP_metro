const express = require('express');
const axios = require('axios');
const { PDFDocument } = require('pdf-lib');
const { getDocument } = require('pdfjs-dist');

const app = express();
const port = process.env.PORT || 3000;

// URL do PDF que você deseja baixar e converter
const pdfUrl = 'https://www.metrodoporto.pt/metrodoporto/uploads/document/file/612/horarios_inverno_22_23_online_f_nov2022.pdf';

// Número da página que você deseja extrair
const pageNumber = 2;

// Rota que retorna o texto extraído do PDF
app.get('/texto', async (req, res) => {
  try {
    // Baixa o PDF do URL e converte para texto
    const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
    const pdfBytes = response.data;

    // Extrai o texto da página desejada
    const doc = await getDocument({ data: pdfBytes }).promise;
    const pageProxy = await doc.getPage(pageNumber);
    const textContent = await pageProxy.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');

    // Retorna o texto como uma resposta HTTP
    res.send(pageText);
  } catch (error) {
    console.error('Erro ao extrair texto do PDF:', error);
    res.status(500).send('Erro ao extrair texto do PDF');
  }
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});