const express = require('express')
const request = require('request-promise-native');

const app = express()

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

app.get('/produtos', async function(req, res) {
  const result = await request.get('http://localhost:3000/api/v1/products')
  const products = JSON.parse(result).data;
  res.render('products', { products });
})

app.listen(3001, function() {
  console.log('Servidor inicializado na porta 3001');
})