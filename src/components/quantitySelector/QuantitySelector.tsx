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
            <div className="bg-purple-50 w-1/3 p-1 gap-1 rounded-lg">
                <span className="data-service">{data.customElement}</span>
                <QuantityButton
                onClick={onDecrease}
                quantityOperator={"-"}
                />
                <span className="quantity-span">{quantity}</span>
                <QuantityButton
                onClick={onIncrease}
                quantityOperator={"+"}
                />
                
            </div>
        ))}
        </>
    )
}

