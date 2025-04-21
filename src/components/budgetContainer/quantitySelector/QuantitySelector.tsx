import { CustomDataType } from "../../../types/types";
import { QuantityHook } from "./useQuantitySelector";
import { QuantityButton } from "./buttons/QuantityButton";
import { InfoModal } from "../../ui/infoModal/InfoModal";

export function QuantitySelector(
    props: {
        customElement: CustomDataType;
        productTitle: string;
        onQuantityChange(title: string, newQuantity: number, price: number): void;
        modalTitle: string;
        modalDescription: string;
        modalSvg: string;
    })
    {

    const { quantity, increaseQuantity, decreaseQuantity } = QuantityHook();
    const extraPrice: number = (quantity) * props.customElement.productPrice;
    
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
                        >

                        <InfoModal
                        customTitle={props.modalTitle}
                        customDescription={props.modalDescription}
                        customInfoBtn={`I`}
                        customPrice={(props.customElement.productPrice).toString()}
                        />

                        {quantity === 1 ? "" : "+" + (extraPrice - props.customElement.productPrice) + "€"}</span>
                    <QuantityButton
                        key={`decrease-${props.customElement.productTitle}`}
                        onClick={ () => {
                            if (quantity === 1) return
                            decreaseQuantity();
                            // const newQuantity = quantity - 1;
                            props.onQuantityChange(props.customElement.productTitle, (quantity - 1), props.customElement.productPrice);
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
                            props.onQuantityChange(props.customElement.productTitle, (quantity + 1), props.customElement.productPrice);
                        }}
                        quantityOperator={"+"}
                    />
                </div>
            </div>
        </>
    )
}