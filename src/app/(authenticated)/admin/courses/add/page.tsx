"use client";
import React, { useState } from "react";
import DefaultLayout from "@/components/AdminComponents/DefaultLayout";
import Breadcrumb from "@/components/AdminComponents/Breadcrumbs/Breadcrumb";
import { Switch } from "@/components/ui/switch";
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
import validation from '../validation'

const CourseAdd = () => {
  const { register, handleSubmit } = useForm();

  const [certification, setCertification] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [status, setStatus] = useState(true);
  const [courseLevel, setCourseLevel] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File>();


  async function handleCreateCourse(data: any) {
    console.log(data);

    if (!validation(data, selectedFile, courseLevel, isFree)) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const response = await fetch('/api/image', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);

        const bodyReady = {
          course: data.course,
          courselevel: parseInt(courseLevel, 10),
          duration: parseInt(data.duration, 10),
          expiration: dayjs(data.expiration).format('YYYY-MM-DD'),
          price: parseFloat(data.price),
          cover: responseData.files.myImage.newFilename, // Assuming this is the correct field
          description: data.description,
          status,
          certification,
          tags: data.tags || "tag1, tag2",
          isfree: isFree
        };

        const createCourseResponse = await fetch('http://homologacao.tridar.log.br/courses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyReady),
        });

        if (!createCourseResponse.ok) {
          throw new Error(`Error: ${createCourseResponse.statusText}`);
        }

        const courseResponseData = await createCourseResponse.json();
        toast.success("Curso criado com sucesso!");
        console.log("Response Data:", courseResponseData);
      } else {
        const errorData = await response.json();
        toast.error(`Failed to upload file: ${errorData.error}`);
      }
    } catch (error: any) {
      toast.error("Falha ao criar o Curso!");
      console.error("Submission Error:", error);
    }
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Adicionar Curso" backPage="Cursos" backPageLink="/admin/courses" />

      <div className="flex flex-row sm:grid-cols-2 ">
        <div className="flex flex-col gap-5">
          <form onSubmit={handleSubmit(handleCreateCourse)}>
            <div className="w-full p-4 rounded-sm border border-stroke bg-black text-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-row gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <InputWithLabel
                      label="Nome do curso"
                      placeholder="Digite o nome do curso..."
                      type="text"
                      name="course"
                      register={register}
                      children={<Icon.Video size={21} color="gray" />}
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <InputWithLabel
                      label="Capa do curso"
                      placeholder="Envie a capa do curso..."
                      type="file"
                      onChange={(e) => setSelectedFile(e.target.files?.[0])}
                      children={<Icon.Image size={21} color="gray" />}
                    />
                  </div>
                </div>

                <div className="mt-4 mb-4.5 flex flex-row gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <InputWithLabel
                      label="Duração do curso"
                      placeholder="Digite a duração do curso..."
                      type="text"
                      register={register}
                      name="duration"
                      children={<Icon.Clock size={21} color="gray" />}
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-white dark:text-white">
                      Nível do curso
                    </label>
                    <Select onValueChange={(value) => setCourseLevel(value)}>
                      <SelectTrigger className="w-full bg-gray-dark border-0">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-dark text-white">
                        <SelectItem value="1">Iniciante</SelectItem>
                        <SelectItem value="2">Intermediário</SelectItem>
                        <SelectItem value="3">Avançado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-3 mb-4.5 flex flex-row gap-6 xl:flex-row justify-between items-center">
                  <div className="flex flex-col w-full xl:w-1/2">
                    <InputWithLabel
                      label="Preço do curso"
                      placeholder="Digite o preço do curso..."
                      type="text"
                      register={register}
                      name="price"
                      children={<Icon.Money size={21} color="gray" />}
                    />
                  </div>
                  <div className="flex flex-col w-full xl:w-1/2">
                    <InputWithLabel
                      label="Expiração do curso"
                      placeholder="Digite a expiração do curso..."
                      type="date"
                      register={register}
                      name="expiration"
                      children={<Icon.Calendar size={21} color="gray" />}
                    />
                  </div>
                </div>

                <div className="mt-3 mb-4.5 flex flex-row gap-6 xl:flex-row justify-between items-center">
                  <div className="flex flex-col w-full xl:w-1/3">
                    <label className="mb-3 block text-sm font-medium text-white dark:text-white">
                      Possui Certificado?
                    </label>
                    <Switch
                      checked={certification}
                      onCheckedChange={setCertification}
                      name="certification"
                    />
                  </div>
                  <div className="flex flex-col w-full xl:w-1/3">
                    <label className="mb-3 block text-sm font-medium text-white dark:text-white">
                      É gratuito?
                    </label>
                    <Switch
                      checked={isFree}
                      onCheckedChange={setIsFree}
                      name="isFree"
                    />
                  </div>

                  <div className="flex flex-col w-full xl:w-1/3">
                    <label className="mb-3 block text-sm font-medium text-white dark:text-white">
                      Status
                    </label>
                    <Switch
                      checked={status}
                      onCheckedChange={setStatus}
                      name="status"
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
                    {...register('description')}
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <Link href="/admin/courses">
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
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CourseAdd;
