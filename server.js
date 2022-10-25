const express = require('express');
const v1Router = require('./src/v1/routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        error: false,
        message: 'Tipo de cambio API',
    });
});
app.use('/api/v1', v1Router);

app.listen(port);
