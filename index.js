
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas - endpoints
app.get('/', (request, response) => {
    return response.json({message: 'Server Logic'})
})
app.get('/logic', (request, response) => {
    response.sendFile(__dirname + '/src/logic.html')
})
app.get('/logic/home', (request, response) => {
    return response.json({message: 'Server Atualizou home page'})
})


app.listen(3333)