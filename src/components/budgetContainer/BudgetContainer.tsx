import ogDataCard from "../../services/Data-card-service.json";
import { CardBudget } from "../cards/CardBudget";
import { useState } from "react";
import { CardData } from "../../types/CardData";

const selectedCards: object[] = [];



export function BudgetContainer() {

    const dataCard: CardData[] = [...ogDataCard];

    // listening dataCard for changes
    // const [currentDataCard, setCurrentDataCard] = useState(dataCard);

    // listening if card.quantitySelector is changing quantity
    const [quantity, setQuantity] = useState<number>(0);

    // listening if selectedCards has changes (to calculate total €€€)
    // const [selectedItems, setSelectedItems] = useState<Array<object>>(selectedCards);


    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1))
    }

    return (
        <div className="flex basis-full justify-center items-center min-h-screen bg-amber-300">
            <div className="basis-full flex flex-col justify-center items-center place-content-between
            bg-green-900">
                {dataCard.map((item, index) => (
                    <CardBudget
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        custom={item.custom}
                        quantity={quantity}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                    />
                ))}
            </div>
        </div>
    )
}



