const { createReadStream } = require('fs')
const filePath = './content/big.txt';


// read chunk of file using stream
const stream = createReadStream(filePath, {highWaterMark: 9, encoding: 'utf-8'});
const readDataChunk = (data) => { console.log(`Read : ${data}`) };
stream.on('data', readDataChunk);







