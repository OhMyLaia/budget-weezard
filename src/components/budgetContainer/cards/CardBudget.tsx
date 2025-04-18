import { CustomDataType, CustomDataCardType } from "../../../types/types";
import { IsActiveHook } from "./useCardBudget";
import { QuantitySelector } from "../quantitySelector/QuantitySelector";

export function CardBudget(
    {
        title,
        description,
        price,
        custom,
        isCheckedValue,
        onCheckedToggled,
        onQuantityChange,
        customDataCardHook
    }: CustomDataCardType

) {
    const {toggleCardState} = IsActiveHook();
    // const { quantity, increaseQuantity, decreaseQuantity } = QuantityHook();

    return (
        <div className="
        flex
        w-[95%]
        md:w-[70%]
        lg:w-[70%]">

            {/* Flex row for title and description */}
            <div
                onClick={toggleCardState}
                className={
                    `w-full
                rounded-4xl
                flex flex-col gap-1 mb-2 mt-4
                bg-purple-100 p-2
                hover:bg-violet-200 focus:outline-2
                focus:outline-violet-400
                text-zinc-800
                shadow-blue-900
                border-fuchsia-900
                shadow-[7px_7px_0px_0px_blue-900]
                drop-shadow-lg
                border-3
                ${isCheckedValue ?
                        "border-3 bg-violet-200" :
                        ""}`
                }>
                <div className="
                flex
                w-full
                flex-row">
                    <div className="
                    flex
                    flex-col
                    mr-6
                    justify-items-start
                    w-1/2
                    w-">
                        <h3 className="text-lg
                        lg:text-5xl
                        md:text-3xl
                        ms-2
                        mt-2
                        font-bold
                        text-blue-950
                        ">{title}</h3>
                        <p className="w-50
                        md:text-xl
                        md:w-full
                        lg:text-2xl
                        lg:w-full
                        ms-2
                        mt-2
                        text-xs
                        text-gray-600
                        text-start"
                        >{description}</p>
                    </div>
                    {/* Flex row for price and checkbox */}
                    <div className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-1 pt-15
                    -translate-x-5
                    lg:w-[20%]
                    lg:translate-x-10
                    lg:gap-10
                    md:w-[10%]
                    md:translate-x-20
                    md:items-end">
                        <h2 className="
                        text-lg
                        font-bold
                        md:text-2xl
                        md:me-1
                        lg:text-3xl
                        text-blue-950
                        "
                        >{price}€</h2>
                        <div className="
                        flex
                        items-center
                        align-middle
                        gap-1">
                            <input className="dataCardInput"
                                type="checkbox"
                                name="addItemChx"
                                checked={isCheckedValue}
                                onChange={onCheckedToggled}
                            />
                            <label className="
                            text-xs
                            text-gray-600
                            max-w-xs
                            md:text-lg
                            lg:text-2xl
                            ">
                                {isCheckedValue ? "added!" : "add"}
                            </label>
                        </div>
                    </div>
                </div>
                {/* QuantitySelectors and QuantityButtons */}
                <div className="
                flex
                flex-col
                w-full
                md:text-xl
                lg:text-3xl">
                    {custom === true && isCheckedValue === true && (
                            <div>
                                {customDataCardHook.map((data: CustomDataType) => (
                                    <QuantitySelector
                                        key={data.productTitle}
                                        customElement={data}
                                        productTitle={title}
                                        onQuantityChange={(productTitle: string, newQuantity: number) => 
                                            onQuantityChange(productTitle, newQuantity)
                                        }
                                    />
                                ))}
                            </div>
                        )}
                </div>
            </div>

        </div>
    )
}

