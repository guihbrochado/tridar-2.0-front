import React from "react";
import Dot from "../../../components/Dot";
import { Input } from "../../../components/ui/input";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function TridarNews() {
    return (
        <div className="max-w-1680 mx-10 px-10 mt-5">
            <div className="p-4">
                <p className="text-gray-light text-sm mb-1">Acompanhe todas as notícias 📹</p>
                <p className="text-white text-xl mb-2 font-bold">Tridar News</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-3/4 h-96">
                    <iframe
                        src="https://www.youtube.com/embed/VhnNSZHGYFE?si=PEwRU_eVaWBLn6sR"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>

                <div className="w-full md:w-1/4 flex flex-col">
                    <div className="flex flex-row justify-between">
                        <h6 className="text-white text-lg mb-2">Chat Ao Vivo</h6>
                        <div className="flex flex-row mt-2">
                            <span>
                                <Icon.Eye className="text-gray-light" size={15} />
                            </span>
                            <span className="text-gray-light text-xs ml-2">236 pessoas assistindo</span>
                        </div>
                    </div>
                    <hr className="my-2" />
                    <div className="flex flex-col">
                        <div className="flex flex-row ">
                            <img className="rounded-full p-3" src="https://picsum.photos/40" alt="" />
                            <div className="flex flex-col">
                                <h6 className="text-white text-sm mt-3">Sophia Costa</h6>
                                <p className="text-gray-light text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <input className="focus:outline-none w-full rounded-r rounded-lg p-2 text-sm bg-gray-dark text-gray-light" placeholder="Digite sua mensagem..." />
                        <button className="bg-white text-white rounded-r p-3">
                            <Icon.PaperPlaneTilt size={17} color="black" />
                        </button>
                    </div>

                    <div className="flex flex-row justify-between ">

                        <div className="flex flex-row justify-between items-center rounded p-2 text-center gap-5 mt-3 w-full bg-gray-dark">
                            <h6 className="text-white text-sm ">O que achou dessa aula?</h6>
                            <div className="flex flex-row ">
                                <Icon.SmileyAngry size={25} className="text-gray-light" />
                                <Icon.SmileySad size={25} className="text-gray-light" />
                                <Icon.SmileyMeh size={25} className="text-gray-light" />
                                <Icon.Smiley size={25} className="text-gray-light" />
                                <Icon.SmileyXEyes size={25} className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className="p-4">
                <div className="flex flex-row justify-between p-4">
                    <h2 className="text-white text-xl mb-4 font-bold"> <Dot /> Últimos Lançamentos</h2>
                    <div className="flex flex-row">
                        <div className="mx-1 py-2 px-4 rounded bg-gray-dark text-white text-sm"> Todos </div>
                        <div className="mx-1 py-2 px-4 rounded text-white text-sm"> Seguindo </div>
                        <div className="mx-1 py-2 px-4 rounded text-white text-sm"> Canais </div>
                        <div className="mx-1 py-2 px-4 rounded text-white text-sm"> Trade TV </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="bg-gray-dark rounded ">
                        <img
                            src="https://picsum.photos/200/100"
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
                            src="https://picsum.photos/200/100"
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
                            src="https://picsum.photos/200/100/"
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
                            src="https://picsum.photos/200/100/"
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
                            src="https://picsum.photos/200/100/"
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
        </div >
    );
}