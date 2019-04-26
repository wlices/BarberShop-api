var mongoose = require('mongoose')
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId
// var Customer = require('./customer')
// var Service = require('./service')

var schedulingSchema = new Schema({
    customer: { type: ObjectId, ref: 'Customer' },
    professional: String,
    service: { type: ObjectId, ref: 'Service' },
    start_time: Date,
    end_time: Date
})

module.exports = mongoose.model('Scheduling', schedulingSchema)