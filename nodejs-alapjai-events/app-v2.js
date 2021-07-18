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

function processCopyV2 () {
    const logger = new Logger()

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
    pipeline(
        readStream,
        upperCaseTr,
        writeStream,
        (err) => {
            if (err) {
                logger.success(successMsg)
            } else {
                logger.error(err.message)
            }
        }
    )
}

processCopyV2()
