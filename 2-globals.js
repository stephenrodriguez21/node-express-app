// GLOBALS - NO WINDOW !!!!

// __dirname - path to current dir
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname, __filename)


setInterval(() => {
    console.log(__dirname, __filename)
}, 10000);



