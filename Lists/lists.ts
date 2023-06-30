const a = new ArrayBuffer(6);
console.log('a ', a);

const a8 = new Uint8Array(a);

console.log('a8 ', a8);

a8[0] = 45;
a8[2] = 45;

console.log('a ', a);

const a16 = new Uint16Array(a);

console.log('a16 ', a16);

a16[2] = 0x4545;

console.log('a ', a);
