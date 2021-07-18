// const Path = require('path')
const { createReadStream, createWriteStream } = require('fs')
const { Transform, pipeline } = require('stream')
const Logger = require('./logger')

const srcFileName = './_sample_.txt'
const dstFileName = './_sample_Copy.txt'
const successMsg = 'File transform successful.'

// It is for properly capitalize words in the stream. If the last char of the readstream's
// buffer was a space then next filled buffer's first char must be capitalized too.
let _lastCharWasSpace = false

const capitalize = (str) => str.substr(0, 1).toUpperCase() + str.substr(1, Number.Infinity)

function processCopyV1 () {
    const logger = new Logger()
    try {
        const readStream = createReadStream(srcFileName, {
            encoding: 'utf8',
            highWaterMark: 64
        })

        const upperCaseTr = new Transform({
            transform(chunk, encoding, callback) {
                let output =
                    chunk.toString().split(' ').map((item, index) =>
                    (index === 0
                        ? (_lastCharWasSpace ? capitalize(item) : item)
                        : capitalize(item)
                    )
                    ).join(' ')
                _lastCharWasSpace = output[output.length - 1] === ' '
                this.push(output)
                callback()
            }
        })

        const writeStream = createWriteStream(dstFileName)

        // Process streams
        readStream.pipe(upperCaseTr).pipe(writeStream)
        // Test streams
//        readStream.pipe(upperCaseTr).pipe(process.stdout)

        logger.success(successMsg)
    }
    catch (err) {
        logger.error(err.message)
    }
}

processCopyV1()

// Links for Error handling:
// https://stackoverflow.com/questions/27640022/how-do-i-handle-errors-for-fs-createreadstream-in-node-js
// https://stackoverflow.com/questions/39543957/multiple-fs-createreadstream-in-a-try-catch-block/39544900