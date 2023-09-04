const axios = require('axios');

const url = 'https://www.buonarroti.tn.it';

const numRequests = 300;

for (let i = 0; i < numRequests; i++) {
  axios.get(url);
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200
    }
}