'use client'
import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { InputWithLabel } from "../../../components/InputWithLabel";
import OrderDetailsCard from "../../../components/OrderDetailsCard";
import PaidInfo from "../../../components/PaidInfo";


export default function Checkout() {
    const [wasPaid, setWasPaid] = useState(false);

    return (
        <div className="max-w-1680 mx-10">
            <div className="p-4">
                <p className="text-gray-light text-sm mb-1">Finalize sua compra 🛍️</p>
                <p className="text-white text-xl mb-2 font-bold">Checkout</p>
            </div>
            <div className="flex flex-row w-full gap-4">
                {!wasPaid &&
                    <div className="flex flex-col w-2/3 items-center gap-3 border border-gray-dark p-4 rounded">
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
                        <div className="flex flex-col berofe:w-3/4 w-full">
                            <div className="mt-4">
                                <p className="flex items-center text-white text-xl mb-2 font-bold gap-2"> <Icon.Wallet size={21} className="text-white" /> Formas de Pagamento</p>
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <button className="flex flex-row gap-2 py-2 px-4 rounded bg-white text-black text-sm"><Icon.PixLogo size={21} className="text-black" /> PIX </button>
                                <button className="flex flex-row gap-2 py-2 px-4 rounded bg-gray-dark text-white text-sm"><Icon.Barcode size={21} className="text-gray-light" /> Boleto </button>
                                <button className="flex flex-row gap-2 py-2 px-4 rounded bg-gray-dark text-white text-sm"><Icon.CreditCard size={21} className="text-gray-light" /> Cartão </button>
                            </div>

                            <img className="mt-4" width={650} src="../../../assets/images/svg/bannerPixPayment.svg" alt="" />
                        </div>
                    </div>
                }

                {wasPaid &&
                    <PaidInfo />
                }
                <OrderDetailsCard />
            </div>
        </div>
    );
}