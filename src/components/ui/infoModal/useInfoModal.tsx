import { useState } from "react"

export function IsOpenModalHook() {

    const [isOpen, setIsOpen] = useState(false);

    return { isOpen, setIsOpen }

}