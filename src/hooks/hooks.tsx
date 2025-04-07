import { useState, useEffect } from "react";
import * as globals from "../services/global-elements"
import { CardDataType } from "../types/types";

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