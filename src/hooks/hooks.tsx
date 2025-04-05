import { useState } from "react";
import * as globals from "../services/global-elements"
// import { data } from "react-router-dom";

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
        console.log(`isChecked hook triggered, dentro${isChecked}`)
    }
    console.log(`isChecked hook triggered, fuera ${isChecked}`)
    return { isChecked, setIsChecked, handleCheckboxChange }
}

export const FinalPriceHook = () => {

    const [finalPrice, setFinalPrice] = useState(0);
    return { finalPrice, setFinalPrice }

}

export const DataCardHook = () => {

    const [dataCard, setDataCard] = useState(globals.dataCard)
    console.log(`inside datacard hook -> ${globals.dataCard}`)
    return { dataCard, setDataCard }
}