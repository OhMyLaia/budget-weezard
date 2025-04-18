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
        flex
        w-[95%]
        md:w-[70%]
        lg:w-[70%]">

            {/* Flex row for title and description */}
            <div
                className={
                    `w-full
                rounded-4xl
                flex
                flex-row
                gap-1
                mb-2
                mt-4
                bg-purple-100 p-2
                hover:bg-violet-200 focus:outline-2
                focus:outline-violet-400
                text-zinc-800
                shadow-blue-900
                border-fuchsia-900
                shadow-[7px_7px_0px_0px_blue-900]
                drop-shadow-lg
                border-3`
                }>
                <div className="
                flex
                w-full
                flex-row
                bg-amber-600">
                    <div className="
                    flex
                    flex-col
                    flex-wrap
                    mr-6
                    justify-items-center
                    align-middle
                    w-2/3
                    bg-emerald-800">
                        <h3 className="text-lg
                        lg:text-5xl
                        md:text-3xl
                        ms-2
                        mt-2
                        font-bold
                        text-blue-950
                        ">{props.userName}</h3>
                        <p className="w-fit
                        md:text-xl
                        md:w-full
                        lg:text-2xl
                        lg:w-full
                        ms-2
                        mt-2
                        text-xs
                        text-gray-600
                        text-start
                        bg-purple-600">
                        {props.userEmail}</p>
                        <p className="w-fit
                        md:text-xl
                        md:w-full
                        lg:text-2xl
                        lg:w-full
                        ms-2
                        mt-2
                        text-xs
                        text-gray-600
                        text-start
                        bg-purple-600">
                        {props.userPhone}</p>
                    </div>
                    <ul
                    className="
                    flex
                    flex-col
                    justify-center
                    w-1/3
                    "
                    >
                        <li>SERVICES1</li>
                        <li>SERVICES2</li>

                    </ul>
                    {/* Flex row for price and checkbox */}
                    <div className="
                    w-1/4
                    flex
                    flex-col
                    flex-wrap
                    items-center
                    justify-center
                    bg-indigo-700">
                        Total:
                        <h2 className="
                        align-text-bottom
                        text-lg
                        font-bold
                        md:text-2xl
                        md:me-1
                        lg:text-3xl
                        text-blue-950
                        ">{props.totalPrice}
                        </h2>
                    </div>
                </div>
            </div>

        </div>
    )
}
