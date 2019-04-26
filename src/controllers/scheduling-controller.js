const repository = require('../repositories/scheduling-repository')
const service = require('../services/scheduling-service')

exports.getAll = async (req, res, next) => {
    try {
        var data = await repository.getAll()
        res.status(200).send({
            message: 'Agendamentos',
            agendamentos: data
        })
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao precessar sua requisição'
        })
    }
}

exports.post = async (req, res, next) => {
    let schedule = await service.checkDate(req.body.start_time, req.body.end_time)
    if (schedule) {
        try {
            await repository.create({
                customer: req.body.customer,
                professional: req.body.professional,
                service: req.body.service,
                start_time: req.body.start_time,
                end_time: req.body.end_time
            })
            res.status(201).send({
                message: 'Agendamento cadastrado com sucesso!'
            })
        } catch (e) {
            res.status(500).send({
                message: 'Falha ao cadastrar agendamento!'
            })
        }
    }
    res.status(422).send({
        message: 'Horário indisponível, verifique sua agenda de horarios e tente novamente!'
    })
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.schedulingId
        var data = await repository.getById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar requisição',
            erro: error
        })
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.schedulingId
        if (service.checkDate(req.body.start_time, req.body.end_time)) {
            var data = await repository.put(id, req.body)
            res.status(200).send({
                message: 'Agendamento atualizado com sucesso',
                dados: data
            })
        } else {
            res.status(422).send({
                message: 'Horário indisponível, verifique sua agenda de horarios e tente novamente!'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao atualizar agendamento',
            erro: error
        })
    }
}

exports.put = async (req, res) => {
    try {
        await repository.put(req.body.schedulingId)
        res.status(200).send({
            message: 'Agendamento removido com sucesso!'
        })
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao remover agendamento'
        })
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Agendamento removido com sucesso!'
        })
    } catch (e) {
        res.status(500).send({
            message: 'Erro! Falha no processamento da requisição'
        })
    }
}