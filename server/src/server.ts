import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient({});

app.get("/games/:gameId/ads", (req, res) => {
  const { gameId } = req.params;

  return res.send(gameId);
});

app.get("/games", async (req, res) => {
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

app.listen(4000, () => console.log("App rodando em localhost:4000"));
