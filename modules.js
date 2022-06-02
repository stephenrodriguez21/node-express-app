// Modules
// Nodejs uses CommonJS under the hood, EVERY FILE IN NODE IS A MODULE.

const names = require('./4-names')
const sayHi = require('./5-utils')


for(item in names){
    sayHi(item)
}
