require('dotenv').config()
const crypt = require('crypto');
const base64Url = require('base64-url');

const header = {
    typ: 'JWT',
    alg: 'HS256'
};

const payload = {
    username: 'user@user.com',
    name: 'User',
    exp: new Date().getTime() + (60 * 60 * 1000)
};

const key = process.env.JWT_SECRET;

// Unsecure base64 encode header and payload
const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));


const signature = crypt
    .createHmac('sha256', key)
    .update(`${headerEncoded}.${payloadEncoded}`)
    .digest('bin');

console.log(`${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`);
