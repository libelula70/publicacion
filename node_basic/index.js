const http = require('http')

const port = 3000

http.createServer( (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>El servidor Node de Ana dice "Hola Mundo"</h1>')
}).listen(port)

console.log('Server ejecutandose en http://localhost:' + port)
