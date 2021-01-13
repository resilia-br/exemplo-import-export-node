console.log('=== Bem vindo ao importador.js ===');

console.log('Importando uma variável:');
const olaMundoVar = require('./exportador-var');
console.log('\t' + olaMundoVar);

console.log('Importando uma função:');
const olaMundoFunc = require('./exportador-func');
console.log('\t' + olaMundoFunc());

console.log('Importando um objeto:');
const olaMundoObj= require('./exportador-obj');
console.log('\t' + olaMundoObj.msg);

console.log('Importando um objeto desestruturado:');
const {msg1, msg2} = require('./exportador-obj-destruct');
console.log('\t' + msg1 + msg2);
