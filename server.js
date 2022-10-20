const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        error: false,
        message: 'Tipo de cambio API',
    });
});

app.listen(port);
