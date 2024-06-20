'use client'

import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function PaidInfo() {

    return (
        <div className="flex flex-col w-2/3 items-center justify-center gap-3 border border-gray-dark p-4 rounded">
        <div className="flex flex-col w-full items-center text-center">
            <Icon.CheckCircle size={150} weight="thin" className="text-blue-tridar" />
            <p className="text-white text-xl mb-2 font-bold">Sua compra foi aprovada!</p>

            <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lectus vitae nulla aliquet, ac laoreet quam egestas. Phasellus dui elit, venenatis ut hendrerit ne. </p>

            <p className="text-gray-light text-sm mt-10">O número do seu pedido é: #5897520</p>

            <div className="flex flex-row justify-start items-center gap-2 bg-white text-black px-10 py-3 rounded-lg mt-5">
                <Icon.Wallet size={20} className="text-black" />
                <span> Ver minha carteira </span>
            </div>

            <p className="text-gray-light text-sm mt-5">Voltar para a página inicial</p>
        </div>
    </div>
    );
}

