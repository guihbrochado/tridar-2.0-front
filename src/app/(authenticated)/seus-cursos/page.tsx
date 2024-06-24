import React from "react";
import CourseCardItem from "../../../components/CourseCardItem";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Button } from "../../../components/ui/button";
import Hero from "../../../components/Hero";
import CourseCardInfo from "@/components/CourseCardInfo";

export default function SeusCursos() {
    return (
        <div className="container max-w-1680 mx-10 px-10 mt-5">
            <div className="container mx-auto p-4">
                <Hero />
            </div>

            <div className="flex flex-row p-4">
                <button className="mx-1 py-2 px-4 rounded bg-gray-dark text-blue-tridar text-sm"> Seus Cursos </button>
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

            <div className="flex flex-col md:flex-row justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-row w-full md:w-3/4">
                    <div className="flex flex-row">
                        <img className="h-48" src="https://picsum.photos/400/100" alt="" />
                    </div>

                    <div className="flex flex-col p-4 w-full">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-white text-xl font-thin uppercase">Nome do</h2>
                            <p className="text-white text-sm mr-4">13 Aulas</p>
                        </div>
                        <h3 className="text-white text-3xl font-bold uppercase">Curso</h3>
                        <p className="text-white text-sm mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="flex flex-row gap-2 items-end justify-between mt-4">
                            <div className="flex flex-row items-end gap-1">
                                <p className="text-gray-light mb-1 ">Progresso:</p>
                                <span className="text-3xl text-white font-bold">35%</span>
                            </div>
                            <div className="flex flex-row items-end gap-1">
                                <span className="px-5 py-2 rounded bg-white text-black flex items-center gap-2"> <Icon.Play size={17} className="text-black" /> Assistir</span>
                                <span className="px-5 py-2 rounded bg-transparent text-gray-light flex items-center gap-2"> <Icon.Plus size={17} className="text-gray-light" /> Assistir</span>
                            </div>
                        </div>
                    </div>
                </div>
                <CourseCardInfo />
            </div>

        </div >
    );
}
