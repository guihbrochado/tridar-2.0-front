"use client";
import React, { useState, useEffect, FormEvent } from "react";
import DefaultLayout from "@/components/AdminComponents/DefaultLayout";
import Breadcrumb from "@/components/AdminComponents/Breadcrumbs/Breadcrumb";
import { InputWithLabel } from "@/components/InputWithLabel";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Course } from "@/@types/courseTypes";
import validation from "../../validation";

interface Props {
  params: {
    id: string;
  };
}

export default function ModuleEdit({ params }: Props) {
  const { register, handleSubmit } = useForm();

  const [module, setModule] = useState();
  const [course, setCourse] = useState<Course>();
  const [courseSelect, setCourseSelect] = useState("");

  async function getData() {
    const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';

    try {
      const response = await fetch(`http://homologacao.tridar.log.br/modules/${params.id}`, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const getModule = await response.json();
      setModule(getModule);

    } catch (error) {
      console.error("Failed to fetch module data:", error);
    }
  };
  async function getCourses() {
    const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';

    const response = await fetch('http://homologacao.tridar.log.br/courses', {
      headers: {
        Authorization: token
      }
    });

    const data = await response.json();
    setCourse(data);

  }

  useEffect(() => {
    getData();
    getCourses();
  }, []);



  async function handleUpdateModule(data: any) {
    if (!validation(data, courseSelect)) {
      return;
    }
    const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';

    try {
      const bodyReady = {
        module: data.module,
        courseID: Number(courseSelect),
        modulenumber: Number(data.modulenumber)
      };

      console.log(bodyReady);

      const response = await fetch(`http://homologacao.tridar.log.br/modules/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify(bodyReady),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      toast.success("Curso editado com sucesso!");
      console.log("Response Data:", responseData);
    } catch (error) {
      toast.error("Falha ao editar o Curso!");
      console.error("Submission Error:", error);
    }
  }
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Editar Curso" backPage="Cursos" backPageLink="/admin/modules" />

      <form onSubmit={handleSubmit(handleUpdateModule)}>
        <div className="w-full p-4 rounded-sm border border-stroke bg-black text-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="">
            <div className="mb-4.5 flex flex-row gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Nome do módule"
                  placeholder="Digite o nome do módulo..."
                  type="text"
                  name="module"
                  defaultValue={module?.Module}
                  register={register}
                  children={<Icon.Video size={21} color="gray" />}
                />
              </div>

              <div className="w-full xl:w-1/2 mb-5">
                <label className="mb-3 block text-sm font-medium text-white dark:text-white">
                  Curso
                </label>
                <Select                   
                  onValueChange={(value) => setCourseSelect(value)}>
                  <SelectTrigger className="w-full bg-gray-dark border-0">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-dark text-white">
                    {course?.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className=" flex flex-row gap-6 xl:flex-row mb-5">
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Número do módulo"
                  placeholder="Digite o número do módulo..."
                  type="number"
                  name="modulenumber"
                  defaultValue={module?.ModuleNumber}
                  register={register}
                  children={<Icon.NumberSquareFive size={21} color="gray" />}
                />
              </div>


            </div>

            <div className="flex items-center gap-3">
              <Link href="/admin/modules">
                <button className="flex w-full justify-center rounded bg-gray-light p-3 font-medium text-gray hover:bg-opacity-90">
                  Voltar
                </button>
              </Link>
              <button type="submit" className="flex w-full justify-center rounded bg-blue-tridar p-3 font-medium text-gray hover:bg-opacity-90">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </DefaultLayout >
  );
};


