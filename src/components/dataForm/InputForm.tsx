import { InputFormType } from "../../types/types"

export function InputForm(props: InputFormType) {
    return (
            <div className="
            flex
            flex-col
            justify-center
            align-middle
            self-center
            ms-5
            me-5
            ">
                <input
                    placeholder={props.placeHolder}
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
}