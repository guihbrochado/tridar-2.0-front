import React from "react";
import Dot from "../../../components/Dot";
import { Input } from "../../../components/ui/input";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import {
    Collapsible, CollapsibleContent,
    CollapsibleTrigger
} from "../../../components/ui/collapsible";


export default function CursoAssistir() {
    return (
        <div className="w-full px-10 mt-5">
            <div className="p-4">
                <p className="text-gray-light text-sm mb-1">Acompanhe todas as notícias 📹</p>
                <p className="text-white text-xl mb-2 font-bold">Nome do Curso </p>
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
                    <div className="flex flex-row justify-between bg-gray-dark p-4">
                        <h6 className="text-white text-sm mb-2">O que achou dessa aula?</h6>
                        <div className="flex flex-row ">
                            <Icon.SmileyAngry size={25} className="text-gray-light" />
                            <Icon.SmileySad size={25} className="text-gray-light" />
                            <Icon.SmileyMeh size={25} className="text-gray-light" />
                            <Icon.Smiley size={25} className="text-gray-light" />
                            <Icon.SmileyWink size={25} className="text-white" />
                        </div>
                    </div>

                    <h6 className="text-white my-4"> <Dot /> Demais aulas</h6>

                    <Collapsible className="bg-gray-light-2 rounded-lg w-full">
                        <CollapsibleTrigger className="text-white p-4 flex flex-row">
                            <div className="flex flex-row justify-between w-full items-center ">
                                <div className="flex flex-row  items-center ">
                                    <span className="text-white text-sm"> Título do modulo </span>
                                    <span className="p-1 ml-2 text-xs bg-gray-light-3 text-white rounded">14 Aulas</span>
                                </div>
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="bg-gray-dark text-gray-light p-4">
                            Yes. Free to
                        </CollapsibleContent>
                    </Collapsible>                    
                </div>

            </div>

            <div className="flex flex-row justify-between p-4 w-3/4">
                <h2 className="text-white text-xl mb-4 font-bold"> Aula 01</h2>
                <div className="flex gap-3">
                    <Icon.Heart className="bg-gray-dark text-white p-2 rounded" size={35} />
                    <Icon.ArrowLeft className="bg-gray-dark text-white p-2 rounded" size={35} />
                    <Icon.ArrowRight className="bg-gray-dark text-white p-2 rounded" size={35} />
                </div>
            </div>
            <div className="flex flex-row mb-4">
                <div className="mx-1 py-2 px-4 rounded bg-gray-dark text-blue-tridar text-sm"> Descrição </div>
                <div className="mx-1 py-2 px-4 rounded text-white text-sm"> Materiais </div>
                <div className="mx-1 py-2 px-4 rounded text-white text-sm"> Comentários </div>
            </div>

            <div className="flex flex-row">
                <div className="w-3/4 bg-gray-dark p-4">
                    <h6 className="text-white">Descrição</h6>
                    <p className="text-gray-light mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium tenetur natus repellendus ipsa ipsam eligendi, similique commodi. Ea iure delectus accusantium totam quo repellendus soluta eaque labore vero dolorem!</p>
                </div>
            </div >
        </div >
    );
}