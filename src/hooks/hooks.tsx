import { useState, useEffect } from "react";
import * as globals from "../services/global-elements"
import { CardDataType, CustomDataType } from "../types/types";

export const QuantityHook = () => {

    const [quantity, setQuantity] = useState<number>(0);
    
    return { quantity, setQuantity }
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


    const increaseQuantity = (index: number) => {
        const updatedCards = [...customDataCardInitial];
        updatedCards[index].productQuantity = (updatedCards[index].productQuantity || 0) + 1;
        setCustomDataCardInitial(updatedCards)
    }

    const decreaseQuantity = (index: number) => {
        const updatedCards = [...customDataCardInitial];
        updatedCards[index].productQuantity = Math.max(0, (updatedCards[index].productQuantity || 0) - 1 );
        setCustomDataCardInitial(updatedCards)
    }

    return { customDataCardInitial, increaseQuantity, decreaseQuantity }
}
