import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name:'id é o 1'},
        {id: 2, name:'id é o 2'},
        {id: 3, name:'id é o 3'}
    ])
})

app.listen(3333)