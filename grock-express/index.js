const path = require('path')
const chalk = require('chalk') // подключение библиотеки chalk
const express = require("express"); // подключение библиотеки express
const app = express() // запуск 
const port = 3000

app.get('/', (req, res) => {
    res.send('hello, world')
})

app.use('/site', express.static(path.resolve(__dirname, 'public')))

app.get('/art', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'article.txt'))
})

app.listen(port, () => {
            console.log(`Подключение к ${chalk.bold(`localhost:${port}`)}`);
})