import express from 'express'

const app = express()

// HTTP methods / API RESTful
// HTTP Codes - 2** Sucesso, 3** Redirecionamento, 4** Erro pela aplicação, 5** Erros inesperados (principais)

app.get('/games', (request, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
    //const gameId = request.params.id;

    return response.json([
        {id: 1, name:'id é o 1'},
        {id: 2, name:'id é o 2'},
        {id: 3, name:'id é o 3'}
    ])
})

app.get('/ads/:id/discord', (request, response) => {
    //const asId = request.params.id;

    return response.json([])
})

app.listen(3333)