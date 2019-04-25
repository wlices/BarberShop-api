const repository = require('../repositories/service-repository')

exports.getAll = async (req, res) => {

    try {
        var data = await repository.get()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({
            message: "Erro! Falha no processamento da requisição",
            erro: error
        })
    }
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.serviceId
        var data = await repository.getById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({
            message: "Erro! Falha no processamento da requisição",
            erro: error
        })
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.serviceId;
        var data = await repository.put(id, req.body)
        res.status(200).send({
            message: "Serviço atualizado com sucesso",
            dados: data
        })

    } catch (error) {
        res.status(500).send({
            message: "Erro! Falha no processamento da requisição",
            erro: error
        })
    }
}

//Reparar no uso de Arrow Function (=>), não precisamos passar o comando "function"
exports.post = async (req, res) => {
    try {
        await repository.post({
            name: req.body.nome,
            price: req.body.price,
            description: req.body.description
        })
        res.status(201).send({
            message: 'Serviço cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Erro! Falha no processamento da requisição'
        })
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Serviço removido com sucesso!'
        })
    } catch (e) {
        res.status(500).send({
            message: 'Erro! Falha no processamento da requisição'
        })
    }
}