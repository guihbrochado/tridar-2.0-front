import React from "react";
import Dot from "../../../components/Dot";
import ShopCard from "../../../components/ShopCard";
import { Button } from "../../../components/ui/button";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Slider } from "../../../components/ui/slider"


export default function LojaTrading() {
    return (
        <div className="w-full px-10 mt-5">
            {/* <div className="p-4">
                <p className="text-gray-light text-sm mb-1">Veja os vídeos da Tridar 🔥</p>
                <p className="text-white text-xl mb-2 font-bold">Vídeos</p>
            </div> */}
            <div className="flex flex-row justify-between items-center p-4">
                <div className="flex flex-row items-center p-4">

                    <button className="mx-1 py-2 px-4 rounded bg-gray-dark text-white text-sm"> Todos </button>
                    <button className="mx-1 py-2 px-4 rounded text-white text-sm"> Camisetas </button>
                    <button className="mx-1 py-2 px-4 rounded text-white text-sm"> Moletons </button>
                    <button className="mx-1 py-2 px-4 rounded text-white text-sm"> Bonés </button>
                </div>

                <div className="flex flex-row items-center p-4">
                    <div className="flex flex-col mr-2 ">
                        <div className="flex flex-row items-center gap-5 p-1 ">
                            <p className="text-white text-sm" >Faixa de preço</p>
                            <p className="text-white text-sm" >R$ 0,00 a R$ 250,00</p>
                        </div>

                        <div className="flex flex-row items-center ">

                            <Slider className="text-white w-full m-1" defaultValue={[1]} max={100} step={1} />
                        </div>
                    </div>
                    <Button className="mx-1 py-2 px-4 rounded bg-black border text-white text-sm"> <Icon.Heart size={17} className="text-white mr-4" />  Salvos </Button>
                    <Button className="mx-1 py-2 px-4 rounded bg-black border text-white text-sm"> <Icon.Funnel size={17} className="text-white mr-4" />  Filtrar </Button>
                    <Button className="mx-1 py-2 px-4 rounded bg-black border text-white text-sm"> <Icon.ShoppingCart size={17} className="text-white mr-4" />  R$ 150,00 </Button>
                </div>

            </div>


            <div className="p-4">
                <h2 className="text-white text-xl mb-4 font-bold"> <Dot /> Todos os produtos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                    <ShopCard />
                </div>
            </div>
        </div>
    );
}