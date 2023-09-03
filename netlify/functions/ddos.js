const http = require('http');

for (let i = 0; i < 30; i++) {

    const target = {
        hostname: `https://funny-vacherin-bf6e08.netlify.app/.netlify/functions/ddos${i}`,
        port: 80,
        path: '/',
        method: 'GET'
      }

    const req = http.request(target);
    req.end();
    
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'done',
    }
}