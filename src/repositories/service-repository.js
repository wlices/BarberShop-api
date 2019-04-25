var Service = require('../app/models/service')

exports.get = async() =>{
    const response = await Service.find()
    return response
}


exports.getById = async(id) => {
    const response = await Service.findById(id)
    return response
}

exports.put =  async (id, data) => {
    await Service.findByIdAndUpdate(id, {
        $set:{
            name : data.name,
            price : data.price,
            description : data.description
        }
    })
}

exports.post = async(data) => {
    var service = new Service(data);
    await service.save()
}

exports.delete = async(id) => {
    await Service.findOneAndRemove(id)
}