import express from 'express'
import { PrismaClient } from '@prisma/client'

// HTTP methods / API RESTful
// HTTP Codes - 2** Sucesso, 3** Redirecionamento, 4** Erro pela aplicação, 5** Erros inesperados (principais)

const app = express()
const prisma = new PrismaClient()

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    
    return response.json(games);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourEnd: true,
            hourStart: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })

    return response.json(ads)
})

app.get('/ads/:id/discord', (request, response) => {
    //const asId = request.params.id;

    return response.json([])
})

app.listen(3333)