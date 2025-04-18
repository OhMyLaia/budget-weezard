import { InputFormType } from "../../../types/types";
import React from "react";

export const InputForm = React.forwardRef<HTMLInputElement, InputFormType>((props, ref) => {
    // const [inputValue, setInputValue] = useState("");
    return (
        <div className="
            flex
            flex-col
            w-fit
            md:w-5/6
            justify-center
            items-center
            text-center
            mx-auto
            ">
            <input
            name={props.name}
            placeholder={props.placeHolder}
            type={props.type}
            onChange={props.onChange}
            onBlur={props.onBlur}
            required={props.required}
            ref={ref}
            className="
                w-full
                rounded-4xl
                flex flex-col gap-1 mb-2 mt-4
                bg-purple-100 p-2
                hover:bg-violet-200 focus:outline-2
                focus:outline-violet-400
                text-zinc-800
                shadow-blue-900
                border-fuchsia-900
                shadow-[7px_7px_0px_0px_blue-900]
                drop-shadow-lg
                border-3
                ps-7
                ">
            </input>
        </div>
    )
})