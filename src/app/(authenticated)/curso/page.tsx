'use client'
import React, { useState } from "react";
import Dot from "../../../components/Dot";
import CourseCardInfo from "../../../components/CourseCardInfo";
import Hero from "../../../components/Hero";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Input } from "../../../components/ui/input";
import {
    Collapsible, CollapsibleContent,
    CollapsibleTrigger
} from "../../../components/ui/collapsible";

export default function Curso() {

    const [divActive, setDivActive] = useState(2);

    return (
        <div className="w-full px-10 mt-5">
            <Hero />

            <div className="flex flex-row p-4 ">
                <button className={`mx-1 py-2 px-4 rounded text-sm ${divActive === 1 ? 'bg-gray-light-2 text-blue-tridar' : 'bg-gray-dark text-white'}`} onClick={() => setDivActive(1)}>Informações</button>
                <button className={`mx-1 py-2 px-4 rounded text-sm ${divActive === 2 ? 'bg-gray-light-2 text-blue-tridar' : 'bg-gray-dark text-white'}`} onClick={() => setDivActive(2)}>Conteúdo</button>
                <button className={`mx-1 py-2 px-4 rounded text-sm ${divActive === 3 ? 'bg-gray-light-2 text-blue-tridar' : 'bg-gray-dark text-white'}`} onClick={() => setDivActive(3)}>Avaliações</button>
            </div>
            {divActive === 1 &&
                <>
                    <h6 className="text-white font-bold ml-4 my-4"><Dot /> Visão Geral</h6>

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
                        <CourseCardInfo />
                    </div>

                    <div className="flex flex-col justify-between p-4 bg-gray-dark m-4 md:w-3/4  ">
                        <div className="flex flex-row items-center gap-4 mb-2">
                            <img src="../../../assets/images/svg/iconShadowExclamation.svg" className="w-12 h-12" alt="" />
                            <h6 className="text-white font-bold"> Lorem ipsum dolor sit amet.</h6>
                        </div>

                        <p className="text-gray-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            maxime est nobis obcaecati neque cupiditate in, inventore asperiores cumque quis minus officiis nesciunt
                            quibusdam praesentium doloremque.</p>
                    </div>
                </>
            }

            {divActive === 2 &&
                <>
                    <div className="flex flex-col w-3/4 md:flex-row justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
                        <h6 className="text-white font-bold ml-4 my-4"><Dot /> Conteúdo do Curso </h6>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-3/4 h-96 ">
                            <div className="flex flex-row gap-3">
                                <Collapsible className="bg-gray-light-2 rounded-lg w-1/3">
                                    <CollapsibleTrigger className="text-white p-4 flex flex-row">
                                        <div className="flex flex-row justify-between w-full items-center">
                                            <div className="flex flex-row">
                                                <span> Título do modulo </span>
                                                <span className="p-2 ml-2 text-xs bg-gray-light-3 text-blue-tridar rounded">14 Aulas</span>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                {/* <Icon.Play className="bg-blue-tridar text-white p-2 rounded" size={20} />
                                             <Icon.CaretCircleDown className="align-end" size={20} /> */}
                                            </div>
                                        </div>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="bg-gray-dark text-gray-light p-4">
                                        Yes. Free to use for personal and commercial projects. No attribution
                                        required.
                                    </CollapsibleContent>
                                </Collapsible>                              
                            </div>
                        </div>
                        <CourseCardInfo />
                    </div>
                </>
            }
            {
                divActive === 3 &&
                <>
                    <div className="flex flex-col w-3/4 md:flex-row justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
                        <h6 className="text-white font-bold ml-4 my-4"><Dot /> Avaliações <span className="bg-blue-tridar text-black px-2 py-1 text-xs rounded">03</span></h6>

                        <div className="flex flex-row items-center gap-3 p-4">
                            <h6 className="text-white font-bold"> 4.9</h6>
                            <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                            <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                            <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                            <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                            <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-3/4 h-96 ">

                            <div className="flex flex-row items-center gap-4 bg-gray-dark rounded p-4 mb-4">
                                <img src="../../../assets/images/svg/iconPerfil.svg" alt="User" />
                                <Input className="w-full bg-gray-dark text-white border-none" placeholder="Publique sua avaliação..." type="text" />
                                <div className="flex flex-row items-center gap-3">
                                    <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                    <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                    <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                    <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                    <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-4 bg-gray-dark rounded p-4 mb-4">
                                <div className="flex flex-row justify-between w-full items-center gap-3">
                                    <img src="https://picsum.photos/40/40" className="rounded-lg" alt="Another User" />
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-row gap-3">
                                            <h6 className="text-white font-bold w-full">Sophia Costa</h6>
                                            <div className="flex items-center gap-3">
                                                <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                                <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                                <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                                <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                                <Icon.Star size={17} className="text-white hover:text-blue-tridar" />
                                            </div>
                                        </div>
                                        <p className="text-gray-light text-sm w-full ">Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CourseCardInfo />
                    </div>
                </>
            }
        </div >
    );
}