var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Customer = require('customer')
var Service = require('service')

var schedulingSchema = new Schema({
    customer: Customer,
    professional: String,
    service: Service,
    start_time: Date,
    end_time: Date
})

module.exports = mongoose.model('Scheduling', schedulingSchema)