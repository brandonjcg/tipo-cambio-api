const express = require('express');

const router = express.Router();

router.get('/get_tipo_cambio', require('../controllers/tipoCambioController'));

module.exports = router;
