


export function QuantityButton({onClick, quantityOperator} : {onClick: () => void; quantityOperator: string} ) {
    return (
        <div className="">
        <button
        className=" bg-gray-300
        p-2
        rounded-full
        inline-flex
        hover:bg-purple-400
        focus:outline-2
        focus:outline-violet-500"
        onClick={onClick}>
        {quantityOperator}
        </button>
        </div>
    )
}

// <button type="button" class="text-white bg-blue-700 hover:bg-blue-800
// focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full
// text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600
// dark:hover:bg-blue-700 dark:focus:ring-blue-800">
