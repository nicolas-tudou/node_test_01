var http = require('http');

http.createServer((req, res) => {
    res.setHeader('content-type', 'text/plain;charset=utf-8')
    res.write('服务器正式启动！！！')
    res.end('over')
}).listen(3000, () => {
    console.log('服务器启动')

});


