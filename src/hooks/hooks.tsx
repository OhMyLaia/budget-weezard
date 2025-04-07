import { useState, useEffect } from "react";
import * as globals from "../services/global-elements"
import { CardDataType } from "../types/types";
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


// Revisar luego.
export const IsActiveHook = () => {

    const [isActiveCard, setIsActiveCard] = useState<boolean>(false);
    const toggleCardState = () => {
        setIsActiveCard((prevState) => !prevState)
    }
    return { isActiveCard, setIsActiveCard, toggleCardState }
}

// export const IsCheckedHook = () => {

//     const [isChecked, setIsChecked] = useState(false);
//     const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//         setIsChecked(event.target.checked);
//     }
//     console.log(`isChecked hook triggered, fuera ${isChecked}`)
//     return { isChecked, setIsChecked, handleCheckboxChange }
// }

export const IsCheckedHook = () => {

    const [isChecked, setIsChecked] = useState<boolean>(false)

    return { isChecked, setIsChecked }
}

export const FinalPriceHook = () => {

    const [finalPrice, setFinalPrice] = useState(0);
    console.log(`finalPrice -> ${finalPrice}`)
    return { finalPrice, setFinalPrice }

}

export const DataCardHook = () => {

    const [dataCardInitial, setDataCardInitial] = useState<CardDataType[]>([])
    console.log(`inside datacard hook -> ${dataCardInitial}`);

    useEffect( () => {
        setDataCardInitial(globals.dataCardListState)
    }, [])
    return { dataCardInitial, setDataCardInitial }
}