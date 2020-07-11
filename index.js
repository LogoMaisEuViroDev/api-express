const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        id: 1,
        name: 'manolo',
        age: 20
    });
})

app.get('/outra-rota', (req, res) => {
    res.send('Olá Mundo da outra rota!!!');
})

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});
