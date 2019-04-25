const repository = require('../repositories/scheduling-repository')

exports.checkDate = function (initialTime, endTime) {
    var schedules = repository.getAll()
    var initialTime = new Date(initialTime).getTime()
    var endTime = new Date(endTime).getTime()
    var today = new Date()

    if (initialTime < today) return  false

    if (schedules.length <= 0) return true

    schedules.forEach(verifyDate(initialTime, endTime))
    return false

}

function verifyDate(schedule, initialTime, endTime) {
    scheduledInitialTime = new Date(schedule.start_time).getTime()
    scheduledEndTime = new Date(schedule.end_time)
    if (initialTime >= scheduledInitialTime && endTime <= scheduledEndTime) return true
}