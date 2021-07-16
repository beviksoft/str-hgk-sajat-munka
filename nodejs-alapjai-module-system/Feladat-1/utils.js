/* eslint-disable indent */
function increaseDate (date, daysNum = 3) {
    return date.setDate(date.getDate() + daysNum)
}

function increaseAndFormatDate (dateArray) {
    return dateArray.map(val => Intl.DateTimeFormat('hu-HU').format(increaseDate(val)))
}

// Export
module.exports = increaseAndFormatDate
