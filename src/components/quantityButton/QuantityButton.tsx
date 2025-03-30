


export function QuantityButton( quantityOperator : string ) {
    return (
        <button
        // onClick={quantityOperator === "+" ? increaseQuantity : decreaseQuantity}
        className="bg-gray-200 p-2 rounded-full hover:bg-purple-200 focus:outline-2 focus:outline-violet-500">
            {quantityOperator}
        </button>
    )
}

// hacer una funcion que sea para sumar o restar una cantidad
// para eso necesito saber si sumar o restar
// de que objeto 

// export function changeQuantity(item: object, actionType: QuantityButtonProps)  {
// if (item.actionType === "+") item.quantity++;
// if (item.actionType === "-") item.quantity--;

// }