import { CardBudget } from "../cards/CardBudget";
import { useState } from "react";
import * as global from "../services/Data-card-service.json";
import { CardData } from "../../types/CardData";


const selectedCards: object[] = [];


function calculateFinalPrice(isActiveState: boolean, array: Array<CardData>) : number {

    let totalPrice: number = 0;
    array = global.dataCard;

    const errorMssg = (error: string) => `An error occurred, ${error}`;

    try {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            if (isActiveState) {
                totalPrice += item.price
            }
        }
    
        return totalPrice;

    } catch (error) {
        if (!array || array.length === 0) {
            console.log(errorMssg(`Array ${array} does not exist or is empty`), error)
        } else {
            console.log(`An error occurred, ${error}`)
        }

    }

}


export function BudgetContainer() {


    // listening dataCard for changes
    // const [currentDataCard, setCurrentDataCard] = useState(dataCard);

    
    // listening if selectedCards has changes (to calculate total €€€)
    // const [selectedItems, setSelectedItems] = useState<Array<object>>(selectedCards);

    const finalBudget : number = calculateFinalPrice(isActiveCard, global.dataCard);

    return (
        <div className="w-full min-h-screen bg-slate-50">
            <div className="w-full flex flex-col items-center">

                {global.dataCard.map((item: CardData, index: number) => (
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
                        {`Budgeted price: ${finalBudget}`}
                        <span>

                        </span>
                    </h2>
        </div>
    )
}



