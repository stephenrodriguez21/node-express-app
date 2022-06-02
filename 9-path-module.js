const path = require('path')

console.log(path.sep)
console.log(module)
// console.log("-------------------------------------------------")
// console.log(process)


const filePath = path.join('/content/', 'subfolder', 'test.txt')

console.log(path.basename(filePath))