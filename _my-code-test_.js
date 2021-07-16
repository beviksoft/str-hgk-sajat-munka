const { resolve } = require('path')
const fs = require('fs')

console.log(`----\n  1. ${resolve()}\n  2. ${__dirname}\n----`)

// ----

const readFileCallBack = (err, data) => {
    if (err) throw err
    console.log(data)
}

// read file asynch
fs.readFile('_my-code-test_.js', { encoding: 'utf-8' }, readFileCallBack)

// Promise
const promise1 = new Promise((resolve, reject) => {
    resolve('Success!')
})

promise1.then((value) => {
    console.log(`1. ${value}`)
})
