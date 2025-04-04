import { QuantityButton } from "../quantityButton/QuantityButton";
import { useState } from "react";
import { CustomDataProps } from "../cards/CardBudget";

export function QuantitySelector (customElement : CustomDataProps) {

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
            <div className="flex items-center
            align-middle
            text-justify
            m-1
            "
            key={customElement.customElement}>
                <div className="
                flex w-full
                bg-transparent
                p-1 gap-2 rounded-lg">
                    <span className="w-full
                    mt-2
                    text-xs
                    data-service
                    p-2
                    ">{customElement.customElement}</span>
                    <QuantityButton
                    key={`decrease-${customElement}`}
                    onClick={decreaseQuantity}
                    quantityOperator={"-"}
                    />
                    <span className="mt-1 w-8 quantity-span align-middle text-center">{quantity}</span>
                    <QuantityButton
                    key={`increase-${customElement}`}
                    onClick={increaseQuantity}
                    quantityOperator={"+"}
                    />
                </div>
            </div>
        </>
    )
}

