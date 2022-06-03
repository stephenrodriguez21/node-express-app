const { writeFile } = require('fs').promises
const filePath = './content/big.txt';

const generateBigFile = async (path) => {
  for(let i = 0; i< 10000; i++){
    await writeFile(path, `content: ${i}`, {flag: 'a'});
  }
};

//create a big text file
generateBigFile(filePath);