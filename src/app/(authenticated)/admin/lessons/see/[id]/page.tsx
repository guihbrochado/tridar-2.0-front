import React from "react";
import DefaultLayout from "@/components/AdminComponents/DefaultLayout";
import Breadcrumb from "@/components/AdminComponents/Breadcrumbs/Breadcrumb";
import Link from "next/link";

interface Props {
  params: {
    id: number
  }
}

export default async function SeeLesson({ params }: Props) {
  const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';
  const response = await fetch(`http://homologacao.tridar.log.br/lessons/${params.id}`, {
    headers: {
      Authorization: token
    }
  });
  const data = await response.json()

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Ver Aula" backPage="Aulas" backPageLink="/admin/lessons" />

      <div className="w-full p-4 rounded-sm border border-stroke bg-black text-white shadow-default dark:border-strokedark dark:bg-boxdark mb-5">
        <p>Nome do Aula: {data.Lesson}</p>

      </div>
      <Link href="/admin/lessons">
        <button className="flex w-full justify-center rounded bg-gray-light p-3 font-medium text-gray hover:bg-opacity-90">
          Voltar
        </button>
      </Link>

    </DefaultLayout>
  );
};


