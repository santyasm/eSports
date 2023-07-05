import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const prisma = new PrismaClient({
	log: ['query'],
});

app.get('/games/:gameId/ads', async (req, res) => {
	const { gameId } = req.params;
	const ads = await prisma.ad.findMany({
		select: {
			id: true,
			name: true,
			weekDays: true,
			useVoiceChannel: true,
			yearsPlaying: true,
			hourStart: true,
			hourEnd: true,
		},
		where: {
			gameId,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});

	return res.json(ads);
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

app.get('/ads/:id/discord', async (req, res) => {
	const adId = req.params.id;
	const ad = await prisma.ad.findUniqueOrThrow({
		select: {
			discord: true,
		},
		where: {
			id: adId,
		},
	});

	return res.json({
		discord: ad.discord,
	});
});

app.post('/games/:id/ads', async (req, res) => {
	const gameId = req.params.id;
	const {
		name,
		yearsPlaying,
		discord,
		weekDays,
		hourStart,
		hourEnd,
		useVoiceChannel,
	} = req.body;

	const body = req.body;

	const ad = await prisma.ad.create({
		data: {
			gameId,
			name,
			yearsPlaying,
			discord,
			weekDays,
			hourStart,
			hourEnd,
			useVoiceChannel,
		},
	});
	return res.status(201).json(ad);
});

app.listen(4000, () => console.log('App rodando em localhost:4000'));
