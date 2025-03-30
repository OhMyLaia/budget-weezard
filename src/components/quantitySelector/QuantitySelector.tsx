import { QuantityButton } from "../quantityButton/QuantityButton";
import  dataCustomQuantity from "../../services/Data-custom-quantity-service.json";
//una cosa es el selector otra el boton
// hacer una interface

// interface QuantitySelectorProps {
//     selectedElement :{
//         customElement: string,
//         quantity: number
//     }
// }

//aqui pasamos funciones decrease(void), increase(void), quantity...



export function QuantitySelector({quantity, onIncrease, onDecrease} : {quantity: number; onIncrease: () => void; onDecrease: () => void}) {
    return (
        dataCustomQuantity.map((data: {customElement: string}) => {
                <div className="bg-purple-50 w-1/3 p-1 gap-1 rounded-lg">
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
        }))
}

