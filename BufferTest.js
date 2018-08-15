// const http = require('http');
// let buffer = Buffer.alloc(10);
// Buffer.from('adbweubdwab', [1,2,3])
// buffer[0] = 'wo';
// buffer[1] = 36;
// console.log(buffer)

// let buffer = Buffer.from('我是一个Buffer');
// console.log(buffer)

// buffer[0] = 0xa;
// console.log(buffer[0].toString(16))

let buffer = Buffer.allocUnsafe(10);
console.log(buffer)

buffer.fill();
console.log(buffer)

buffer.write('sdnwid')
console.log(buffer)

let j1 = buffer.toJSON()
let j2 = JSON.stringify(buffer)

console.log(j1, j2)