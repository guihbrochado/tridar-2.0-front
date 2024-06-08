import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Children } from "react";

interface PropsInputLabel {
    label: string;
    placeholder: string;
    type: string;
    children: React.ReactNode;
}

export function InputWithLabel({ label, placeholder, type, children }: PropsInputLabel) {
    return (
        <div className="flex-1 w-full justify-center items-center gap-3">
            <Label className="text-white" htmlFor={label}> {label} </Label>
            <div className="bg-[#141414] flex justify-center items-center rounded-md px-3 mt-2">
                {children}
                <Input className="bg-[#141414] border-none" type={type} placeholder={placeholder} />
            </div>
        </div>
    )
}