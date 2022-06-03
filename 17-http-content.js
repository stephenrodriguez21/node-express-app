const http = require('http');

http.createServer((req, res) => {
  if(req.url == '/'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    let ads = {
      "name": "Stephen Rodrigues"
    };

    res.write(JSON.stringify(ads));
  }else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>Page not found!!</h1>');
  }
  res.end();

}).listen(9000);