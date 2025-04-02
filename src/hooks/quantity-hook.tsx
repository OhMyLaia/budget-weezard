import { useState } from "react";

export const QuantityHook = () => {

    const [quantity, setQuantity] = useState<number>(0);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1))
    }

    return {quantity, setQuantity, decreaseQuantity, increaseQuantity}

}



