import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Children } from "react";
import Dot from "../Dot";

interface PropsInputLabel {
    label: any;
    placeholder: string;
    type: string;
    children: React.ReactNode;
}

export function InputWithLabel({ label, placeholder, type, children }: PropsInputLabel) {
    return (
        <div className="flex-1 w-full justify-center items-center gap-3">
            <Label className="text-white" htmlFor={label}> {label} <Dot /> </Label>
            <div className="bg-gray-dark flex justify-center items-center rounded-md px-3 mt-2">
                {children}
                <Input className="bg-gray-dark border-none" type={type} placeholder={placeholder} />
            </div>
        </div>
    )
}
