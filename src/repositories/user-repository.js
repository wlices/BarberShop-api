const mongoose = require('mongoose')
var User = require('../app/models/user')

exports.create = async(data) => {
    var user = new User(data)
    await user.save()
}

exports.put =  async (id, data) => {
    await User.findByIdAndUpdate(id, {
        $set:{
            name : data.name,
            password : data.password,
            email : data.email
        }
    })
}

exports.delete = async(id) => {
    await User.findOneAndRemove(id)
}

exports.authenticate = async(data) => {
    const response = await User.findOne({
        email: data.email,
        password: data.password
    })
    return response
}

exports.getById = async(id) => {
    const response = await User.findById(id)
    return response
}

exports.getAll = async() => {
    const response = await User.find()
    return response
}