// import { IsOpenModalHook } from "./useInfoModal"
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

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
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="
            block text-white
            bg-fuchsia-900
            focus:ring-4 focus:outline-none
            focus:ring-blue-300
            font-medium rounded-full
            text-sm px-5 py-2.5 text-center"
                type="button"
            >
                {props.customInfoBtn}
            </button>

            {isOpen &&
  ReactDOM.createPortal(
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
    backdrop-blur-xs
      bg-opacity-10"
    >
      <div
        className="
        w-3/4
        max-w-lg
        max-h-[90vh]
        overflow-y-auto
        rounded-4xl
        flex
        flex-col
        gap-4
        p-6
        bg-purple-100
        hover:bg-violet-200
        focus:outline-2
        focus:outline-violet-400
        text-zinc-800
        shadow-blue-900
        border-fuchsia-900
        shadow-[7px_7px_0px_0px_blue-900]
        drop-shadow-lg
        border-3
        relative"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="
          absolute
          top-2
          right-3
          text-xl
          text-zinc-600
          hover:text-red-700"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold text-blue-950">
          {props.customTitle}
        </h3>
        <p className="text-gray-700 text-base">
          {`${props.customDescription}. Only extra ${props.customPrice} per extra service.`}
        </p>
      </div>
    </div>,
    document.getElementById("modal-root")!
  )}
        </>
    );
}
