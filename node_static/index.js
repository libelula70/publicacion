const express = require ('express')
const path=require('path')
const port = 3000
const cors = require ('cors')
const app = express()

const public = 'public'

app.use(cors())

app.use((req, res, next)=>{
    console.log(`recibida la petición : ${req.url}`)
    next()
})

app.use(express.static(path.join(__dirname, public)))

app.get('/api/users', (req, resp) => {
    let oDatos= {results: []}
    console.log(oDatos)
    resp.json(oDatos)
})

app.listen(
    port,() => {
        console.log('Server ejecutándose en http://localhost:' + port)
    })