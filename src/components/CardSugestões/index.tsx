import React from "react";

export default function CardSugestões() {
    return (
        <div className=" flex w-[49%] gap-3 bg-gray-bg-card p-3 rounded">
            <div className="">
                <img src="/Perfil.png" alt="persona" />
            </div>
            <div className="w-full">
                <h3 className="text-white text-xs ">
                    Sed facilisis ultricies est vitae vestibulum. Mauris id metus id leo facilisis pellentesque quis quis nisl.
                </h3>
                <h3 className="text-gray-light text-xs my-2">
                    Sed facilisis ultricies est vitae vestibulum. Mauris id metus id leo facilisis pellentesque quis quis nisl.
                    Pellentesque et nisi iaculis, placerat enim vitae...
                </h3>
                <h3 className="text-gray-light text-xs ">
                    Publicado no dia 20 de outubro de 2023
                </h3>
            </div>
            <div className=" flex items-center justify-center w-[60px] h-[40px] bg-gray-tridar rounded">
                <h3 className="text-gray-light text-xs text-center">
                    🔥 13
                </h3>
            </div>
        </div>
    );
}

