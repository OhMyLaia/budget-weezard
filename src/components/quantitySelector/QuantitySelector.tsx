import { QuantityButton } from "../quantityButton/QuantityButton";
// import { useState } from "react";
import { CustomDataProps } from "../cards/CardBudget";
import { QuantityHook } from "../../hooks/quantity-hook";

export function QuantitySelector (customElement : CustomDataProps) {

    const {quantity, decreaseQuantity, increaseQuantity} = QuantityHook();


    return (
        <>
            <div className="flex items-center
            align-middle
            text-justify
            m-1 p-0 "
            key={customElement.customElement}>
                <div className="
                flex w-full
                bg-transparent
                p-1 gap-1 rounded-lg">
                    <span className="w-full
                    mt-2
                    text-xs
                    data-service
                    ">{customElement.customElement}</span>
                    <QuantityButton
                    key={`decrease-${customElement}`}
                    onClick={decreaseQuantity}
                    quantityOperator={"-"}
                    />
                    <span className="mt-1 quantity-span">{quantity}</span>
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

