import { useState } from "react";

export const QuantityHook = () => {

    const [quantity, setQuantity] = useState<number>(1);
    // const {setFinalPrice} = FinalPriceHook();


    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            return newQuantity;
        });
    }

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = Math.max(0, prevQuantity - 1);
            return newQuantity;
        });


        // setFinalPrice(prevPrice => {
        //     console.log(`newQuantity -> ${priceParam}`)
        //     const newPrice = prevPrice - priceParam;
        //     return newPrice;
        // })
    }
    
    return { quantity, increaseQuantity, decreaseQuantity }
}