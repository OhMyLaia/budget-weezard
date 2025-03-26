import { QuantityButton } from "../ui/QuantityButton";
import  dataCustomQuantity from "../../services/Data-custom-quantity-service.json";
//una cosa es el selector otra el boton

function QuantitySelector() {
    return (
        <div>
            <div className="bg-purple-50 w-1/3 p-1 gap-1 rounded-lg">
                <QuantityButton
                quantityOperator="-"
                onClick
                />
                <span className="quantity-span">{dataCustomQuantity.quantity}</span>
                <QuantityButton
                quantityOperator="+"
                />
            </div>
        </div>
    )
}

