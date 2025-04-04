import { QuantityButton } from "../quantityButton/QuantityButton";
import { CustomDataType } from "../../types/types";
import { QuantityHook } from "../../hooks/hooks";

export function QuantitySelector (customElement : CustomDataType) {

    const {quantity, decreaseQuantity, increaseQuantity} = QuantityHook();

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

