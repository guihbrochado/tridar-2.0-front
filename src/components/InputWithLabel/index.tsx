import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Dot from "../Dot";
import React from "react";

interface PropsInputLabel {
    label: any;
    placeholder: string;
    type: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    register?: any;
    children: React.ReactNode;
}

export function InputWithLabel({ label, placeholder, type, name, value, defaultValue, onChange, register, children }: PropsInputLabel) {
    return (
        <div className="flex-1 w-full justify-center items-center gap-3 after:text-white">
            <Label className="text-white" htmlFor={name}>
                {label} <Dot />
            </Label>
            <div className="bg-gray-dark flex justify-center items-center rounded-md px-3 mt-2 after:text-white">
                {children}
                <Input
                    className="bg-gray-dark border-none text-white placeholder:text-white after:text-white"
                    defaultValue={defaultValue}
                    name={name}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...(register && name ? register(name) : {})} // Use register if provided
                />
            </div>
        </div>
    );
}
