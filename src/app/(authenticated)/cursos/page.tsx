import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Button } from "../../../components/ui/button";
import Hero from "../../../components/Hero";
import CourseCardBanner from "../../../components/CourseCardBanner";

export default function Cursos() {
    return (
        <div className="w-full px-10 mt-5">
            <div className="container mx-auto p-4">
                <Hero />
            </div>
        
            <div className="w-full p-4 gap-3 flex flex-row justify-start">
                <CourseCardBanner courseName="Curso" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                <CourseCardBanner courseName="Curso" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                <CourseCardBanner courseName="Curso" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                <CourseCardBanner courseName="Curso" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
                <CourseCardBanner courseName="Curso" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            </div>
        </div >
    );
}
