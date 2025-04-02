import { QuantitySelector } from "../quantitySelector/QuantitySelector";
import  dataCustomQuantity from "../../services/Data-custom-quantity-service.json";
import { useState } from "react";



interface CardBudgetProps {
    title: string;
    description: string;
    price: number;
    custom: boolean;
}

export function CardBudget({
    title,
    description,
    price,
    custom,
} : CardBudgetProps) {

    const dataCustom: object[] = [...dataCustomQuantity];


    // listening if cards are selected or not -> handle click
    const [isActiveCard, setIsActiveCard] = useState<boolean>(false);

    const toggleCardState = () => {
        setIsActiveCard(() => true)
    }

    // listening if card.quantitySelector is changing quantity
    const [quantity, setQuantity] = useState<number>(0);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1))
    }

    return (
        <div className="flex">
            {/* Flex row for title and description */}
            <div
                onClick={toggleCardState}
                className={`w-full
                bg-purple-100 rounded-lg p-2 flex flex-col gap-1 m-5
                hover:bg-purple-200 focus:outline-2
                focus:outline-violet-500
                text-zinc-800
                ${isActiveCard === true ? "border-10-green-200" : "border-10-violet-600"}`}>

                    <div className="flex flex-row">

                        <div className="flex flex-col
                        mr-20
                        justify-items-start">

                            <h3 className="text-lg
                            font-bold
                            text-blue-950">{title}</h3>

                            <p className="w-60
                            text-xs
                            text-gray-600
                            text-start">{description}</p>

                    </div>
                {/* Flex row for price and checkbox */}
                    <div className="flex items-center justify-end gap-3">

                        <h2 className="text-lg font-bold text-blue-950">{price}€</h2>

                        <div className="flex items-center align-middle gap-2">

                            <input className="dataCardInput" type="checkbox" name="addItemChx" />
                            <label className="text-xs text-gray-600">add</label>

                        </div>

                    </div>

                        </div>
                    {/* QuantitySelectors and QuantityButtons */}
                    <div className="flex flex-col w-full">
                    {custom === true &&
                        isActiveCard && (

                            <div className="">
                                {dataCustom.map((data, index) => (
                                    <QuantitySelector
                                    key={`${data.customElement}-${index}`}
                                    element={data.customElement}
                                    quantity={quantity}
                                    increaseQuantity={increaseQuantity}
                                    decreaseQuantity={decreaseQuantity}
                                    />

                                ))}
                            </div>

                        )}
                    </div>
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