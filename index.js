const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Servidor rodando em http://localhost:3000');
})