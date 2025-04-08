import { CardDataType } from "../../types/types";
import { FinalPriceHook, DataCardHook, QuantityHook } from "../../hooks/hooks";
import { CardBudget } from "../cards/CardBudget";
import { useEffect } from "react";

export function BudgetContainer() {

    const { dataCardInitial, setDataCardInitial } = DataCardHook();
    const { finalPrice, setFinalPrice } = FinalPriceHook();
    // const { quantity } = QuantityHook();
    // const { customDataCardInitial, increaseQuantity, decreaseQuantity } = CustomDataCardHook();

    const handleCheckboxChange = (index: number) => {
        const updatedCards = [...dataCardInitial];
        updatedCards[index].isCheckedValue = !updatedCards[index].isCheckedValue;
        setDataCardInitial(updatedCards);
    };

    useEffect(() => {
        console.log("🔥 useEffect triggered");

        const checkedCards: CardDataType[] = dataCardInitial.filter(card => card.isCheckedValue);

        const totalPrice = checkedCards.reduce((sum, card) => sum + card.price, 0);

        setFinalPrice(totalPrice);

        console.log(" Final price updated:", totalPrice);
    }, [dataCardInitial, setFinalPrice]);

    const handleQuantityChange = (newQuantity: number) => {
        console.log(`newQuantity -> ${newQuantity}`)
        setFinalPrice(prevPrice => prevPrice + newQuantity);
    }

    return (
        <div className="w-full min-h-screen bg-slate-50">
            <div className="w-full flex flex-col items-center">

                {dataCardInitial.map((item: CardDataType, index: number) => (
                    <CardBudget
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        custom={item.custom}
                        isCheckedValue={item.isCheckedValue}
                        onCheckedToggled={ () => handleCheckboxChange(index) }
                        onQuantityChange={(newQuantity) => {
                            handleQuantityChange(newQuantity)
                        }}
                    />
                ))}
            </div>
            <h2>
                {`Budgeted price: ${finalPrice}`}
            </h2>
        </div>
    )
}