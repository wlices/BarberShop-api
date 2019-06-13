const repository = require('../repositories/user-repository')

exports.get = async(req, res, next) => {
    try {
        var data = await repository.getAll();
        res.status(200).send({
            message: 'Usuários',
            usuarios: data
        })
    } catch (e) {
        res.status(500).send({
            message: 'Erro! Falha no processamento da requisição'
        })
    }
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.userId
        var data = await repository.getById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({
            message: "Erro! Falha no processamento da requisição",
            erro: error
        })
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            name: req.body.name !== null ? req.body.name : "",
            email: req.body.email,
            password: req.body.password
        })
        res.status(201).send({
            message: 'Usuário cadastrado com sucesso!'
        })
    } catch (e) {
        res.status(500).send({
            message: 'Erro! Falha no processamento da requisição'
        })
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.userId;
        var data = await repository.put(id, req.body)
        res.status(200).send({
            message: "Usuário atualizado com sucesso",
            dados: data
        })

    } catch (error) {
        res.status(500).send({
            message: "Erro! Falha no processamento da requisição",
            erro: error
        })
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Usuário removido com sucesso!'
        })
    } catch (e) {
        res.status(500).send({
            message: 'Erro! Falha no processamento da requisição'
        })
    }
}
