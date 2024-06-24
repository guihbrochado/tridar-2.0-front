import { InputWithLabel } from "@/components/InputWithLabel";
import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Dot from "@/components/Dot";
import CardSugestões from "@/components/CardSugestões";

export default function UsagePolicies() {
    return (
        <div className="container py-9">
            <div className="container mx-auto p-4">
                <p className="text-gray-light text-sm mb-1">Conheça nossas políticas 🥇</p>
                <div className="flex">
                    <Dot />
                    <p className=" mx-2 text-white text-xl mb-2 font-bold">Políticas de Uso</p>
                </div>
            </div>
            <div className="flex w-[100%] items-start justify-center gap-6">
                <div className="grid w-[70%] items-center gap-3">
                    <div className="  w-full gap-3 bg-gray-bg-card p-3 rounded border border-[#141414]">
                        <div className="flex items-center justify-start gap-3">

                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-gray-tridar rounded">
                                <Icon.Info
                                    size={21}
                                    color='white'
                                />
                            </div>

                            <h3 className="text-white text-base ">
                                Lorem ipsum dolor sit amet.
                            </h3>
                        </div>
                        <div className="w-full">

                            <h3 className="text-gray-light text-xs my-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat egestas risus et euismod. Ut hendrerit velit quis egestas consectetur. Duis vel dignissim augue. Suspendisse finibus fermentum sollicitudin. Mauris pulvinar sodales purus, ac condimentum turpis blandit vel. Aliquam eleifend fringilla pharetra. Nulla facilisi.
                                <br />
                                <br />
                                Duis nec orci dapibus, convallis quam in, dignissim urna. Sed vel leo lorem. Cras luctus viverra neque. Donec facilisis commodo eros non tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi feugiat velit efficitur elit iaculis laoreet. Vivamus faucibus porta enim, ac lacinia erat posuere ullamcorper. Fusce consequat efficitur ante, vel congue orci tempus ut. Vestibulum rhoncus interdum elit, eget ullamcorper justo ultrices et. Phasellus fringilla tincidunt eros, vitae finibus eros accumsan id. In eget libero nibh. Nunc dapibus sem eu risus pulvinar, in congue magna viverra. Morbi porttitor lorem eget finibus mattis.
                                <br />
                                <br />
                                Integer accumsan, odio id tempus euismod, felis ligula suscipit elit, eu egestas felis magna nec lectus. Sed hendrerit pretium pretium. Vestibulum condimentum eros in dui finibus, a maximus urna bibendum. Vestibulum vestibulum elit vel lectus dignissim, at gravida nulla euismod. Aliquam erat volutpat. Pellentesque convallis eget mi a tempus. Nullam sit amet diam a nunc varius pulvinar. Nullam pharetra tellus sed neque feugiat dapibus.
                                <br />
                                <br />
                                Cras vestibulum dapibus tristique. Mauris fringilla dolor vitae elit congue, a tempus velit tempus. Fusce aliquet ultrices enim, a venenatis leo condimentum non. Mauris venenatis elementum erat, quis suscipit lectus rutrum et. Pellentesque convallis libero id ullamcorper aliquet. Mauris ac orci lectus. Proin eu hendrerit ante. Etiam condimentum et magna sed tempor. Suspendisse a tempus purus. Nunc in augue vitae nisi vestibulum scelerisque. Quisque tortor odio, feugiat at magna nec, fringilla commodo purus. Nam commodo nulla et purus faucibus, eu molestie felis egestas. Quisque malesuada ante eu elit scelerisque vehicula vel nec nibh. Morbi ut neque tristique, iaculis dui sed, varius ipsum.
                                <br />
                                <br />
                                Donec luctus nec enim sit amet dictum. Aliquam tristique sed turpis nec condimentum. Suspendisse potenti. Curabitur risus lectus, dignissim sit amet ipsum in, rhoncus gravida mi. Quisque tincidunt orci vitae lectus tristique convallis. Nulla sed justo id tellus malesuada consectetur vel a augue. Cras at augue molestie, lobortis ipsum at, bibendum erat. Vivamus vulputate ut eros eget egestas. Suspendisse eget lectus vitae metus rutrum porttitor. Fusce vulputate pellentesque condimentum.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="w-[30%] items-start justify-start">
                    <div className=" flex w-full gap-3 p-6 rounded border border-gray-dark">
                        <div className="w-full">
                            <h3 className="text-white text-base ">
                                Lorem Ipsum consectetur adipiscing?
                            </h3>
                            <h3 className="text-gray-light text-xs my-2">
                                Sed facilisis ultricies est vitae vestibulum. Mauris id metus id leo facilisis pellentesque quis quis nisl. Pellentesque et nisi iaculis, placerat enim vitae...
                            </h3>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
