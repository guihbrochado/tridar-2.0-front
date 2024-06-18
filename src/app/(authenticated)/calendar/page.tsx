import React from "react";
import Hero from "../../../components/Hero";
import Dot from "@/components/Dot";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import CardSugestões from "@/components/CardSugestões";
import { Button } from "@/components/ui/button";

export default function Calendar() {
    return (
        <div className="w-full items-center justify-center">
            <Hero />
            <div className="flex">
                <div className="container mx-auto p-4">
                    <p className="text-gray-light text-sm mb-1">Marque seus eventos importantes 📅</p>
                    <div className="flex">
                        <Dot />
                        <p className=" mx-2 text-white text-xl mb-2 font-bold">Calendário</p>
                    </div>
                </div>

                <div className="w-full justify-center items-center">
                    <div className="w-full flex justify-center items-center">
                        <div className="flex ">
                            <Dot />
                            <p className="mx-2 text-white text-sm mb-2 font-bold">Novembro de 2023</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="bg-black-tridar-100 p-2 rounded">
                                <Icon.ArrowLeft
                                    size={21}
                                    color="#BABABA"
                                />
                            </div>
                            <div className="bg-black-tridar-100 p-2 rounded">
                                <Icon.ArrowRight
                                    size={21}
                                    color="#BABABA"
                                />
                            </div>
                        </div>

                        <div className="mx-3 py-2 px-4 rounded border border-gray-dark text-white text-sm"> Hoje </div>

                        <div className="flex flex-row border border-gray-dark rounded mx-3">
                            <div className="py-2 px-4 rounded bg-gray-dark text-white text-sm"> Mês </div>
                            <div className="py-2 px-4 rounded text-white text-sm"> Semana </div>
                            <div className="py-2 px-4 rounded text-white text-sm"> Dia </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-9">

                <div className="flex w-[100%] items-start justify-center gap-6">
                    <div className="grid w-[70%] items-center gap-3 border border-gray-dark p-4 rounded ">
                        <p className="mx-2 text-white text-ms mb-2 font-bold">Calendario aqui</p>
                    </div>

                    <div className="w-[30%] items-start justify-start">
                        <div className="w-full flex justify-between">
                            <div className="flex ">
                                <Dot />
                                <p className="mx-2 text-white text-ms mb-2 font-bold">Eventos Marcados</p>
                            </div>
                        </div>

                        {/* Mesmo dia */}
                        <div className="items-center justify-center w-full mt-3 gap-3 border border-gray-dark rounded" >

                            <div className="bg-black-tridar-100 flex justify-between items-center p-3">
                                <p className="text-white text-ms font-semibold">16 de Novembro</p>
                                <p className="bg-gray-dark text-white text-xs p-1 rounded">Segunda-feira</p>
                            </div>

                            {/* Mesmo dia */}
                            <div className="bg-transparent flex justify-between items-center p-3">
                                <div className="flex items-center justify-center">
                                    <div className="w-[10px] h-[10px] rounded bg-green-tridar mx-2" />
                                    <p className="text-white text-ms font-semibold">Evento Qualquer</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-white text-xs rounded">às 15h00</p>
                                    <div className="bg-gray-dark mx-2 p-1 rounded">
                                        <Icon.Eye
                                            size={21}
                                            color="white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Mesmo dia */}
                            <div className="bg-transparent flex justify-between items-center p-3">
                                <div className="flex items-center justify-center">
                                    <div className="w-[10px] h-[10px] rounded bg-red mx-2" />
                                    <p className="text-white text-ms font-semibold">Evento Qualquer</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-white text-xs rounded">às 15h00</p>
                                    <div className="bg-gray-dark mx-2 p-1 rounded">
                                        <Icon.Eye
                                            size={21}
                                            color="white"
                                        />
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Outro  dia */}
                        <div className="items-center justify-center w-full mt-3 gap-3 border border-gray-dark rounded" >

                            <div className="bg-black-tridar-100 flex justify-between items-center p-3">
                                <p className="text-white text-ms font-semibold">16 de Novembro</p>
                                <p className="bg-gray-dark text-white text-xs p-1 rounded">Quinta-feira</p>
                            </div>

                            {/* Mesmo dia */}
                            <div className="bg-transparent flex justify-between items-center p-3">
                                <div className="flex items-center justify-center">
                                    <div className="w-[10px] h-[10px] rounded bg-blue-tridar mx-2" />
                                    <p className="text-white text-ms font-semibold">Evento Qualquer</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-white text-xs rounded">às 15h00</p>
                                    <div className="bg-gray-dark mx-2 p-1 rounded">
                                        <Icon.Eye
                                            size={21}
                                            color="white"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div >
    );
}
