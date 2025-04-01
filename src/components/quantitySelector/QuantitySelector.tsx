import { QuantityButton } from "../quantityButton/QuantityButton";
import  dataCustomQuantity from "../../services/Data-custom-quantity-service.json";
import { useState } from "react";


export function QuantitySelector() {

    // listening if card.quantitySelector is changing quantity
    const [quantity, setQuantity] = useState<number>(0);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1))
    }
    return (
        <>
        {dataCustomQuantity.map( (data, index) => (
            <div className="flex items-center
            align-middle
            text-justify
            m-1 p-0 "
            key={data.customElement}>
                <div className="
                flex w-full
                bg-transparent
                p-1 gap-1 rounded-lg">
                    <span className="w-full
                    mt-2
                    text-xs
                    data-service
                    ">{data.customElement}</span>
                    <QuantityButton
                    key={`decrease-${index}`}
                    onClick={decreaseQuantity}
                    quantityOperator={"-"}
                    />
                    <span className="mt-1 quantity-span">{quantity}</span>
                    <QuantityButton
                    key={`increase-${index}`}
                    onClick={increaseQuantity}
                    quantityOperator={"+"}
                    />
                </div>
            </div>
            
        ))}
        </>
    )
}

