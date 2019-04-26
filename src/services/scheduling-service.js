const repository = require('../repositories/scheduling-repository')

exports.checkDate = async (initialTime, endTime) => {
    var schedules = await repository.getAll()
    var today = new Date().getTime()
    initialTime = new Date(initialTime).getTime()
    endTime = new Date(endTime).getTime()

    if (initialTime > endTime) return false

    if (initialTime < today) {
        return false
    }

    if (schedules.length <= 0) return true

     let retorno = schedules.every(schedule => {
        if (verifyDate(schedule, initialTime, endTime)){
            return true
        }
        return false
    })

    return retorno
}

function verifyDate(schedule, initialTime, endTime) {
    let scheduledInitialTime = new Date(schedule.start_time).getTime()
    let scheduledEndTime = new Date(schedule.end_time).getTime()
    if ((initialTime >= scheduledInitialTime && initialTime <= scheduledEndTime) ||
        (endTime >= scheduledInitialTime && endTime <= scheduledEndTime)) return false
    return true
}