const express = require ('express')
const path=require('path')
const port = 3000
const app = express()

const public = 'public'

app.use((req, res, next)=>{
    console.log(`recibida la petición : ${req.url}`)
    next()
})

app.use(express.static(path.join(__dirname, public)))

app.get('/pepe', (req, res) => {
    res.send('<h1>Hola Pepe</h1>')
})


app.get('/', (req, res) => {
    res.send('<h1>El servidor Express dice "Hola Mundo"</h1>')
})


app.listen(
    port,() => {
        console.log('Server ejecutándose en http://localhost:' + port)
    })