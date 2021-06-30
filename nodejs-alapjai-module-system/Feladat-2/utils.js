function generateUserList(userArray) {
    return userArray.map(user => ({ isAdult: user.age >= 18, fullName: `${user.firstName} ${user.lastName}` }))
}

function getUserNames(userArray) {
    return userArray.map(user => `${user.firstName} ${user.lastName}`).join(', ')
}


// Export
module.exports = Object.freeze(
  {
    generateUserList,
    getUserNames
  }
)