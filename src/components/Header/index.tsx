import { Input } from "../ui/input";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function Header() {
    return (
        <div className="flex mt-3 justify-center items-center w-full">
            <div className="w-[95%] flex justify-between items-center">
                <div className="bg-[#141414] flex justify-center items-center w-[465px] rounded-md px-3">
                    <Icon.MagnifyingGlass
                        size={21}
                        color="gray"
                    />
                    <Input
                        className="bg-[#141414] text-white border-none h-[33px]"
                        placeholder="Pesquisa..."
                        type="search"
                    />
                </div>

                <div className="flex justify-around items-center w-[25%]">
                    <Icon.ChatCircleText
                        size={21}
                        color="gray"
                    />
                    <Icon.BellSimple
                        size={21}
                        color="gray"
                    />
                    <Icon.Question
                        size={21}
                        color="gray"
                    />
                    <div className="flex justify-end items-center ">
                        <img src="/Perfil.png" alt="persona" />
                        <h3 className="px-6 text-[#BABABA] text-xs ">Olá, Luis</h3>
                        <Icon.CaretDown
                            size={21}
                            color="gray"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
