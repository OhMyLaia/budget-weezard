import React from 'react'

interface GenericButtonProps {
    text: string;
    width: string;
    onClick: () => void;
    effect?: string
}

export function GenericButton({ text, width, onClick, effect }: GenericButtonProps) {
    return (
        <div
        className={`
        w-[${width}%]
        flex
        flex-col
        text-center
        content-center
        ${effect}
        `}
        >
            <button
            type="button"
            onClick={onClick}
            className={`
            press-start-2p-regular
            rounded-4xl
            gap-1
            mb-2
            mt-4
            mx-auto
            p-2
            hover:bg-emerald-200 focus:outline-2
            text-zinc-800
            shadow-blue-900
            border-fuchsia-900
            shadow-[7px_7px_0px_0px_blue-900]
            drop-shadow-lg
            border-3
            `}>
                {text}
            </button>
        </div>
    )
}