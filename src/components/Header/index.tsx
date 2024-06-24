"use client"

import * as Icon from "@phosphor-icons/react/dist/ssr";
import { NavigationMenuDemo } from "../NavigationMenuDemo";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLoginStore } from "@/zustand/StoreAuth/store";
import Cookies from 'js-cookie';

export default function Header() {
    const { setUserInfo } = useLoginStore();

    const handleLogout = () => {
        // Limpar o cookie de accessToken
        Cookies.remove('accessToken');

        // Limpar informações do usuário
        setUserInfo(null);

        // Redirecionar para a página de login
        window.location.replace('/login');
    };

    return (
        <div className="flex mt-3 justify-center items-center w-full">
            <div className="w-[95%] flex justify-between items-center">
                <Link href="/dashboard">
                    <h1>
                        <img src="/Logo.png" alt="persona" />
                    </h1>
                </Link>

                <div className="flex justify-center items-center w-[465px] rounded-md px-3">
                    <NavigationMenuDemo />
                </div>

                <div className="flex justify-around items-center gap-6">
                    <Icon.ChatCircleText size={21} color="white" />
                    <Icon.BellSimple size={21} color="white" />
                    <Icon.Question size={21} color="white" />
                    <div className="flex justify-end items-center ">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <img src="/Perfil.png" alt="persona" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-dark text-white" >
                                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Perfil</DropdownMenuItem>
                                <Link href="/admin/courses">
                                    <DropdownMenuItem>ADM</DropdownMenuItem>
                                </Link>
                                <DropdownMenuItem>Meus cursos</DropdownMenuItem>
                                <DropdownMenuItem onClick={handleLogout} className="bg-red text-white">Sair</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </div>
        </div>
    );
}
