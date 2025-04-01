import { QuantitySelector } from "../quantitySelector/QuantitySelector";
import { useState } from "react";



interface CardBudgetProps {
    title: string;
    description: string;
    price: number;
    custom: boolean;
    quantity: number;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
}

export function CardBudget({
    title,
    description,
    price,
    custom,
    quantity,
    increaseQuantity,
    decreaseQuantity

} : CardBudgetProps) {

    // listening if cards are selected or not -> handle click
    const [isActiveCard, setIsActiveCard] = useState<boolean>(false);

    const toggleCardState = () => {
        setIsActiveCard(prevState => !prevState)
    }

    return (
        <div>
            <div
                onClick={toggleCardState}
                style={{ borderColor: isActiveCard ? "border-green-300" : "border-violet-600" }}
                className={`w-full ${custom === true ? "h-20" : "h-20"}
                bg-purple-100 rounded-lg p-2 flex flex-row gap-1 m-5
                hover:bg-purple-200 focus:outline-2
                focus:outline-violet-500
                text-zinc-800`}>
                <div className="flex-col mr-20 justify-items-start">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="w-60 text-xs text-gray-600 text-start">{description}</p>
                </div>
                <div className="flex items-center justify-end gap-1">
                    <h2 className="text-lg font-bold">{price}€</h2>
                    <div className="flex items-center align-middle gap-2">
                        <input className="dataCardInput" type="checkbox" name="addItemChx" />
                        <label className="text-xs text-gray-600">add</label>
                    </div>
                </div>
                {custom === true &&
                    isActiveCard && (
                        <div className="flex-col align-bottom justify-end mt-2">
                    <QuantitySelector
                        quantity={quantity}
                        onIncrease={increaseQuantity}
                        onDecrease={decreaseQuantity}
                        />
                        </div>
                    )}
            </div>
        </div>
    )
}

// import React from 'react';

// let copyData = [...dataCard]

// function CardBudget(props) {
    
//   return (
//     <p>{props.title}</p>
//   )
// }

// export default CardBudget