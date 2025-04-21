// import { IsOpenModalHook } from "./useInfoModal"
import { useState, useEffect } from "react";

export function InfoModal(props:
    {
        customTitle: string,
        customDescription: string,
        customInfoBtn: string,
        customPrice: string,
    }
) {

    // const { isOpen, setIsOpen } = IsOpenModalHook();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log("📢 Modal isOpen:", isOpen);
    }, [isOpen]);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}
                className="
                block text-white
                bg-blue-700
                hover:bg-blue-800
                focus:ring-4 focus:outline-non
                focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center"
                type="button">
                {props.customInfoBtn}
            </button>
            {isOpen === true && (
                <div id="popup-modal" tabIndex={-1} className="
                overflow-y-auto
                fixed top-0 right-0 left-0 z-50
                justify-center
                items-center
                w-full
                md:inset-0
                h-[calc(100%-1rem)]
                max-h-full">
                    <div className="relative
                    p-4 w-full
                    max-w-md
                    max-h-full">
                        <div className="relative
                        bg-white
                        rounded-lg
                        shadow-sm dark:bg-gray-700">
                            <button
                                onClick={() => setIsOpen(false)}
                                type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                x
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">${props.customTitle}</h3>
                                <p>{`${props.customDescription}. Only extra ${props.customPrice} per extra service.`}</p>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
