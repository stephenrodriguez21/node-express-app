const http = require('http');
const { createReadStream } = require('fs');

http.createServer((req, res) => {
    const stream = createReadStream('./content/big.txt', 'utf-8');
    stream.on('open', () => {
        stream.pipe(res);
    });


}).listen(9900, () => {
    console.log(`listening on port 9900`);
});