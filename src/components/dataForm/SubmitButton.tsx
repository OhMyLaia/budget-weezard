

export function SubmitButton() {
    return (
        <div
        className="
        flex
        flex-col
        text-center
        content-center
        "
        >
            <button className="
            press-start-2p-regular
            rounded-4xl
            gap-1 mb-2 mt-4
            bg-emerald-200 p-2
            hover:bg-blue-200 focus:outline-2
            hover:w-35
            text-zinc-800
            shadow-blue-900
            border-fuchsia-900
            shadow-[7px_7px_0px_0px_blue-900]
            drop-shadow-lg
            border-3
            font-extrabold
            ">
            {"Submit"}
            </button>
        </div>
    )
}