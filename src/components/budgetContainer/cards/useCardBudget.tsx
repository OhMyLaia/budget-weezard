import { useState } from "react";

export const IsActiveHook = () => {

    const [isActiveCard, setIsActiveCard] = useState<boolean>(false);
    const toggleCardState = () => {
        setIsActiveCard((prevState) => !prevState)
    }
    return { isActiveCard, setIsActiveCard, toggleCardState }
}

export const IsCheckedHook = () => {

    const [isChecked, setIsChecked] = useState<boolean>(false)

    return { isChecked, setIsChecked }
}