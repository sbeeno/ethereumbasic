const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const privateKey = '7647abfeafa365a400fca6686b3de0b98656d5682cfc8b3c75a08f11c97ea6dc';
const keyPair = ec.keyFromPrivate(privateKey);

const myPublicKey = keyPair.getPublic().encodeCompressed('hex');
console.log('myPublicKey:::',myPublicKey);
