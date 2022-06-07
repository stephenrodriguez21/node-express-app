const express = require('express');
const path = require('path');
const { products, users } = require('./public/data');
const validator = (req, res, next) => {
    console.log('Inside Validators!');
    next();
}

app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
    const content = path.resolve(__dirname, './public/index.html');
    res.status(200).sendFile(content);
});

app.get('/products', (req, res) => {
    console.log(products)
    res.status(200).json(products);
});

app.get('/products/:id', validator, (req, res) => {
    const { id } = req.params;
    if(!id){
        res.status(401).send('Bad Request!')
    }

    const product = products.filter(item => {
        return item.id === Number(id)
    });

    if(product?.length === 0) res.status(404).send('Item not found!');
    res.status(200).json(product);
});

const loadUsers = () => {
    return new Promise((resolve, reject) => {
        try {  
            resolve(users)
        } catch (e){
            reject(e);
        }
    });
};

app.get('/users', async (req, res) => {
    const users = await loadUsers()
    console.log(users)
    res.status(200).json(users);
});




app.listen(3000, () => {
    console.log('Listening on port 3000....');
});