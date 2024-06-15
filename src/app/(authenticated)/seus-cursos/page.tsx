import React from "react";
import CourseCardItem from "../../../components/CourseCardItem";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Button } from "../../../components/ui/button";

export default function SeusCursos() {
    return (
        <div className="bg-black">
            <div className="container mx-auto p-4">
                <p>header</p>
            </div>

            <div className="flex flex-row p-4">
                <button className="mx-1 py-2 px-4 rounded bg-gray-dark text-green-tridar text-sm"> Seus Cursos </button>
                <button className="mx-1 py-2 px-4 rounded text-white text-sm"> Sala ao Vivo </button>
                <button className="mx-1 py-2 px-4 rounded text-white text-sm"> Mentoria Black </button>
                <button className="mx-1 py-2 px-4 rounded text-white text-sm"> Podcast </button>
            </div>

            {/* <div className="rounded-lg overflow-hidden mt-10 relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-emerald-600 before:opacity-80">
                <img src="https://picsum.photos/300/200" className="absolute z-10 object-cover h-80 w-full h-full" alt="" />
                <a href="" className="absolute z-20  top-1/2  right-20 text-white -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                </a>
                <div className="relative z-20 p-10 h-full w-1/2">
                    <h2 className="text-white text-3xl font-semibold">ASA fitoriana ny filazantsara iarivo avaradrano</h2>
                    <h3 className="text-white text-xl">Docteur Irako Andriamahasoa Ammi</h3>
                </div>
            </div> */}

            <div className="w-full p-4 gap-3 flex flex-row justify-between">
                <div className="w-3/4 flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row bg-gray-dark rounded w-1/5 rounded-lg overflow-hidden mt-10 relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-black-600 before:opacity-80">
                            <img src="https://picsum.photos/400/400" className="absolute z-10 object-cover h-80 w-full h-full" alt="" />
                            <div className="flex flex-col justify-end relative z-20 p-10 h-full w-1/2 justify-end">                            
                                <h2 className="text-white text-3xl font-semibold">Luis Carvalho</h2>
                                <h3 className="text-white text-xl">Docteur Irako Andriamahasoa Ammi</h3>
                                <div className="flex flex-row justify-between items-center gap-3 mt-2">
                                    <p className="text-xs text-gray-light mt-2 text-xs">00:55:21</p>
                                    <Button className="px-2 py-1 bg-red">
                                        <Icon.Heart size={17} className="text-white" />
                                    </Button>
                                    <Button className="px-2 py-1 bg-gray-light ">
                                        <Icon.Play size={17} className="text-white" />
                                    </Button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col gap-4 ">
                    <img src="https://picsum.photos/400/200" alt="" />

                    <div className="flex flex-row -mt-8 mx-1 justify-between items-center">
                        <div className="flex flex-col">
                            <h6 className="mx-2 uppercase text-white text-xs font-thin text-white">Nome do</h6>
                            <h3 className="mx-2 -mt-2 uppercase text-lg text-white font-bold">Curso</h3>
                        </div>
                        <div className="flex flex-row items-center">
                            <h6 className="mt-1 text-xs text-gray-light">Progresso:</h6>
                            <h6 className="text-xl text-green-tridar">35%</h6>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center text-gray-light">
                        <div className="flex flex-row gap-1">
                            <Icon.Clock size={17} className="text-gray-light" />
                            <p className="text-gray-light text-xs">Duração do Curso</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <p className="text-gray-light text-xs">120h</p>
                        </div>
                    </div>

                    <Button className="px-2 py-1 bg-green-tridar text-black text-xs :hover:bg-green-800"> Entrar no Curso </Button>
                    <Button className="px-2 py-1 bg-gray-dark text-xs text-white"> Aulas Salvas </Button>
                </div>
            </div>
        </div >
    );
}
