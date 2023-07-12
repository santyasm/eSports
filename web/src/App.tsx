import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useKeenSlider } from "keen-slider/react"
import imgLogo from "./assets/Logo.svg";
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";
import "keen-slider/keen-slider.min.css"


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:4000/games")
        .then(res => {
            setGames(res.data);
        });
}, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={imgLogo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-colorful-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

<div className="max-w-[80vw] max-h-[100vh] ">
      <div className="flex gap-6 mt-16 overflow-x-auto scrollbar-hide">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>

  );
}

export default App;
