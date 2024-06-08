import React from "react";
import Dot from "../../../components/Dot";
import { Input } from "../../../components/ui/input";

export default function Videos() {
    return (
        <div className="w-full px-10 mt-5">
            <div className="p-4">
                <p className="text-gray-light text-sm mb-1">Veja os vídeos da Tridar 🔥</p>
                <p className="text-white text-xl mb-2 font-bold">Vídeos</p>
            </div>
            <div className="flex flex-row p-4">
                <div className="mx-1 py-2 px-4 rounded bg-gray-dark text-green-tridar text-sm"> Explorar </div>
                <div className="mx-1 py-2 px-4 rounded text-white text-sm"> Seguindo </div>
                <div className="mx-1 py-2 px-4 rounded text-white text-sm"> Estações </div>
                <div className="mx-1 py-2 px-4 rounded text-white text-sm"> Trade TV </div>
            </div>
            <div className="p-4">
                <h2 className="text-white text-xl mb-4 font-bold"> <Dot /> Últimos Lançamentos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-dark rounded ">
                        <img
                            src="https://picsum.photos/200/"
                            alt=""
                            className="w-full h-auto object-contain rounded-t rounded-lg "
                        />

                        <div className="p-4">
                            <p className="text-xs text-gray-light mt-2 ">Luis Carvalho <Dot />  </p>
                            <p className="text-white mt-2 ">Análise de WINFUT - IBOV - DOLV23 + ATIVOS  </p>
                            <p className="text-xs text-gray-light mt-2 ">Postado há 8 dias    •    10k visualizações  </p>
                        </div>
                    </div>
                    <div className="bg-gray-dark rounded ">
                        <img
                            src="https://picsum.photos/200"
                            alt=""
                            className="w-full h-auto object-contain rounded-t rounded-lg "
                        />

                        <div className="p-4">
                            <p className="text-xs text-gray-light mt-2 ">Luis Carvalho <Dot /> </p>
                            <p className="text-white mt-2 ">Análise de WINFUT - IBOV - DOLV23 + ATIVOS  </p>
                            <p className="text-xs text-gray-light mt-2 ">Postado há 8 dias    •    10k visualizações  </p>
                        </div>
                    </div>
                    <div className="bg-gray-dark rounded ">
                        <img
                            src="https://picsum.photos/200//"
                            alt=""
                            className="w-full h-auto object-contain rounded-t rounded-lg "
                        />

                        <div className="p-4">
                            <p className="text-xs text-gray-light mt-2 ">Luis Carvalho <Dot /> </p>
                            <p className="text-white mt-2 ">Análise de WINFUT - IBOV - DOLV23 + ATIVOS  </p>
                            <p className="text-xs text-gray-light mt-2 ">Postado há 8 dias    •    10k visualizações  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
