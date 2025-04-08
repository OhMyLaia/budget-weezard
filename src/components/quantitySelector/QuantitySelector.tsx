import { QuantityButton } from "../quantityButton/QuantityButton";
import { CustomDataType } from "../../types/types";
import { QuantityHook } from "../../hooks/hooks";

export function QuantitySelector (
    props: { customElement: CustomDataType }
) {

    const {quantity, increaseQuantity, decreaseQuantity} = QuantityHook();
    const extraPrice : number = quantity * props.customElement.productPrice;

    console.log(`productQuantity -> ${props.customElement.productQuantity}, quantity -> ${quantity}`);


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
                    <span
                    className="text-xs"
                    >{quantity === 0 ? "" : "+" + extraPrice + "€"}</span>
                    <QuantityButton
                    key={`decrease-${props.customElement.productTitle}`}
                    onClick={decreaseQuantity}
                    quantityOperator={"-"}
                    />
                    <span className="mt-1 w-8 quantity-span align-middle text-center">{quantity}</span>
                    <QuantityButton
                    key={`increase-${props.customElement.productTitle}`}
                    onClick={increaseQuantity}
                    quantityOperator={"+"}
                    />
                </div>
            </div>
        </>
    )
}

