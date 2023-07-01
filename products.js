const express = require('express');
const app = express();
const ejs = require('ejs');

// Importe o array products do arquivo createListProducts.js
const products = require('./createListProducts');

// Defina o mecanismo de modelo do EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Define o diretório de visualizações como "views"

// Rota para servir o arquivo testProducts.ejs
app.get('/testProducts.html', (req, res) => {
  try {
    res.render('testProducts', { products: products }); // Renderiza o arquivo testProducts.ejs
  } catch (error) {
    console.error('Erro ao carregar o arquivo:', error);
    res.status(500).json({ error: 'Erro ao carregar o arquivo' });
  }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
