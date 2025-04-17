import { CustomDataType } from "../../types/types";
import { QuantityHook } from "./useQuantitySelector";
import { QuantityButton } from "../buttons/QuantityButton";

export function QuantitySelector(
    props: {
        customElement: CustomDataType;
        productTitle: string;
        onQuantityChange(newQuantity: number): void;
    })
    {

    const { quantity, increaseQuantity, decreaseQuantity, setFinalPrice } = QuantityHook();
    const extraPrice: number = (quantity -1) * props.customElement.productPrice;

    console.log(`newQuantity -> ${props.customElement.productPrice}, quantity -> ${quantity}`);

    return (
        <>
            <div
            className="flex items-center
            align-middle
            text-justify
            m-1
            "
            key={props.customElement.productTitle}>
                <div
                className="
                flex w-full
                bg-transparent
                p-1 gap-2 rounded-lg">
                    <span className="w-full
                    mt-2
                    text-xs
                    text-gray-600
                    lg:text-2xl
                    md:text-lg
                    data-service
                    p-2
                    ">{props.customElement.productTitle}</span>
                        <span
                        className="
                        text-blue-950
                        bg-emerald-200
                        h-8
                        text-xs
                        md:text-lg
                        lg:text-2xl
                        translate-y-3
                        lg:translate-y-0"
                    >{quantity === 1 ? "" : "+" + extraPrice + "€"}</span>
                    <QuantityButton
                        key={`decrease-${props.customElement.productTitle}`}
                        onClick={
                            quantity === 1 ?
                            () => {} :
                            () => {
                            decreaseQuantity();
                            props.onQuantityChange(-props.customElement.productPrice);
                            // setFinalPrice()
                        }}
                        quantityOperator={"-"}
                    />
                    <span className="
                    mt-1
                    w-8
                    quantity-span
                    align-middle
                    text-center
                    ">
                    {quantity}
                    </span>
                    <QuantityButton
                        key={`increase-${props.customElement.productTitle}`}
                        onClick={() => {
                            increaseQuantity();
                            props.onQuantityChange(props.customElement.productPrice);
                        }}
                        quantityOperator={"+"}
                    />
                </div>
            </div>
        </>
    )
}