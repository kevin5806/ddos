const axios = require('axios');

const url = 'http://188.216.193.238';

const numRequests = 300;

for (let i = 0; i < numRequests; i++) {
  axios.get(url);
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200
    }
}