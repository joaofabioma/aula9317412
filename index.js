const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.get('/sobre', (req, res) => {
    res.json({
        title: 'Sobre a aplicação',
        message: 'projeto aula9317412',
        author: 'JoaoFabioMA',
		version: '0.0.1'
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Servidor rodando em http://localhost:3000');
})