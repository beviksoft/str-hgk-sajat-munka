function increaseDate(date, daysNum = 3) {
   return ( date.valueOf() + daysNum * 24*60*1000 );
}

function increaseAndFormatDate(dateArray) {
    return dateArray.map( val => Intl.DateTimeFormat('hu-HU').format(increaseDate(val)) )
}

// Export
module.exports = increaseAndFormatDate