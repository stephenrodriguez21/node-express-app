const { readFile, writeFile } = require('fs').promises
const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url == '/'){
    makeFile();
    res.end('File Processed');
  }else {
    res.end('No File was processed!!!');
  }
});

server.listen(9000, ()=> {
  console.log('Listening on port 9000.....')
});


const makeFile = async () => {

  const first = await readFile('./content/first.txt', 'utf-8');
  console.log("failer error")

  const second = await readFile('./content/second.txt', 'utf-8');

  await writeFile('./content/final-output.txt', `Final output: ${first} ${second}`);

  console.log(first, second);

  setTimeout(()=> console.log('Setting timeout'))
  process.nextTick(() => console.log("IIm ticking...."))

  console.log("Print end")
}

// makeFile();