import { CardDataType } from "../../types/types";
// import * as globals from "../../services/global-elements";
import { FinalPriceHook, DataCardHook } from "../../hooks/hooks";
import { CardBudget } from "../cards/CardBudget";
import { useEffect } from "react";





// function calculateFinalPrice({
//     array
// }: CalculateFinalPriceParams): number {

//     const errorMssg = (error: string): string => `An error occurred, ${error}`;
//     let finalBudget: number = 0;

//     try {
//         // for (let i = 0; i < array.length; i++) {
//         //     const item = array[i];
//         //     console.log(`inside for ${item} - ${isChecked} - ${item.price}`)
//         //     if (isChecked) {
//         //         console.log(`Adding price to finalBudget: ${item.price}`)
//         //         finalBudget += item.price
//         //     }
//         // }

//     } catch (error) {
//         if (!array || array.length === 0) {
//             console.log(errorMssg(`Array ${array} does not exist or is empty`), error);
//         } else {
//             console.log(`An error occurred, ${error}`);
//         }
//     }

//     return finalBudget;
// }


export function BudgetContainer() {

    // listening dataCard for changes
    // const [currentDataCard, setCurrentDataCard] = useState(dataCard);


    // listening if selectedCards has changes (to calculate total €€€)
    // const [selectedItems, setSelectedItems] = useState<Array<object>>(selectedCards);

    // const { isChecked, setIsChecked } = IsCheckedHook();
    const { dataCardInitial, setDataCardInitial } = DataCardHook();
    const { finalPrice, setFinalPrice } = FinalPriceHook();

    const handleCheckboxChange = (index: number) => {
        const updatedCards = [...dataCardInitial];
        updatedCards[index].isCheckedValue = !updatedCards[index].isCheckedValue;
        setDataCardInitial(updatedCards);
    };

    useEffect(() => {
        console.log("🔥 useEffect triggered");

        // Filter cards that are checked
        const checkedCards: CardDataType[] = dataCardInitial.filter(card => card.isCheckedValue);

        // Sum prices
        const totalPrice = checkedCards.reduce((sum, card) => sum + card.price, 0);

        // Update final price state
        setFinalPrice(totalPrice);

        console.log("✅ Final price updated:", totalPrice);
    }, [dataCardInitial, setFinalPrice]); // re-run when card list changes (e.g. isChecked updated)


    // const finalBudget : number = calculateFinalPrice(isActiveCard, globals.dataCard);

    return (
        <div className="w-full min-h-screen bg-slate-50">
            <div className="w-full flex flex-col items-center">

                {dataCardInitial.map((item: CardDataType, index: number) => (
                    <CardBudget
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        custom={item.custom}
                        isCheckedValue={item.isCheckedValue}
                        onCheckedToggled={ () => handleCheckboxChange(index) }
                    />
                ))}
            </div>
            <h2>
                {`Budgeted price: ${finalPrice}`}
            </h2>
        </div>
    )
}



