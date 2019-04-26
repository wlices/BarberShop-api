const mongoose = require('mongoose')
var User = require('../app/models/user')

exports.create = async(data) => {
    var user = new User(data)
    await user.save()
}

exports.put =  async (id, data) => {
    let putData = {}
    if (data.name !== null) {
        putData.name = data.name
    }
    if (data.password !== null) {
        putData.password = data.password
    }
    if (data.email !== null) {
        putData.email = data.email
    }
    await User.findByIdAndUpdate(id, {
        $set:putData
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