import * as Icon from "@phosphor-icons/react/dist/ssr";
import { NavigationMenuDemo } from "../NavigationMenuDemo";
import Link from "next/link";

export default function Header() {
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
                        <img src="/Perfil.png" alt="persona" />
                        {/* <h3 className="px-6 text-[#BABABA] text-xs ">Olá, Luis</h3> */}
                        {/* <Icon.CaretDown size={21} color="gray" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
