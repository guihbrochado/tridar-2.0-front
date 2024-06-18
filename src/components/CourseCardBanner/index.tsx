import * as Icon from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default function CourseCardBanner({courseName, description}) {
    return (
        <div className="flex flex-col w-1/5">
            <div className="flex flex-row bg-gray-dark rounded-lg overflow-hidden mt-10 relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-black-100 before:opacity-50">
                <img src="https://picsum.photos/400/400" className="z-10 absolute object-cover w-full h-full" alt="" />
                <div className="flex flex-col relative z-20 w-full">
                    <div className="flex flex-col mt-10 ml-2">
                        <h2 className="text-white text-lg font-thin uppercase">Nome do</h2>
                    </div>

                    <div className="flex flex-row justify-between items-center ml-2 mb-2">
                        <span className="text-white text-2xl font-bold uppercase">{courseName}</span>
                        <div className="bg-gray-dark rounded-lg p-2 mr-2">
                            <Icon.Play size={17} className="text-gray-light" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-4 ">
                <div className="flex flex-row justify-between">
                    <p className="text-white text-xs"> {description}</p>
                </div>
                <div className="flex flex-row justify-between mt-4">
                    <p className="text-gray-light text-xs"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    );
}


