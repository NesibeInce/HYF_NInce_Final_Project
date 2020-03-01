const express = require('express');
const bodyParser = require('body-parser');
// const mongoPractice = require('./mongoose');
const sampleModel = require('./models/sampleModel');

const app = express();

app.use(bodyParser.json());

// app.post('/products', mongoPractice.createProduct);
app.post('/sampleModel', sampleModel.createPerson);
// app.get('/products', mongoPractice.getProducts);

app.listen(3000);
