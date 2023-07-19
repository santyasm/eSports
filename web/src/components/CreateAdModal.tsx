import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "./Form/Input";
import { Check, GameController } from "@phosphor-icons/react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FormEvent, useEffect, useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
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

export function CreateAdModal() {
    const [games, setGames] = useState<Game[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState(false);

    useEffect(() => {
        axios("http://localhost:4000/games")
            .then(res => {
                setGames(res.data);
            });
    }, []);

    async function handleCreateAd(e: FormEvent){
        e.preventDefault();
        
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        console.log(data.hourStart)
        try {
            await axios.post(`http://localhost:4000/games/${data.game}/ads`, {
                "name": data.name,
                "yearsPlaying": Number(data.yearsPlaying) ,
                "discord": data.discord,
                "weekDays": weekDays.map(Number),
                "hourStart": data.hourStart,
                "hourEnd": data.hourEnd,
                "useVoiceChannel": useVoiceChannel
            })
            
            window.location.href = '/';
            alert('Anúncio criado com sucesso!')
        } catch (error) {
            console.log('Erro ao criar anúncio: ', error)
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed">
                <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
                    <Dialog.Title className="text-3xl font-black">
                        Publique um anúncio
                    </Dialog.Title>

                    <form className="mt-8 flex flex-col gap-4" onSubmit={handleCreateAd}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="game" className="game-semibold">
                                Qual o game?
                            </label>

                            <select id="game"
                                name="game"
                                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                                defaultValue={""}
                                >
                                <option value="" disabled>
                                    Selecione o game que deseja jogar
                                </option>

                                {games.map(game => {
                                    return (
                                        <option value={game.id}
                                            key={game.id}
                                        >
                                            {game.title}
                                        </option>
                                    )
                                })}

                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Seu nome (ou nickname)</label>
                            <Input id="name" placeholder="Como te chamam dentro do game?" name="name"/>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                                <Input
                                    id="yearsPlaying"
                                    type="number"
                                    placeholder="Tudo bem ser ZERO"
                                    name="yearsPlaying"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="discord">Qual ser Discord?</label>
                                <Input id="discord" placeholder="Usuario#0000" name="discord"/>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="weekDays">Quando costuma jogar?</label>

                                    <ToggleGroup.Root 
                                    type="multiple" 
                                    className="grid grid-cols-4 gap-2"
                                    value={weekDays}
                                    onValueChange={setWeekDays}
                                    >
                                    <ToggleGroup.Item 
                                        value="0"
                                        className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        title="Domingo"                                        
                                    >
                                        D
                                    </ToggleGroup.Item>

                                    <ToggleGroup.Item 
                                    value="1"
                                        className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        title="Segunda"
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item  
                                    value="2"
                                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                     title="Terça">
                                        T
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item 
                                    value="3"
                                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        title="Quarta"
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item 
                                    value="4"
                                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}                                      
                                    title="Quinta"
                                    >
                                        Q
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item 
                                    value="5" 
                                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="Sexta"
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item 
                                    value="6"
                                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                        title="Sábado"
                                    >
                                        S
                                    </ToggleGroup.Item>
                                    </ToggleGroup.Root>
                            </div>

                            <div className="flex flex-col gap-2 flex-1">
                                <label htmlFor="hourStart">Qual horário do dia?</label>

                                <div className="grid grid-cols-2 gap-2">
                                    <Input type="time" id="hourStart" placeholder="De" name="hourStart"/>
                                    <Input type="time" id="hourEnd" placeholder="Até" name="hourEnd"/>
                                </div>
                            </div>
                        </div>

                        <label className="mt-2 flex items-center gap-2 text-sm">
                            <Checkbox.Root 
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                if(checked){
                                    setUseVoiceChannel(true)
                                } else{
                                    setUseVoiceChannel(false)
                                }
                            }}
                                className="w-6 h-6 p-1 rounded bg-zinc-900">
                                <Checkbox.Indicator>
                                    <Check className="w-4 h-4 text-emerald-400" />
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            Costumo me conectar ao chat de voz
                        </label>

                        <footer className="mt-4 flex justify-end gap-4">
                            <Dialog.Close
                                type="button"
                                className="bg-zinc-500 rounded-md px-5 h-12 font-semibold hover:bg-zinc-600"
                            >
                                Cancelar
                            </Dialog.Close>
                            <button
                                type="submit"
                                className="bg-violet-500 flex items-center rounded-md px-5 h-12 font-semibold gap-3 hover:bg-violet-600"
                            >
                                <GameController size={24} />
                                Encontrar duo
                            </button>
                        </footer>
                    </form>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    );
}
