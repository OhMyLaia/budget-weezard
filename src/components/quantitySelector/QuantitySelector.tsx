import { QuantityButton } from "../quantityButton/QuantityButton";
import { CustomDataType, QuantitySelectorProps } from "../../types/types";
// import { CustomDataCardHook } from "../../hooks/hooks";

export function QuantitySelector (
    props: { customElement: CustomDataType }
) {
    // const [customDataCardInitial, setCustomDataCardInitial] = CustomDataCardHook();
    console.log(`productQuantity -> ${props.customElement.productQuantity}`)
    // const {quantity, decreaseQuantity, increaseQuantity} = QuantityHook();

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
                    onClick={props.customElement.onProductDecrease}
                    quantityOperator={"-"}
                    />
                    <span className="mt-1 w-8 quantity-span align-middle text-center">{props.customElement.productQuantity}</span>
                    <QuantityButton
                    key={`increase-${props.customElement.productTitle}`}
                    onClick={props.customElement.onProductIncrease}
                    quantityOperator={"+"}
                    />
                </div>
            </div>
        </>
    )
}

