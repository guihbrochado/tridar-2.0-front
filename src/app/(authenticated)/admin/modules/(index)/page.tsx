import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/AdminComponents/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/AdminComponents/Tables/TableOne";

import { Metadata } from "next";
import DefaultLayout from "@/components/AdminComponents/DefaultLayout";
import ModulesList from "./modules-list";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Tridar Admin",
};

export default async function ModulesPage() {
    const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';
    const response = await fetch('http://homologacao.tridar.log.br/modules', {
        headers: {
            Authorization: token
        }
    });
    const data = await response.json()
    
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Módulos" backPage="Módulos" backPageLink="/admin/modules" />
            <div className="flex flex-row mb-5 justify-end">
                <Link className="bg-white text-black px-4 py-2 rounded-lg" href="/admin/modules/add">Adicionar Módulo</Link>
            </div>
            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-gray-dark px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <h4 className="mb-6 text-xl font-semibold text-white dark:text-white">
                        Top Channels
                    </h4>

                    <div className="flex flex-col">
                        <div className="grid grid-cols-3 rounded-sm bg-gray-dark text-white">
                            <div className="p-2.5 xl:p-5 ">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">
                                    Módulo
                                </h5>
                            </div>                       
                            <div className="p-2.5 xl:p-5 ">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">
                                    Curso
                                </h5>
                            </div>                       
                            <div className="hidden p-2.5 text-center sm:block xl:p-5">
                                <h5 className="text-sm font-medium uppercase xsm:text-base">
                                    Ações
                                </h5>
                            </div>
                        </div>

                        <ModulesList data={data} />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

