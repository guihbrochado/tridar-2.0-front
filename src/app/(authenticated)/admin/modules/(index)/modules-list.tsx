'use client'
import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { toast } from 'react-toastify';


export default function ModulesList(data: any) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [selectedId, setSelectedId] = useState(0)

    function handleDelete(id: number) {
        setSelectedId(id)

        setShowDeleteModal(true)
    }

    async function deleteModule() {
        const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';

        try {
            const response = await fetch(`http://homologacao.tridar.log.br/modules/${selectedId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: token
                }
            })
            console.log(response)
            toast.success("Módulo deletado com sucesso!");
        } catch (error) {
            toast.success("Falha ao deletar módulo!");

            console.log(error)
        }
        
        setShowDeleteModal(false)
    }

    return (
        <>
            {
                data.data.map((item: any, key: number) => (
                    <div
                        className={`grid grid-cols-3 text-white ${key === data.length - 1
                            ? ""
                            : "border-b border-stroke dark:border-strokedark"
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5 text-white">
                            <p className="hidden text-white dark:text-white sm:block">
                                {item.Module}
                            </p>
                        </div>
                        <div className="flex items-center gap-3 p-2.5 xl:p-5 text-white">
                            <p className="hidden text-white dark:text-white sm:block">
                                {item.CourseID}
                            </p>
                        </div>
                        <div className="hidden items-center justify-center gap-3 p-2.5 sm:flex xl:p-5">
                            <Link href={`/admin/modules/see/${item.ID}`}>
                                <Icon.Eye size={32} weight="fill" />
                            </Link>
                            <Link href={`/admin/modules/edit/${item.ID}`}>
                                <Icon.PencilSimpleLine size={32} weight="fill" />
                            </Link>

                            <Icon.Trash className="cursor-pointer" onClick={() => handleDelete(item.ID)} size={32} weight="fill" />
                        </div>

                        {showDeleteModal && (
                            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                <div className="fixed inset-0 bg-gray-900 bg-opacity-25  transition-opacity" aria-hidden="true"></div>
                                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                        <div className="relative transform overflow-hidden rounded-lg bg-gray-900 text-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                            <div className="bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                <div className="sm:flex sm:items-start">
                                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-900 sm:mx-0 sm:h-10 sm:w-10">
                                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                        </svg>
                                                    </div>
                                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                        <h3 className="text-base font-semibold leading-6 text-white" id="modal-title">Deletar Módulo</h3>
                                                        <div className="mt-2">
                                                            <p className="text-sm text-gray-400">Tem certeza que deseja deletar este módulo?</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                <button onClick={deleteModule} type="button" className="inline-flex w-full justify-center rounded-md bg-[#f87171] px-3 py-2 text-sm font-semibold text-white shadow-sm  hover:bg-red-600 sm:ml-3 sm:w-auto">Deletar</button>
                                                <button onClick={() => setShowDeleteModal(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm hover:bg-gray-600 sm:mt-0 sm:w-auto">Cancelar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            }
        </>
    )
}