import { useState, useEffect } from "react";
import * as globals from "../../services/global-elements";
import { CardDataType, CustomDataType, UserBudgetType } from "../../types/types";

//* se refiere al array de servicios-card
export const DataCardHook = () => {

    const [dataCardInitial, setDataCardInitial] = useState<CardDataType[]>([])
    console.log(`inside datacard hook -> ${dataCardInitial}`);

    // useEffect( () => {
    //     setDataCardInitial(globals.dataCardListState)
    // }, [])

    useEffect(() => {
        const cardsReset = globals.dataCardListState.map(card => ({
            ...card,
            isCheckedValue: false,
        }));
        setDataCardInitial(cardsReset);
    }, []);


    return { dataCardInitial, setDataCardInitial }
}

//* se refiere al array de productos-custom
export const CustomDataCardHook = () => {

    const [customDataCardInitial, setCustomDataCardInitial] = useState<CustomDataType[]>([]);

    useEffect(() => {
        setCustomDataCardInitial(globals.customDataCardListState)
    }, [])

    return { customDataCardInitial, setCustomDataCardInitial }
}

export const FinalPriceHook = () => {

    const [finalPrice, setFinalPrice] = useState(0);
    console.log(`finalPrice -> ${finalPrice}`)
    return { finalPrice, setFinalPrice }

}

export const UserBudgetHook = () => {

    const [userBudgetListInitial, setUserBudgetListInitial] = useState<UserBudgetType[]>([]);

    useEffect(() => {
        setUserBudgetListInitial(globals.budgetListArr)
    }, [])

    return { userBudgetListInitial, setUserBudgetListInitial }
}

export const ShowDataFormHook = () => {

    const [showDataForm, setShowDataForm] = useState<boolean>(false);

    return { showDataForm, setShowDataForm }
}

export const HandleQuantitesHook = () => {
    const [quantities, setQuantities] = useState<{ [title: string]: number }>({});

    return { quantities, setQuantities }
}