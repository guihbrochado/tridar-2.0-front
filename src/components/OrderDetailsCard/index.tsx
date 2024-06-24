import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function OrderDetailsCard() {
    return (

        <div className="w-1/3 flex flex-col gap-4 border border-gray-dark rounded-lg p-4 ">

            <h6 className="flex flex-row gap-2 mx-2 uppercase text-white text-xs text-white"> <Icon.ListBullets size={17} className="text-gray-light" />Detalhes do Pedido</h6>

            <div className="flex flex-row justify-between items-center text-gray-light">
                <div className="flex flex-row gap-1 p-2">
                    <img className="flex w-10 h-10 rounded-full object-cover " src="https://picsum.photos/200" alt="" />
                    <div className="flex flex-col ml-2">
                        <p className="text-white text-sm">Alpha Trading</p>
                        <p className="flex flex-row gap-1 text-gray-light text-xs"><Icon.User size={15} className="text-gray-light" /> Alpha Trading</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <span className="text-white text-xs p-2">R$ 150,00</span>
                    <span className="gap-1 bg-gray-dark p-1 rounded text-white"> <Icon.Trash size={17} className="text-gray-light" /> </span>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center text-gray-light">
                <div className="flex flex-row gap-1 p-2">
                    <img className="flex w-10 h-10 rounded-full object-cover " src="https://picsum.photos/200" alt="" />
                    <div className="flex flex-col ml-2">
                        <p className="text-white text-sm">Alpha Trading</p>
                        <p className="flex flex-row gap-1 text-gray-light text-xs"><Icon.User size={15} className="text-gray-light" /> Alpha Trading</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <span className="text-white text-xs p-2">R$ 150,00</span>
                    <span className="gap-1 bg-gray-dark p-1 rounded text-white"> <Icon.Trash size={17} className="text-gray-light" /> </span>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center text-gray-light">
                <div className="flex flex-row gap-1 p-2">
                    <img className="flex w-10 h-10 rounded-full object-cover " src="https://picsum.photos/200" alt="" />
                    <div className="flex flex-col ml-2">
                        <p className="text-white text-sm">Alpha Trading</p>
                        <p className="flex flex-row gap-1 text-gray-light text-xs"><Icon.User size={15} className="text-gray-light" /> Alpha Trading</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <span className="text-white text-xs p-2">R$ 150,00</span>
                    <span className="gap-1 bg-gray-dark p-1 rounded text-white"> <Icon.Trash size={17} className="text-gray-light" /> </span>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center text-gray-light ">
                <div className="flex flex-col w-full ml-2">
                    <p className="flex text-white text-sm">Total</p>
                    <div className="flex flex-row gap-1 items-end">
                        <span className="text-gray-light text-xs mb-1">R$</span>
                        <span className="flex flex-row gap-1 text-white text-lg"> 150,00</span>
                    </div>

                </div>
                <div className="flex flex-row items-center ">
                    <input className="focus:outline-none  rounded-r rounded-lg p-2 text-xs bg-gray-dark text-gray-light" placeholder="Cupom de desconto..." />
                    <button className="bg-white text-white rounded-r p-2">
                        <Icon.CheckFat weight="fill" size={17} color="black" />
                    </button>
                </div>
            </div>

            <Button className="px-2 py-1 bg-white text-black text-xs :hover:bg-green-800"> Comprar </Button>

            <div className="w-full justify-center items-center flex gap-2">
                <Icon.Lock size={17} className="text-gray-light" />
                <p className="flex text-white text-xs"> Compra protegida com certificado SSL</p>
            </div>
        </div>
    );
}

