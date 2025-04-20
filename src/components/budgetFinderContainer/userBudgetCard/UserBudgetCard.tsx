import { CustomDataType } from "../../../types/types"

export function UserBudgetCard(props: {
    customProducts: CustomDataType[],
    userName: string,
    userEmail: string,
    userPhone: string,
    serviceTitle: string[],
    totalPrice: number
}) {
    return (
        <div className="
        w-full
        bg-slate-50
        flex
        flex-col
        items-center
        mb-5
        ">
            <div className="
            w-[95%]
            flex
            flex-col
            items-center">

                <div className="
                    w-full
                    rounded-4xl
                    flex
                    flex-row
                    gap-2
                    mb-2
                    mt-4
                    bg-purple-100
                    p-2
                    hover:bg-violet-200
                    focus:outline-2
                    focus:outline-violet-400
                    text-zinc-800
                    shadow-blue-900
                    border-fuchsia-900
                    shadow-[7px_7px_0px_0px_blue-900]
                    drop-shadow-lg
                    border-3">

                    {/* Verde - datos del usuario */}
                    <div className="
                        flex
                        flex-col
                        flex-wrap
                        justify-items-center
                        align-middle
                        w-2/5">

                        <h3 className="
                            text-lg
                            lg:text-5xl
                            md:text-3xl
                            ms-2
                            mt-2
                            font-bold
                            text-blue-950">
                            {props.userName}
                        </h3>
                        <ul className="
                            w-[90%]
                            md:text-xl
                            md:w-full
                            lg:text-2xl
                            lg:w-full
                            ms-2
                            mt-2
                            text-xs
                            text-gray-600
                            text-start
                            break-words">
                            <li>{props.userEmail}</li>
                            <li>{props.userPhone}</li>
                        </ul>
                    </div>

                    {/* Ámbar - lista de servicios */}
                    <div className="
                        flex
                        flex-col
                        text-xs
                        md:text-lg
                        lg:text-xl
                        justify-center
                        w-2/5
                        md:ps-7">
                        {props.customProducts.map(product => (
                            <div key={product.productTitle}>
                                <ul>
                                    <li><strong>{product.productTitle}</strong></li>
                                    <li> → {product.productPrice}€ x {product.productQuantity} = {<strong>{product.productPrice * product.productQuantity}</strong>}€</li>
                                </ul>
                            </div>

                        ))}
                    </div>

                    {/* Índigo - precio total */}
                    <div className="
                        w-1/4
                        flex
                        flex-col
                        items-end
                        pe-5
                        justify-center
                        align-bottom
                        md:text-xl
                        lg:text-2xl">
                        Total:
                        <h2 className="
                            align-text-bottom
                            text-lg
                            font-bold
                            md:text-2xl
                            md:me-1
                            lg:text-3xl">
                            {props.totalPrice}€
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
