"use client"

import React, { useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Dot from "@/components/Dot";
import clientAxios from "@/lib/axios/clientAxios";

type Policy = {
    id: number;
    question: string;
    answer: string;
    created_at: string;
    updated_at: string;
    usage_policy_category_id: number;
    icon: string;
};
export default function UsagePolicies() {
    const [policies, setPolicies] = useState<Policy[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await clientAxios.get<Policy[]>('/usagepolicies');
                console.log('Response:', response.data);
                setPolicies(response.data);
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container max-w-1680  py-9">
            <div className="container mx-auto p-4">
                <p className="text-gray-light text-sm mb-1">Conheça nossas políticas 🥇</p>
                <div className="flex">
                    <Dot />
                    <p className=" mx-2 text-white text-xl mb-2 font-bold">Políticas de Uso</p>
                </div>
            </div>
            <div className="flex w-[100%] items-start justify-center gap-6">
                <div className="grid w-[70%] items-center gap-3">
                    {policies.map(policy => (
                        <div key={policy.id} className="w-full gap-3 bg-gray-bg-card p-3 rounded border border-[#141414]">
                            <div className="flex items-center justify-start gap-3">
                                <div className="flex items-center justify-center w-[40px] h-[40px] bg-gray-tridar rounded">
                                    <Icon.Info
                                        size={21}
                                        color='white'
                                    />
                                </div>
                                <h3 className="text-white text-base">
                                    {policy.question}
                                </h3>
                            </div>
                            <div className="w-full">
                                <div
                                    dangerouslySetInnerHTML={{ __html: policy.answer }}
                                    className="text-gray-light text-xs my-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-[30%] items-start justify-start">
                    <div className=" flex w-full gap-3 p-6 rounded border border-gray-dark">
                        <div className="w-full">
                            <h3 className="text-white text-base ">
                                Lorem Ipsum consectetur adipiscing?
                            </h3>
                            <h3 className="text-gray-light text-xs my-2">
                                Sed facilisis ultricies est vitae vestibulum. Mauris id metus id leo facilisis pellentesque quis quis nisl. Pellentesque et nisi iaculis, placerat enim vitae...
                            </h3>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
