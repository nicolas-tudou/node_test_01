//文件同步读取

let fs = require('fs');

// fd = fs.openSync('./file1.txt', 'w')
// console.log(fd)
// fs.closeSync(fd)

// fs.open('./file1.txt', 'r', (err, fd) => {
//     if(err) {
//         throw Error(err);
//     }
//     var buffer = Buffer.alloc(10);
//     var readResult = fs.readSync(fd, buffer, 0, buffer.length, 0);
//     console.log(buffer.toString());
//     console.log(readResult)
// })

// fs.open('./file1.txt', 'r', (err, fd) => {
//     if(err) {
//         throw Error(err);
//     }
//     var buffer = Buffer.alloc(10);
//     fs.read(fd, buffer, 0, 10, 7, (err, res) => {
//         var str = buffer.toString()
//         console.log(str.split(''))
//     })
// })

// fs.open('./file1.txt', 'w', (err, fd) => {
//     let buffer = Buffer.from('我时从buffer来的！')
//     fs.write(fd, buffer, (err, n) => {
//         if(err) {
//             throw Error(err)
//         }
//         console.log(n)
//     })
// })

// 使用buffer时编码格式无效

//写入流与读取流

let rs = fs.createReadStream('file1.txt', {highWaterMark: 2});
let ws = fs.createWriteStream('file2.txt');

rs.once('open', () => {
    console.log('读取流打开');
})

rs.once('close', () => {
    console.log('读取流关闭');
})

rs.on('data', (chunk) => {
    console.log(chunk.toString());
})
rs.once('finish', () => {
    console.log('读取流结束');
})

ws.once('open', () => {
    console.log('写入流打开')
})

ws.once('close', () => {
    console.log('写入流关闭')
})

rs.pipe(ws)

// console.log(fs.statSync('file1.txt'))