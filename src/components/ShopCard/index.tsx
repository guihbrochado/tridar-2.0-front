import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";

export default function ShopCard() {
    return (
        <div className="bg-gray-dark rounded ">
            <img
                src="https://picsum.photos/400/200"
                alt=""
                className="w-full h-auto object-contain rounded-t-lg  "
            />

            <div className="p-4 flex flex-col justify-start">
                <p className="text-base text-white mt-2 ">Moleton com escrita “Trader” em vermelho e branco  </p>

                <div className="flex flex-col mt-4">
                    <p className="text-xs text-gray-light line-through">De R$ 298,90 por</p>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-white text-sm"> R$ <span className="text-2xl text-blue-tridar">150,00</span> </p>
                        <div className="flex gap-1">
                            <Icon.Circle size={17} weight="fill" className="text-black rounded-full border border-white" />
                            <Icon.Circle size={17} weight="fill" className="text-white" />
                            <Icon.Circle size={17} weight="fill" color="#FF0000"/>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between items-center mt-4">
                    <Icon.Heart size={17} className="text-gray-light" />
                    <Button className="bg-white text-black">Comprar</Button>
                </div>

            </div>
        </div >
    );
}

