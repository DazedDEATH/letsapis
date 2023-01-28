const https = require('https');
const url = `https://api.breakingbadquotes.xyz/v1/quotes/10`;

function esSaul(q) {
    return q.author === 'Saul Goodman';
}

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const quotes = JSON.parse(data);
        console.log(quotes.find(esSaul))
        
    });
}).on('error', (err) => {
    console.log(`Error: ${err.message}`);
});



