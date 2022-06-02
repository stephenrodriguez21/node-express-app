const {readFile, writeFile } = require('fs')

console.log("START")
readFile('./content/first.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(error)
        return
    }

    const first = result

    readFile('./content/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error)
            return
        }

        const second = result;

        writeFile('./content/result-async.txt', `Here is the result ${first} ${second}`, (err, res) => {
            if (err) {
                console.log(error)
                return
            }

            console.log("DONE WITH THE TASK")
        })
    
    });
});

console.log('STARTING NEXT TASK')