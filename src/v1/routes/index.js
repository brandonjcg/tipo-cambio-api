const express = require('express');

const router = express.Router();

router.route('/').get((req, res) => {
    res.json({
        error: false,
        message: 'Tipo de cambio API v1',
    });
});

module.exports = router;
