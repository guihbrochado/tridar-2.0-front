import React from "react";
import Dot from "../../../components/Dot";
import { Input } from "../../../components/ui/input";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import {
    Collapsible, CollapsibleContent,
    CollapsibleTrigger
} from "../../../components/ui/collapsible";


export default function TradeTv() {
    return (
        <div className="w-full px-10 mt-5">
            <div className="p-4">
                <p className="text-gray-light text-sm mb-1">Acompanhe todas as notícias 📹</p>
                <p className="text-white text-xl mb-2 font-bold">Trade Tv </p>
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

                    <div className="flex flex-row justify-between p-4">
                        <h2 className="text-white text-xl mb-4 font-bold"> Live Trade Tv</h2>
                        <div className="flex gap-3">
                            <Icon.Heart className="bg-gray-dark text-white p-2 rounded" size={35} />
                            <Icon.ArrowLeft className="bg-gray-dark text-white p-2 rounded" size={35} />
                            <Icon.ArrowRight className="bg-gray-dark text-white p-2 rounded" size={35} />
                        </div>
                    </div>
                    <div className="flex flex-row mb-4 ">
                        <div className="mx-1 py-2 px-4 rounded bg-gray-dark text-blue-tridar text-sm"> Descrição </div>
                        <span className="flex items-center mx-1 py-2 px-4 rounded text-white text-sm bg-gray-dark"> <Icon.User className=" text-white mr-2" size={20} /> Seguir </span>

                    </div>

                    <div className="flex flex-row">
                        <div className="bg-gray-dark p-4 ">
                            <h6 className="text-white">Descrição</h6>
                            <p className="text-gray-light mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium tenetur natus repellendus ipsa ipsam eligendi, similique commodi. Ea iure delectus accusantium totam quo repellendus soluta eaque labore vero dolorem!</p>
                        </div>
                    </div >
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


                    <div className="flex flex-row justify-between bg-gray-dark p-4 mt-4">
                        <h6 className="text-white text-sm mb-2">O que achou dessa aula?</h6>
                        <div className="flex flex-row ">
                            <Icon.SmileyAngry size={25} className="text-gray-light" />
                            <Icon.SmileySad size={25} className="text-gray-light" />
                            <Icon.SmileyMeh size={25} className="text-gray-light" />
                            <Icon.Smiley size={25} className="text-gray-light" />
                            <Icon.SmileyWink size={25} className="text-white" />
                        </div>
                    </div>

                    <h6 className="text-white mt-4"> <Dot /> Lives Relacionadas</h6>

                    <div className="flex flex-col mt-4">
                        <div className="flex flex-row justify-between bg-gray-dark mt-4 w-full ">
                            <div className="flex w-3/8 ">
                                <img className="" src="https://picsum.photos/350/50" alt="" />
                            </div>
                            <div className="flex flex-col w-5/8 p-4">
                                <p className="text-gray-light text-xs mt-3">Luis Carvalho</p>
                                <h6 className="text-white text-sm mt-3">Análise de WINFUT - IBOV - DOLV23 + ATIVOS</h6>

                                <p className="text-gray-light text-xs mt-3">Postado há 8 dias • 10k visualizações</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


        </div >
    );
}