const express = require('express');
const path = require('path');

app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
    const content = path.resolve(__dirname, './public/index.html');
    res.status(200).sendFile(content);
});


app.listen(3000, () => {
    console.log('Listening on port 3000....');
});