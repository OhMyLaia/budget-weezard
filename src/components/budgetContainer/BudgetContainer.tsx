// import { useState } from "react";
import { CardDataType, CalculateFinalPriceParams } from "../../types/types";
import * as globals from "../../services/global-elements";
import { IsActiveHook, FinalPriceHook } from "../../hooks/hooks";
import { CardBudget } from "../cards/CardBudget";


function calculateFinalPrice({
    isActiveCard,
    array
} : CalculateFinalPriceParams): number {

    const errorMssg = (error: string): string => `An error occurred, ${error}`;
    let finalBudget: number = 0;

    try {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];

            if (isActiveCard) {
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

    const {isActiveCard} = IsActiveHook();
    const dataCardParams = globals.dataCard;
    const { finalPrice, setFinalPrice } = FinalPriceHook();
    const finalPriceParam = calculateFinalPrice({isActiveCard, array: dataCardParams});
    setFinalPrice(finalPriceParam);
    console.log(finalPriceParam, `finalpriceparam`);


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
                        {`Budgeted price: ${finalPriceParam}`}
                        <span>

                        </span>
                    </h2>
        </div>
    )
}



