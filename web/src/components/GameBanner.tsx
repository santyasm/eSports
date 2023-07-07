interface GameBannerProps{
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
return (
  <a href="#" className="relative rounded-lg overflow-hidden flex-none">
    <img src={props.bannerUrl} alt="" className="max-h-[250px]"/>

    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block">
        {props.title}
      </strong>
      <span className="text-zinc-300 font-sm block mt-1"> {props.adsCount} anúncio(s) </span>
    </div>
  </a>
);
}