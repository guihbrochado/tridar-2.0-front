import React from "react";
import Dot from "../../../components/Dot";
import VideoCard from "../../../components/VideoCard";

export default function Videos() {
    return (
        <div className="w-full px-10 mt-5">
            <div className="p-4">
                <p className="text-gray-light text-sm mb-1">Veja os vídeos da Tridar 🔥</p>
                <p className="text-white text-xl mb-2 font-bold">Vídeos</p>
            </div>
            <div className="flex flex-row p-4">
                <button className="mx-1 py-2 px-4 rounded bg-gray-dark text-white text-sm"> Explorar </button>
                <button className="mx-1 py-2 px-4 rounded text-white text-sm"> Seguindo </button>
                <button className="mx-1 py-2 px-4 rounded text-white text-sm"> Estações </button>
                <button className="mx-1 py-2 px-4 rounded text-white text-sm"> Trade TV </button>
            </div>
            <div className="p-4">
                <h2 className="text-white text-xl mb-4 font-bold"> <Dot /> Últimos Lançamentos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                   <VideoCard />
                   <VideoCard />
                   <VideoCard />
                   <VideoCard />
                   <VideoCard />                 
                </div>
            </div>
        </div>
    );
}