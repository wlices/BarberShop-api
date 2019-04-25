var mongoose = require('mongoose')
var Schema = mongoose.Schema

var serviceSchema = new Schema({
    name: String,
    price: Number,
    description: String
})

module.exports = mongoose.model('Service', serviceSchema)
