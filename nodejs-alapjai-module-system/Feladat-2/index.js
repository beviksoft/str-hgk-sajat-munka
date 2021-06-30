const utils = require('./utils')

testArray = [
    { firstName: 'Aaaa', lastName: 'Bbbb', age: 15 },
    { firstName: 'Cccc', lastName: 'Dddd', age: 18 },
    { firstName: 'Eeee', lastName: 'Ffff', age: 22 }
]

console.log(utils.generateUserList(testArray))
console.log(utils.getUserNames(testArray))
