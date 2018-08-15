// let buffer0 = Buffer.alloc(10); //分配十个字节的buffer 二进制数据 显示为16进制
// console.log(buffer0)

// unicode: 0000 -- ffff  -> 00000000 -- ffffffff

// let buffer1 = Buffer.from('大家好');
// console.log(buffer1)

// let buffer2 = Buffer.allocUnsafe(10)
// console.log(buffer2)
// console.log(buffer2.fill())

// let buffer3 = Buffer.alloc(20);
// console.log(buffer3.write('adadewd', 3, 1))
// console.log(buffer3)
// let buffJson = buffer3.toJSON()
// let buffObj = JSON.stringify(buffJson)
// console.log(buffJson)
// console.log(buffObj)

// let buffer4_1 = Buffer.from('aza');
// let buffer4_2 = Buffer.from('zaz');

// let buffer4_totle = Buffer.concat([buffer4_1, buffer4_2])
// console.log(buffer4_totle.toString())

// let res0 = buffer4_1.compare(buffer4_2);
// let res1 = buffer4_1.compare(buffer4_2, 1, 2, 1, 2);
// //buffer4_1.compare(buffer4_2, 1(buffer4_2 begin), 2(buffer4_2 end), 1(buffer4_1 begin), 2(buffer4_1 end));
// console.log(res1)

// let buffer5_1 = Buffer.from('abcdefg')
// let buffer5_2 = Buffer.alloc(10)

// console.log(buffer5_2)

// let bufferCopy0 = buffer5_1.copy(buffer5_2, 1)
// console.log(bufferCopy0, buffer5_2)

// let bufferCopy1 = buffer5_1.copy(buffer5_2, 1, 1)
// console.log(bufferCopy1, buffer5_2)

// let bufferCopy2 = buffer5_1.copy(buffer5_2, 1, 1, 3)
// console.log(bufferCopy2, buffer5_2)


// let buffer6 = Buffer.from('abcdefg')
// let res = buffer6.slice(1, 3)
// console.log(res.toString(), buffer6.toString())
// // 裁剪之后任然指向同意内存空间
// res[1] = 41;
// console.log(res.toString(), buffer6.toString())