import { useState, useEffect } from "react";
import * as globals from "../services/global-elements"
import { CardDataType, CustomDataType } from "../types/types";

export const QuantityHook = () => {

    const [quantity, setQuantity] = useState<number>(0);
    const {setFinalPrice} = FinalPriceHook();


    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            return newQuantity;
        });
    }

    const decreaseQuantity = (priceParam: number) => {
        setQuantity(prevQuantity => {
            const newQuantity = Math.max(0, prevQuantity - 1);
            return newQuantity;
        });

        setFinalPrice(prevPrice => {
            console.log(`newQuantity -> ${priceParam}`)
            const newPrice = prevPrice - priceParam;
            return newPrice;
        })
    }
    
    return { quantity, increaseQuantity, decreaseQuantity }
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

//* se refiere al array de servicios-card
export const DataCardHook = () => {

    const [dataCardInitial, setDataCardInitial] = useState<CardDataType[]>([])
    console.log(`inside datacard hook -> ${dataCardInitial}`);

    useEffect( () => {
        setDataCardInitial(globals.dataCardListState)
    }, [])
    return { dataCardInitial, setDataCardInitial }
}

//* se refiere al array de productos-custom
export const CustomDataCardHook = () => {

    const [customDataCardInitial, setCustomDataCardInitial] = useState<CustomDataType[]>([]);

    useEffect( () => {
        setCustomDataCardInitial(globals.customDataCardListState)
    }, [])

    return { customDataCardInitial, setCustomDataCardInitial }
}
