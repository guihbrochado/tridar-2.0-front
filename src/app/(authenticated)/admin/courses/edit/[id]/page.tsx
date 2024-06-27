"use client";
import React, { useState, useEffect, FormEvent } from "react";
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
import { Course } from "@/@types/courseTypes";
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Props {
  params: {
    id: string;
  };
}

export default function CourseEdit({ params }: Props) {
  const { register, handleSubmit } = useForm();

  const [course, setCourse] = useState<Course>();
  const [certification, setCertification] = useState(false);
  const [status, setStatus] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [courseLevel, setCourseLevel] = useState('');

  async function getData() {
    const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';

    try {
      const response = await fetch(`http://homologacao.tridar.log.br/courses/${params.id}`, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const getCourse = await response.json();
      console.log(getCourse);
      setCourse(getCourse);
      setCourseLevel(getCourse.courselevel)
      setCertification(getCourse.certification)
      setStatus(getCourse.status)
      setIsFree(getCourse.isfree)
      const formattedDate = dayjs(getCourse.expiration).format('YYYY-MM-DD');
      getCourse.expiration = formattedDate;
    } catch (error) {
      console.error("Failed to fetch course data:", error);
    }
  };

  useEffect(() => {
    getData();

  }, []);

  async function handleUpdateCourse(data: any) {
    const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJ1c2VySWQiOjI0MDJ9.SmFulMVQv0gIfKphXFpHvEGSeZVUk96aWplwnHAIyRI';

    try {
      const bodyReady = {
        course: data.course || course?.course,
        courselevel: parseInt(courseLevel, 10) || course?.course,
        duration: parseInt(data.duration, 10) || course?.duration,
        expiration: data.expiration || dayjs(course?.expiration).format('YYYY-MM-DD'),
        price: parseFloat(data.price) || course?.price,
        cover: "url_da_imagem" || course?.cover,
        description: data.description || course?.description,
        status,
        certification,
        tags: data.tags || "tag1, tag2",
        isfree: isFree || course?.isfree
      };

      console.log(bodyReady);


      const response = await fetch(`http://homologacao.tridar.log.br/courses/${params.id}`, {
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
      <Breadcrumb pageName="Editar Curso" backPage="Cursos" backPageLink="/admin/courses" />
      
      <div className="flex flex-row sm:grid-cols-2 ">
        <div className="flex flex-col gap-5">
          <form onSubmit={handleSubmit(handleUpdateCourse)}>

            <div className="w-full p-4 rounded-sm border border-stroke bg-black text-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-row gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <InputWithLabel
                      label="Nome do curso"
                      placeholder="Digite o nome do curso..."
                      type="text"
                      defaultValue={course?.course}
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
                      name="cover"
                      register={register}
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
                      name="duration"
                      defaultValue={course?.duration}
                      register={register}
                      children={<Icon.Clock size={21} color="gray" />}
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-white dark:text-white">
                      Nível do curso
                    </label>
                    <Select value={courseLevel} onValueChange={(value) => setCourseLevel(value)}>
                      <SelectTrigger className="w-full bg-gray-dark border-0 ">
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
                      name="price"
                      defaultValue={course?.price}
                      register={register}
                      children={<Icon.Money size={21} color="gray" />}
                    />
                  </div>
                  <div className="flex flex-col w-full xl:w-1/2">
                    <InputWithLabel
                      label="Expiração do curso"
                      placeholder="Digite a expiração do curso..."
                      type="date"
                      name="expiration"
                      defaultValue={course?.expiration}
                      register={register}
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
                    defaultValue={course?.description}
                    {...register('description')}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
    </DefaultLayout >
  );
};


