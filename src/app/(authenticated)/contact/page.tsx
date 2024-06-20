import { InputWithLabel } from "@/components/InputWithLabel";
import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import Dot from "@/components/Dot";

export default function Videos() {
    return (
        <div className="container py-9">
            <div className="container mx-auto p-4">
                <p className="text-gray-light text-sm mb-1">Entre em contato conosco 😎</p>
                <div className="flex">
                    <Dot />
                    <p className=" mx-2 text-white text-xl mb-2 font-bold">Contato</p>
                </div>
            </div>
            <div className="grid w-[50%] items-center gap-3 border border-gray-dark p-4 rounded">
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
                <div className="flex items-center w-full">
                    <InputWithLabel
                        label="CPF/CNPJ"
                        placeholder="Digite seu nome..."
                        type="name"
                        children={
                            <Icon.Fingerprint
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
                            label="Telefone"
                            placeholder="Digite seu nome..."
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
                <div className="flex w-full items-center gap-2">
                    <div className="flex items-center w-full">
                        <InputWithLabel
                            label="Seu segmento"
                            placeholder="Digite seu nome..."
                            type="name"
                            children={
                                <Icon.Briefcase
                                    size={21}
                                    color="gray"
                                />
                            }
                        />
                    </div>

                    <div className="flex w-full items-center">
                        <InputWithLabel
                            label="Nome da empresa"
                            placeholder="Digite seu nome..."
                            type="name"
                            children={
                                <Icon.AddressBook
                                    size={21}
                                    color="gray"
                                />
                            }
                        />
                    </div>
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
                            placeholder="Digite sua mensagem..."
                        />
                    </div>
                </div>
                <Button className="px-2 py-1 bg-white text-black text-xs :hover:bg-green-800 mt-6">Enviar</Button>

            </div>
        </div>
    );
}
