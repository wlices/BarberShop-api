//importar pacotes 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//ROTAS
const indexRoute = require('./routes/index-route')
const schedulingRoute = require('./routes/scheduling-route')
const serviceRoute = require('./routes/services-route')
const userRoute = require('./routes/user-route')

var config = require('./config')

//PERSISTÊNCIA
mongoose.connect(config.connectionString);

//Configurar a app para usar o body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Definindo a porta onde o servidor vai responder
var port = process.env.port || 3000;

//Dedfinindo uma rota padrão para as minhas apis
app.use('/api', indexRoute)
app.use('/products', serviceRoute)
app.use('/schedules', schedulingRoute)
app.use('/customers', userRoute)

app.listen(port);
console.log("API up and running! on port " + port);