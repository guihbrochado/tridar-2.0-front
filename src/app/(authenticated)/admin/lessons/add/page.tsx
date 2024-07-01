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

const LessonAdd = () => {
  const { register, handleSubmit } = useForm();

  const [module, setModule] = useState();
  const [moduleSelect, setModuleSelect] = useState("");

  async function handleCreateLesson(data: any) {
    if (!validation(data, moduleSelect)) {
      return;
    }

    const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';

    try {
      const bodyReady = {
        Lesson: data.Lesson,
        LessonNumber: Number(data.LessonNumber),
        ModuleID: Number(moduleSelect),        
        Author: data.Author,
        Duration: data.Duration,
        Link: data.Link,
        CoverImage: 'data.CoverImage',
        Materials: data.Materials,
        Description: data.Description,
        Tags: "",
      };

      const response = await fetch('http://homologacao.tridar.log.br/lessons', {
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
      toast.success("Lesson criado com sucesso!");

      console.log("Response Data:", responseData);
    } catch (error) {
      toast.error("Falha ao criar o Lesson!");

      console.error("Submission Error:", error);
    }
  }

  async function getModules() {
    const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';

    const response = await fetch('http://homologacao.tridar.log.br/modules', {
      method: 'GET',
      headers: {
        Authorization: token
      }
    });

    const data = await response.json();
    setModule(data);
    console.log(data);
  }

  useEffect(() => {
    getModules()
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Adicionar Aula" backPage="Lessons" backPageLink="/admin/lessons" />
      <form onSubmit={handleSubmit(handleCreateLesson)}>
        <div className="w-full p-4 rounded-sm border border-stroke bg-black text-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="">
            <div className="mb-4.5 flex flex-row gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Nome do aula"
                  placeholder="Digite o nome do aula..."
                  type="text"
                  name="Lesson"
                  register={register}
                  children={<Icon.Video size={21} color="gray" />}
                />
              </div>

              <div className="w-full xl:w-1/2 mb-5">
                <label className="mb-3 block text-sm font-medium text-white dark:text-white">
                  Módulo
                </label>
                <Select onValueChange={(value) => setModuleSelect(value)}>
                  <SelectTrigger className="w-full bg-gray-dark border-0">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-dark text-white">
                    {module?.map((item) => (
                      <SelectItem key={item.ID} value={item.ID}>
                        {item.Module}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-row gap-6 xl:flex-row mb-5">
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Número do aula"
                  placeholder="Digite o número do aula..."
                  type="number"
                  name="LessonNumber"
                  register={register}
                  children={<Icon.NumberSquareFive size={21} color="gray" />}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Autor"
                  placeholder="Digite o nome do autor..."
                  type="text"
                  name="Author"
                  register={register}
                  children={<Icon.User size={21} color="gray" />}
                />
              </div>
            </div>
            <div className=" flex flex-row gap-6 xl:flex-row mb-5">
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Duração da aula"
                  placeholder="Digite a duração da aula..."
                  type="number"
                  name="Duration"
                  register={register}
                  children={<Icon.Clock size={21} color="gray" />}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Link"
                  placeholder="Digite o nome do link..."
                  type="text"
                  name="Link"
                  register={register}
                  children={<Icon.Link size={21} color="gray" />}
                />
              </div>
            </div>
            <div className=" flex flex-row gap-6 xl:flex-row mb-5">
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Capa da aula"
                  placeholder="Digite a capa da aula..."
                  type="file"
                  name="CoverImage"
                  register={register}
                  children={<Icon.Image size={21} color="gray" />}
                />
              </div>
              <div className="w-full xl:w-1/2">
                <InputWithLabel
                  label="Materiais"
                  placeholder="Digite o nome do materiais..."
                  type="text"
                  name="Materials"
                  register={register}
                  children={<Icon.Pen size={21} color="gray" />}
                />
              </div>
            </div>

            <div className="mb-6 mt-3">
              <label className="mb-3 block text-sm font-medium text-white dark:text-white">
                Descrição
              </label>
              <textarea
                rows={3}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                {...register('Description')}
              ></textarea>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/admin/lessons">
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

export default LessonAdd;
