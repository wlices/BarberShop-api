const mongoose = require('mongoose');
var Customer = require('../app/models/customer');

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.getById = async(id) => {
    const res = await Customer.findById(id);
    return res;
}

exports.getAll = async() => {
    const res = await Customer.find();
    return res;
}

exports.put =  async (id, data) => {
    await Customer.findByIdAndUpdate(id, {
        $set:{
            name : data.name,
            lastName : data.lastName,
            cpf: data.cpf,
            email: data.email,
            phone: data.phone
        }
    });
}

exports.delete = async(id) => {
    await Customer.findOneAndRemove(id);
}