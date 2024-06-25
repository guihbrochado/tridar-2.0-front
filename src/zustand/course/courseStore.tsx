import { create } from "zustand";
import { Course } from "../../@types/courseTypes";

interface CourseState {
    course: Course | null;
    setCourse: (course: Course | null) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
    course: null,
    setCourse: (course) => set({ course }),
}));
