import React from "react";
import DefaultLayout from "@/components/AdminComponents/DefaultLayout";
import Breadcrumb from "@/components/AdminComponents/Breadcrumbs/Breadcrumb";
import { InputWithLabel } from "../../../../../../components/InputWithLabel";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  params: {
    id: number
  }
}

export default async function SeeModule({ params }: Props) {
  const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';
  const response = await fetch(`http://homologacao.tridar.log.br/modules/${params.id}`, {
    headers: {
      Authorization: token
    }
  });
  const data = await response.json()

  console.log(data)

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Ver Módulo" backPage="Módulos" backPageLink="/admin/modules" />

      <div className="w-full p-4 rounded-sm border border-stroke bg-black text-white shadow-default dark:border-strokedark dark:bg-boxdark mb-5">
        <p>Nome do Módulo: {data.Module}</p>
        <p>Número do módulo: {data.ModuleNumber}</p>
        <p>Curso: {data.CourseID}</p>

      </div>
      <Link href="/admin/modules">
        <button className="flex w-full justify-center rounded bg-gray-light p-3 font-medium text-gray hover:bg-opacity-90">
          Voltar
        </button>
      </Link>

    </DefaultLayout>
  );
};

