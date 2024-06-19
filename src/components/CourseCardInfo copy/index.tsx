import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";

export default function CourseCardInfo() {
    return (
        <div className="w-1/4 flex flex-col gap-4 ">
            <img src="https://picsum.photos/400/200" alt="" />

            <div className="flex flex-row -mt-8 mx-1 justify-between items-center">
                <div className="flex flex-col">
                    <h6 className="mx-2 uppercase text-white text-xs font-thin text-white">Nome do</h6>
                    <h3 className="mx-2 -mt-2 uppercase text-lg text-white font-bold">Curso</h3>
                </div>
                <div className="flex flex-row items-center">
                    <h6 className="mt-1 text-xs text-gray-light">Progresso:</h6>
                    <h6 className="text-xl text-blue-tridar">35%</h6>
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
            
        <Button className="px-2 py-1 bg-blue-tridar text-black text-xs :hover:bg-green-800"> Entrar no Curso </Button>
        <Button className="px-2 py-1 bg-gray-dark text-xs text-white"> Aulas Salvas </Button>
        </div>
    );
}

