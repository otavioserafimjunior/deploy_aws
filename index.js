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
    return response.json({message: 'Server is up'})
})



app.listen(3333)