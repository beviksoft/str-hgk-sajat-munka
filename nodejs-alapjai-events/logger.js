const EventEmitter = require('events')

class Logger extends EventEmitter {
  success (message) {
    console.log('\x1b[32m%s\x1b[0m', message)
  }

  error (message) {
    console.error('\x1b[31m%s\x1b[0m', message)
  }
}

module.exports = Logger

// Test
// const testLogger = new EventEmitter()
// testLogger.on('event1', () => console.log('1st event'))
// testLogger.on('event2', () => console.log('2nd event - registered 1st'))
// testLogger.on('event2', () => console.log('2nd event - registered 2nd'))
// testLogger.once('event3', () => console.log('3rd event'))
// testLogger.emit('event1')
// testLogger.emit('event2')
// testLogger.emit('event3')
// testLogger.emit('event3')
