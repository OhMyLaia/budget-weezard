import React from 'react'

export function SearchBar(props: {search1: string, search2: string, search3: string}) {
    return (
        <div
        className="
        flex
        justify-end
        items-end
        m-4
        md:me-10"
        >
            <button id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-white
            bg-fuchsia-900
            hover:bg-fuchsia-950
            shadow-blue-900
            shadow-[7px_7px_0px_0px_blue-900]
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            inline-flex
            items-center"
            type="button">Sort by

            <svg className="w-2.5 h-2.5 ms-3"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg>
            </button>
            <div id="dropdownHover"
            className="z-10 hidden
            bg-white divide-y
            divide-gray-100
            rounded-lg
            shadow-sm
            w-44">
                <ul className="py-2
                text-sm
                text-white"
                aria-labelledby="dropdownHoverButton">
                    <li>
                        {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"></a> */}
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{props.search1}</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{props.search2}</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{props.search3}</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
