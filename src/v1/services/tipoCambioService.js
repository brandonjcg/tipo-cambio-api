const xmlParser = require('xml2json');
const axios = require('axios');
const https = require('https');

/**
 * @function services.tipoCambioService.getExchangeRate
 * @description - Get the exchange rate from DOF
 * @returns {object} - Exchange rate and date
 */
const getExchangeRate = async () => {
    const axiosInstance = axios.create({
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    });

    const response = await axiosInstance.get('https://www.dof.gob.mx/indicadores.xml');

    if (!response.data) throw new Error('Error con el servicio del DOF');

    const jsonObject = JSON.parse(xmlParser.toJson(response.data));

    const { description, pubDate } = jsonObject.rss.channel.item
        .find((item) => item.title === 'DOLAR');

    return {
        tipoCambio: parseFloat(description),
        fecha: new Date(pubDate).toISOString().split('T')[0],
    };
};

module.exports = {
    getExchangeRate,
};
