import { useState } from "react";

export const QuantityHook = () => {

    const [quantity, setQuantity] = useState<number>(0);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1))
    }

    return { quantity, setQuantity, decreaseQuantity, increaseQuantity }

}


export const IsActiveHook = () => {

    const [isActiveCard, setIsActiveCard] = useState<boolean>(false);

    const toggleCardState = () => {
        setIsActiveCard(() => true)
    }

    return { isActiveCard, setIsActiveCard, toggleCardState }

}

export const IsCheckedHook = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(event.target.checked);
    }

    return { isChecked, setIsChecked, handleCheckboxChange }
}