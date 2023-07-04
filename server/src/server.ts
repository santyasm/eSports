import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({
	log: ['query'],
});

app.get('/games/:gameId/ads', async (req, res) => {
	const { gameId } = req.params;
	const ads = await prisma.ad.findMany({
		where: {
			gameId,
		},
	});

	return res.send(ads);
});

app.get('/games', async (req, res) => {
	try {
		const games = await prisma.game.findMany({
			include: {
				_count: {
					select: {
						ads: true,
					},
				},
			},
		});

		return res.json(games);
	} catch (error) {}
});

app.post('/ads', (req, res) => {
	return res.status(201).json([]);
});

app.listen(4000, () => console.log('App rodando em localhost:4000'));
