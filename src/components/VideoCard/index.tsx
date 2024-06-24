import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import Dot from "../../components/Dot";

export default function VideoCard() {
    return (
        <div className="bg-gray-dark rounded ">
            <img
                src="https://picsum.photos/400/200"
                alt=""
                className="w-full h-auto object-contain rounded-t rounded-lg "
            />

            <div className="p-4">
                <p className="text-xs text-gray-light mt-2 ">Luis Carvalho <Dot />  </p>
                <p className="text-white mt-2 ">Análise de WINFUT - IBOV - DOLV23 + ATIVOS  </p>
                <p className="text-xs text-gray-light mt-2 ">Postado há 8 dias    •    10k visualizações  </p>
            </div>
        </div>
    );
}

