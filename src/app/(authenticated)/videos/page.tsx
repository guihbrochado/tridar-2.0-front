import React from "react";

export default function Videos() {
    return (
        <div className="container ">
            <div className="container mx-auto p-4">
                <p className="text-gray-light text-sm mb-1">Veja os vídeos da Tridar 🔥</p>
                <p className="text-white text-xl mb-2 font-bold">Vídeos</p>
            </div>
            <div className="container mx-auto p-4 ">
                <h2 className="text-white text-xl mb-4 font-bold"> Últimos Lançamentos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-dark rounded ">
                        <img
                            src="https://picsum.photos/200/"
                            alt=""
                            className="w-full h-auto object-contain rounded-t rounded-lg "
                        />

                        <div className="p-4">
                            <p className="text-xs text-gray-light mt-2 ">Luis Carvalho  </p>
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
                            <p className="text-xs text-gray-light mt-2 ">Luis Carvalho  </p>
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
                            <p className="text-xs text-gray-light mt-2 ">Luis Carvalho  </p>
                            <p className="text-white mt-2 ">Análise de WINFUT - IBOV - DOLV23 + ATIVOS  </p>
                            <p className="text-xs text-gray-light mt-2 ">Postado há 8 dias    •    10k visualizações  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
