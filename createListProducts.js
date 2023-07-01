const fs = require('fs');

const products = [
  { nome: 'Produto_1', id: 1, preco: 10.99, quantidade: 20 },
  { nome: 'Produto_2', id: 2, preco: 29.99, quantidade: 20 },
  { nome: 'Produto_3', id: 3, preco: 39.99, quantidade: 20 },
  { nome: 'Produto_4', id: 4, preco: 49.99, quantidade: 20 },
  { nome: 'Produto_5', id: 5, preco: 59.99, quantidade: 20 },
  { nome: 'Produto_6', id: 6, preco: 69.99, quantidade: 20 },
  { nome: 'Produto_7', id: 7, preco: 79.99, quantidade: 20 },
  { nome: 'Produto_8', id: 8, preco: 89.99, quantidade: 20 },
  { nome: 'Produto_9', id: 9, preco: 99.99, quantidade: 20 },
  // Adicione outros produtos conforme necessário
];
module.exports = products;
const productData = products.map(product => `${product.nome}\t${product.id}\t${product.preco}\t${product.quantidade}`).join('\n');

fs.writeFile('products.txt', productData, (err) => {
  if (err) {
    console.error('Erro ao salvar o arquivo:', err);
    return;
  }
  console.log('Arquivo de produtos criado com sucesso!');
});
