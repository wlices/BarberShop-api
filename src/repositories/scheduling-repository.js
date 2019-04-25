const mongoose = require('mongoose')
var Scheduling = require('../app/models/scheduling')

exports.create = async (data) => {
    var scheduling = new Scheduling(data);
    await scheduling.save()
}

exports.getById = async(id) => {
    const res = await Scheduling.findById(id);
    return res;
}

exports.getAll = async() => {
    const res = await Scheduling.find();
    return res;
}

exports.put =  async (id, data) => {
    await Scheduling.findByIdAndUpdate(id, {
        $set:{
            customer: data.customer,
            professional: data.professional,
            service: data.service,
            start_time: data.start_time,
            end_time: data.end_time
        }
    });
}

exports.delete = async(id) => {
    await Scheduling.findOneAndRemove(id);
}
