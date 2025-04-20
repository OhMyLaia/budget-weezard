import { CardDataType } from "../../types/types";
import { FinalPriceHook, HandleQuantitesHook, DataCardHook, ShowDataFormHook, CustomDataCardHook } from "./useBudgetContainer";
import { CardBudget } from "./cards/CardBudget";
import { DataForm } from "../budgetContainer/dataForm/DataForm-useForm";
import { useEffect } from "react";

export function BudgetContainer() {

    const { dataCardInitial, setDataCardInitial } = DataCardHook();
    const { finalPrice, setFinalPrice } = FinalPriceHook();
    const { showDataForm, setShowDataForm } = ShowDataFormHook();
    const { customDataCardInitial, setCustomDataCardInitial } = CustomDataCardHook();
    const { quantities, setQuantities } = HandleQuantitesHook();


    const handleCheckboxChange = (index: number) => {
        const updatedCards = [...dataCardInitial];
        updatedCards[index].isCheckedValue = !updatedCards[index].isCheckedValue;

        if (updatedCards.some(card => card.isCheckedValue === true)) setShowDataForm(true)
        else setShowDataForm(false)

        setDataCardInitial(updatedCards);
    };

    useEffect(() => {
        console.log("🔥 useEffect triggered");

        const checkedCards: CardDataType[] = dataCardInitial.filter(card => card.isCheckedValue);

        const totalBasePrice = checkedCards.reduce((sum, card) => sum + card.price, 0);

        const extraCustomCost = customDataCardInitial.reduce((sum: number, product) => {
            if (product.productQuantity > 1) {
                return sum + ((product.productQuantity - 1) * product.productPrice);
            }
            return sum;
        }, 0);

        const totalPrice = totalBasePrice + extraCustomCost

        setFinalPrice(totalPrice);

        console.log(" Final price updated:", totalPrice);
    }, [dataCardInitial, quantities, setFinalPrice]);

    const handleQuantityChange = (productTitle: string, newQuantity: number) => {
        setCustomDataCardInitial(prevState =>
            prevState.map(product => {
                if (product.productTitle === productTitle) {
                    // const quantityDiff = newQuantity
                    // setFinalPrice(prev => prev + product.productPrice );
                    return { ...product, productQuantity: newQuantity }
                }
                return product;
            })
        );
        setQuantities(prev => ({
            ...prev, [productTitle]: newQuantity
        }))
    };


    return (
        <div className="
        w-full
        min-h-screen
        bg-slate-50
        flex
        flex-col
        items-center
        ">
            <div className="
            w-[95%]
            flex
            flex-col
            items-center">

                {dataCardInitial.map((item: CardDataType, index: number) => (
                    <CardBudget
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        custom={item.custom}
                        isCheckedValue={item.isCheckedValue}
                        onCheckedToggled={() => handleCheckboxChange(index)}
                        onQuantityChange={handleQuantityChange}
                        customDataCardHook={customDataCardInitial}
                    />
                ))}
            </div>
            <span
                className="
            text-xl
            flex flex-row
            items-center
            justify-center
            lg:mt-10
            lg:text-2xl
            lg:w-[30%]
            w-[65%]
            rounded-full
            gap-1 mb-2 mt-4
            bg-emerald-200 p-2
            text-zinc-800
            border-blue-900
            ">
                <span
                    className="
                text-blue-950">
                    {`Budgeted price:`}
                </span>
                <h2
                    className="
                text-3xl
                font-bold
                align-middle
                text-blue-950
                ">
                    {finalPrice}</h2>
                <span>{"€"}</span>
            </span>
            {showDataForm === true && (
                <DataForm
                    dataCardInitial={dataCardInitial}
                    customDataCardInitial={customDataCardInitial}
                    finalPrice={finalPrice}
                />
            )}
        </div>
    )
}