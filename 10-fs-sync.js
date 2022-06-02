const { readFileSync, writeFileSync } = require('fs')

console.log('START')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/result-sync.txt', `here is the result ${first} ${second}`)

console.log('DONE WITH THE TASKS')

console.log('STARTING THE NEXT ONE')