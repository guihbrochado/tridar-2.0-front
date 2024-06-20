import { InputWithLabel } from "@/components/InputWithLabel";
import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Dot from "@/components/Dot";
import CardSugestões from "@/components/CardSugestões";

export default function Suggestions() {
    return (
        <div className="container py-9">
            <div className="container mx-auto p-4">
                <p className="text-gray-light text-sm mb-1">Ajude-nos a melhorar a plataforma 🚀</p>
                <div className="flex">
                    <Dot />
                    <p className=" mx-2 text-white text-xl mb-2 font-bold">Sugestões</p>
                </div>
            </div>
            <div className="flex w-[100%] items-start justify-center gap-6">
                <div className="grid w-[40%] items-center gap-3 border border-gray-dark p-4 rounded">
                    <div className="flex items-center w-full">
                        <InputWithLabel
                            label="Nome completo"
                            placeholder="Digite seu nome..."
                            type="name"
                            children={
                                <Icon.User
                                    size={21}
                                    color="gray"
                                />
                            }
                        />
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <div className="flex items-center w-full">
                            <InputWithLabel
                                label="Seu e-mail"
                                placeholder="Digite seu nome..."
                                type="name"
                                children={
                                    <Icon.Envelope
                                        size={21}
                                        color="gray"
                                    />
                                }
                            />
                        </div>

                        <div className="flex w-full items-center">
                            <InputWithLabel
                                label="Assunto"
                                placeholder="Escolha seu assunto"
                                type="name"
                                children={
                                    <Icon.Phone
                                        size={21}
                                        color="gray"
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center w-full">
                        <InputWithLabel
                            label="Título"
                            placeholder="Título..."
                            type="name"
                            children={
                                <Icon.User
                                    size={21}
                                    color="gray"
                                />
                            }
                        />
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <div className="bg-gray-dark flex items-start w-full rounded-md px-3">
                            <Icon.EnvelopeSimple
                                size={21}
                                color="gray"
                                style={{ marginTop: 10 }}
                            />
                            <Textarea
                                className="bg-gray-dark outline-none focus:outline-none h-[200px]"
                                placeholder="Sua sugestão..."
                            />
                        </div>
                    </div>
                    <Button className="px-2 py-1 bg-white text-black text-xs :hover:bg-green-800 mt-6">Enviar Sugestão</Button>

                </div>

                <div className="w-[60%] items-start justify-start">
                    <div className="w-full flex justify-between">
                        <div className="flex ">
                            <Dot />
                            <p className="mx-2 text-white text-xl mb-2 font-bold">Minhas Sugestões</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="bg-gray-tridar p-3 rounded">
                                <Icon.ArrowLeft
                                    size={21}
                                    color="#BABABA"
                                />
                            </div>
                            <div className="bg-gray-tridar p-3 rounded">
                                <Icon.ArrowRight
                                    size={21}
                                    color="#BABABA"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="w-full flex mt-3 gap-3 flex-wrap" >
                        <CardSugestões />
                        <CardSugestões />
                        <CardSugestões />
                        <CardSugestões />
                    </div>
                </div>

            </div>
            <div className="flex mt-6">
                <Dot />
                <p className="mx-2 text-white text-xl mb-2 font-bold">Sugestões Populares</p>
            </div>
            <div className="w-full flex mt-3 gap-3 flex-wrap" >
                <CardSugestões />
                <CardSugestões />
                <CardSugestões />
                <CardSugestões />
            </div>
        </div>
    );
}
