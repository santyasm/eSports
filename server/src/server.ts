import express from "express";
const app = express();

app.get("/games/:gameId/ads", (req, res) => {
  const { gameId } = req.params;

  return res.send(gameId);
  return res.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 4, name: "Anúncio 4" },
  ]);
});

app.get("/games", (req, res) => {
    
});

app.listen(4000, () => console.log("App rodando em localhost:4000"));
