"use client";
import React, { useState, useEffect } from "react";
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
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Course } from "@/@types/courseTypes";
import validation from "../validation";

const ModuleAdd = () => {
  const { register, handleSubmit } = useForm();

  const [course, setCourse] = useState<Course>();
  const [courseSelect, setCourseSelect] = useState("");

  async function handleCreateModule(data: any) {
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

      const response = await fetch('http://homologacao.tridar.log.br/modules', {
        method: 'POST',
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
      toast.success("Module criado com sucesso!");

      console.log("Response Data:", responseData);
    } catch (error) {
      toast.error("Falha ao criar o Module!");

      console.error("Submission Error:", error);
    }
  }

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
    getCourses()
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Adicionar Módulo" backPage="Modules" backPageLink="/admin/modules" />
      <form onSubmit={handleSubmit(handleCreateModule)}>
        <div className="w-full p-4 rounded-sm border border-stroke bg-black text-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="">
            <div className="mb-4.5 flex flex-row gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Nome do módule"
                  placeholder="Digite o nome do módulo..."
                  type="text"
                  name="module"
                  register={register}
                  children={<Icon.Video size={21} color="gray" />}
                />
              </div>

              <div className="w-full xl:w-1/2 mb-5">
                <label className="mb-3 block text-sm font-medium text-white dark:text-white">
                  Curso
                </label>
                <Select onValueChange={(value) => setCourseSelect(value)}>
                  <SelectTrigger className="w-full bg-gray-dark border-0">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-dark text-white">
                    {course && course.map((item) => (
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
    </DefaultLayout>
  );
};

export default ModuleAdd;
