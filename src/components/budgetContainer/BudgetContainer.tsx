import { CardDataType } from "../../types/types";
import { FinalPriceHook, DataCardHook, QuantityHook } from "../../hooks/hooks";
import { CardBudget } from "../cards/CardBudget";
import { useEffect } from "react";

export function BudgetContainer() {

    const { dataCardInitial, setDataCardInitial } = DataCardHook();
    const { finalPrice, setFinalPrice } = FinalPriceHook();
    const { quantity, increaseQuantity, decreaseQuantity } = QuantityHook();
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
                        customElement={{
                            productTitle: item.title,
                            productPrice: item.price,
                            productQuantity: item.isCheckedValue === true ? 1 : 0,
                            //aqui va el quantity handling ->
                            onProductIncrease: increaseQuantity,
                            onProductDecrease: decreaseQuantity
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