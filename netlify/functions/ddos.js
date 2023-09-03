const axios = require('axios');

for (let i = 1; i < 30; i++) {
  axios.get(`http://funny-vacherin-bf6e08.netlify.app/.netlify/functions/ddos${i}`);
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200
    }
}