import { useState } from "react";
import { CardDataType, CalculateFinalPriceParams } from "../../types/types";
import * as globals from "../../services/global-elements";
import { FinalPriceHook, IsCheckedHook } from "../../hooks/hooks";
import { CardBudget } from "../cards/CardBudget";
import { useEffect } from "react";


function calculateFinalPrice({
    isChecked,
    array
} : CalculateFinalPriceParams): number {

    const errorMssg = (error: string): string => `An error occurred, ${error}`;
    let finalBudget: number = 0;

    try {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            console.log(`inside for ${item} - ${isChecked} - ${item.price}`)
            if (isChecked) {
                finalBudget += item.price
            }
        }

    } catch (error) {
        if (!array || array.length === 0) {
            console.log(errorMssg(`Array ${array} does not exist or is empty`), error);
        } else {
            console.log(`An error occurred, ${error}`);
        }
    }

    return finalBudget;
}


export function BudgetContainer() {

    // listening dataCard for changes
    // const [currentDataCard, setCurrentDataCard] = useState(dataCard);

    
    // listening if selectedCards has changes (to calculate total €€€)
    // const [selectedItems, setSelectedItems] = useState<Array<object>>(selectedCards);

    const {isChecked } = IsCheckedHook();
    const dataCardParams = globals.dataCard;
    const { finalPrice, setFinalPrice } = FinalPriceHook();
    
    
    useEffect( () => {
        const finalPriceParams = calculateFinalPrice({isChecked, array: dataCardParams});
        setFinalPrice(finalPriceParams);
        console.log(finalPrice, `finalPrice inside useEffect`);
    }, [isChecked, dataCardParams]);


    // const finalBudget : number = calculateFinalPrice(isActiveCard, globals.dataCard);

    return (
        <div className="w-full min-h-screen bg-slate-50">
            <div className="w-full flex flex-col items-center">

                {globals.dataCard.map((item: CardDataType, index: number) => (
                    <CardBudget
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        custom={item.custom}
                    />
                ))}
            </div>
            <h2>
                        {`Budgeted price: ${finalPrice}`}
                        <span>

                        </span>
                    </h2>
        </div>
    )
}



