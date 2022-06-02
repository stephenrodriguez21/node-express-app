const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url == '/'){
    res.end('homepage');
  }else if(req.url == '/about'){
    setTimeout(loadLongProcess,0);  
    res.end('about');
  }else{
  res.end('sdsd');
  }
});

server.listen(3000, () => {
  console.log('Listening on port 3000...')
})

const loadLongProcess = (() => {
  for(let i = 0; i < 1000; i++){
    for(let j = 0; j < 100; j++){
      console.log(i,j)
    }
  }
});






















// class Student {
//   first_name = 'Stephen'
//   last_name = 'Rodriguez'

//   full_name = () => {
//     console.log(`${this.first_name} ${this.last_name}`)
//   }
// }

// const s1 = new Student()
// s1.full_name()
