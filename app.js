const express = require('express');
const path = require('path');
const { products } = require('./public/data');
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

const loadProcess = (id, cb) => {
    for(let i=0; i< id; i++){
        for(let j=0; j< id; j++){
           console.log(j) 
        }
    }
    cb();
}

const setImmediatePromise = () => {
    return new Promise((resolve) => {
        setImmediate(() => resolve());
      });
}

const doWork = () => {
    for(let i = 0; i < 10000; i++){
        for(let j = 0; j < 100; j++){
            console.log(i);
        };
    };
}

const loadData = () => {
    console.log('LODSDSD')
        return new Promise((resolve) => {
            //resolve(doWork());
            console.log('read')
            setImmediate(() => resolve(doWork()));
        });
}

app.get('/products/:id', async function computeWSetImmediate(req, res) {
    let total = 0;
    const { id } = req.params;

    await loadData();

    //setImmediate(() => await loadData());

        // for (let i = 0; i < id; i++) {
        //     for (let j = 0; j < id; j++) {
        //     total += i;
        //     console.log(total);
        //     await setImmediatePromise();
        //     }
        //   }

    //   for (let i = 0; i < id; i++) {
    //     for (let j = 0; j < id; j++) {
    //     total += i;
    //     await setImmediatePromise();
    //     }
    //   }

      res.status(200).send('done!!!');



    //const { id } = req.params;

    // loadProcess(id, () => {
    //     res.status(200).send('ok');
    // });

    // for(let i=0; i< id; i++){
    //     for(let j=0; j< id; j++){
    //        console.log(j) 
    //     }
    // }
    // res.status(200).send('ok');



    // const { id } = req.params;
    // if(!id){
    //     res.status(401).send('Bad Request!')
    // }

    // const product = products.filter(item => {
    //     return item.id === Number(id)
    // });

    // if(product?.length === 0) res.status(404).send('Item not found!');
    // res.status(200).json(product);
});




app.listen(3000, () => {
    console.log('Listening on port 3000....');
});