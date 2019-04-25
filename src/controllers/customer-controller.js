
const repository = require('../repositories/customer-repository');

exports.getAll = async(req, res, next) => {
    try {
        var data = await repository.getAll();
        res.status(200).send({
            message: 'Clientes',
            clientes: data
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            lastName: req.body.lastName,
            cpf: req.body.cpf,
            email: req.body.email,
            phone: req.body.phone
        });
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = req.params.customerId;
        var data = await repository.getById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.customerId;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Cliente atualizado com sucesso",
            dados: data
        });

    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }

}


exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Cliente removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};