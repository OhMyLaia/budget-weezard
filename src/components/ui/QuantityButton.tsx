interface QuantityButtonProps {
    quantityOperator: "-" | "+";
    onClick;
}

export function QuantityButton({ quantityOperator }: QuantityButtonProps) {
    return (
        <button className="bg-gray-200 p-2 rounded-full hover:bg-purple-200 focus:outline-2 focus:outline-violet-500">
            {quantityOperator}
        </button>
            )
}

// hacer una funcion que sea para sumar o restar una cantidad
// para eso necesito saber si sumar o restar
// de que objeto 

function changeQuantity(actionType)  {

    
}