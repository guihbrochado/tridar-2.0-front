import React from "react";
import DefaultLayout from "@/components/AdminComponents/DefaultLayout";
import Breadcrumb from "@/components/AdminComponents/Breadcrumbs/Breadcrumb";
import { InputWithLabel } from "../../../../../components/InputWithLabel";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  params: {
    id: number
  }
}

export default async function SeeCourse({ params }: Props) {
  const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';
  const response = await fetch(`http://homologacao.tridar.log.br/courses/${params.id}`, {
    headers: {
      Authorization: token
    }
  });
  const data = await response.json()

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Adicionar Curso" backPage="Cursos" backPageLink="/admin/courses" />

      <div className="flex flex-row sm:grid-cols-2 ">
        <div className="flex flex-col gap-5">
          <div className="w-full p-4 rounded-sm border border-stroke bg-black text-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <p>Nome do Curso: {data.course}</p>
            <p>Duração: {data.duration}</p>
            {data.expiration &&
              <p>Expiração: {new Date(data.expiration).toLocaleDateString('pt-BR')}</p>
            }
            <p>Preço: {data.price}</p>
            <p>Nível: {data.courselevel === 1 ? 'Iniciante' : data.courselevel === 2 ? 'Intermediário' : 'Avançado'}</p>
            <p>Status: {data.status ? 'Ativo' : 'Inativo'}</p>
            <p>Possui certificado? {data.certification ? 'Sim' : 'Não'}</p>
            <p>Data de Criação: {new Date(data.created_at).toLocaleDateString('pt-BR')}</p>
            <p>Data de Atualização: {new Date(data.updated_at).toLocaleDateString('pt-BR')}</p>
            <p>Possui certificado? {data.certification ? 'Sim' : 'Não'}</p>
            <p>É gratuito? {data.isFree ? 'Sim' : 'Não'}</p>
            <p>Descricão: {data.description}</p>
          </div>
          <Link href="/admin/courses">
            <button className="flex w-full justify-center rounded bg-gray-light p-3 font-medium text-gray hover:bg-opacity-90">
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};


