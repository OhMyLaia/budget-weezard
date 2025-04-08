import { QuantityButton } from "../quantityButton/QuantityButton";
import { CustomDataType, QuantitySelectorProps } from "../../types/types";
import { QuantityHook } from "../../hooks/hooks";
// import { CustomDataCardHook } from "../../hooks/hooks";

export function QuantitySelector (
    props: { customElement: CustomDataType, index: number }
) {
    // const [customDataCardInitial, setCustomDataCardInitial] = CustomDataCardHook();
    // const {quantity, decreaseQuantity, increaseQuantity} = QuantityHook();
    
    const {quantity, increaseQuantity, decreaseQuantity} = QuantityHook();
    // props.customElement.productQuantity = quantity;
    console.log(`productQuantity -> ${props.customElement.productQuantity}`);

    const handleIncrease = () => increaseQuantity();
    const handleDecrease = () => decreaseQuantity();

    return (
        <>
            <div className="flex items-center
            align-middle
            text-justify
            m-1
            "
            key={props.customElement.productTitle}>
                <div className="
                flex w-full
                bg-transparent
                p-1 gap-2 rounded-lg">
                    <span className="w-full
                    mt-2
                    text-xs
                    data-service
                    p-2
                    ">{props.customElement.productTitle}</span>
                    <QuantityButton
                    key={`decrease-${props.customElement.productTitle}`}
                    onClick={handleIncrease}
                    quantityOperator={"-"}
                    />
                    <span className="mt-1 w-8 quantity-span align-middle text-center">{quantity}</span>
                    <QuantityButton
                    key={`increase-${props.customElement.productTitle}`}
                    onClick={handleDecrease}
                    quantityOperator={"+"}
                    />
                </div>
            </div>
        </>
    )
}

