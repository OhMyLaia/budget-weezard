import { QuantitySelector } from "../quantitySelector/QuantitySelector";

export function CardBudget({
    title,
    description,
    price,
    custom,
    onClick,
    isActive,
    quantity,
    increaseQuantity,
    decreaseQuantity
} : {
    title: string;
    description: string;
    price: number;
    custom: boolean;
    onClick: () => void;
    isActive: boolean;
    quantity: number;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;

}) {

    return (
        <div>
            <div
                onClick={onClick}
                className={`w-1/2 ${custom === true ? "h-40" : "h-20"} bg-purple-100 rounded-lg p-4 flex flex-row gap-3 hover:bg-purple-200 focus:outline-2  focus:outline-violet-500`}>
                <div className="flex-col mr-20 justify-items-start">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
                <div className="w-2/3 flex items-center align-middle justify-end gap-10">
                    <h2 className="text-lg font-bold">{price}€</h2>
                    <div className="flex items-center align-middle gap-2">
                        <input className="dataCardInput" type="checkbox" name="addItemChx" />
                        <label className="text-xs text-gray-600">add</label>
                    </div>
                </div>
                {custom === true &&
                    isActive && (
                    <QuantitySelector
                        quantity={quantity}
                        onIncrease={increaseQuantity}
                        onDecrease={decreaseQuantity}
                    />)}
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