let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

const userRoute = require('./routes/user-route')
const serviceRoute = require('./routes/services-route')
const customerRoute = require('./routes/customer-route')
const schedulingRoute = require('./routes/scheduling-route')

let config = require('./config')

mongoose.connect(config.connectionString);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let port = process.env.port || 3000;

app.use('/services', serviceRoute)
app.use('/schedules', schedulingRoute)
app.use('/customers', customerRoute)
app.use('/users', userRoute)

app.listen(port);
console.log("singarro da cance" + port);