
// prevent default noseque


export function SubmitButton(props: {disabled: boolean}) {
    return (
        <div
        className="
        flex
        flex-col
        text-center
        content-center
        "
        >
            <button
            type="submit"
            className={`
            press-start-2p-regular
            rounded-4xl
            gap-1
            mb-2
            mt-4
            mx-auto
            md:w-1/2
            p-2
            hover:bg-purple-200 focus:outline-2
            text-zinc-800
            shadow-blue-900
            border-fuchsia-900
            shadow-[7px_7px_0px_0px_blue-900]
            drop-shadow-lg
            border-3
            font-extrabold
            ${props.disabled === true ?
                "bg-gray-200" :
                "bg-blue-200"}
            `}>
            {"Submit"}
            </button>
        </div>
    )
}