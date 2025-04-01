import { QuantityButton } from "../quantityButton/QuantityButton";
import  dataCustomQuantity from "../../services/Data-custom-quantity-service.json";


export function QuantitySelector({
    quantity,
    onIncrease,
    onDecrease
} : {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    }) {
    return (
        <>
        {dataCustomQuantity.map( data => (
            <div className="flex items-center align-middle text-justify m-1 p-0 ">
                <div className="flex w-full bg-purple-50 p-1 gap-1 rounded-lg">
                    <span className="w-full mt-2 data-service text-xs">{data.customElement}</span>
                    <QuantityButton
                    onClick={onDecrease}
                    quantityOperator={"-"}
                    />
                    <span className="mt-2 quantity-span">{quantity}</span>
                    <QuantityButton
                    onClick={onIncrease}
                    quantityOperator={"+"}
                    />
                </div>
            </div>
        ))}
        </>
    )
}

