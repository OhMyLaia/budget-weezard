import { CardDataType } from "../../types/types";
import { FinalPriceHook, DataCardHook, UserBudgetHook, ShowDataFormHook, CustomDataCardHook } from "../../hooks/hooks";
import { CardBudget } from "../cards/CardBudget";
import { DataForm } from "../dataForm/DataForm-useForm";
import { useEffect } from "react";

export function BudgetContainer() {

    const { dataCardInitial, setDataCardInitial } = DataCardHook();
    const { finalPrice, setFinalPrice } = FinalPriceHook();
    const {userBudgetListInitial, setUserBudgetListInitial} = UserBudgetHook();
    const { showDataForm, setShowDataForm } = ShowDataFormHook();
    const { customDataCardInitial, setCustomDataCardInitial } = CustomDataCardHook();

    

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

        const totalPrice = checkedCards.reduce((sum, card) => sum + card.price, 0);

        setFinalPrice(totalPrice);

        console.log(" Final price updated:", totalPrice);
    }, [dataCardInitial, setFinalPrice]);

    const handleQuantityChange = (productTitle: string, newQuantity: number) => {
        //! tengo que poner esto en algun lugar pero no se donde, porque requiere
        //! dos states: quantity y el setter
        // setCustomDataCardInitial(prevState =>
        //     prevState.map(product =>
        //         product.productTitle === props.productTitle ?
        //         { ...product, productQuantity: quantity}
        //         : product
        //     ))
        console.log(`newQuantity -> ${newQuantity}`)
    setFinalPrice(prevPrice => prevPrice + newQuantity);
    }

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
                        onCheckedToggled={ () => handleCheckboxChange(index) }
                        onQuantityChange={(productTitle, newQuantity) => {
                            handleQuantityChange(productTitle, newQuantity)
                        }}
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
                userBudgetListInitial={userBudgetListInitial}
                setUserBudgetListInitial={setUserBudgetListInitial}
                dataCardInitial={dataCardInitial}
                customDataCardInitial={customDataCardInitial}
                finalPrice={finalPrice}
                />
            )}
        </div>
    )
}