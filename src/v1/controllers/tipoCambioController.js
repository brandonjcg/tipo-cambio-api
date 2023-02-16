const { getExchangeRate } = require('../services/tipoCambioService');

module.exports = async (_req, res) => {
    try {
        const data = await getExchangeRate();

        return res.json({
            error: false,
            message: 'Controller get tipo de cambio',
            info: [],
            data,
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: `${err.name}: ${err.message}`,
            info: [],
            data: {},
        });
    }
};
