import image from "../../public/budgetWizard-logo-purple-200px.png"
import { Link } from "react-router-dom"


export function Navbar() {
    return (
        <div>
            <nav className="
            bg-blue-900
            flex
            flex-row
            w-full
            h-20
            md:h-30
                    ">
                <div className="
                    w-full
                    flex
                    flex-row
                    justify-between
                    ms-3
                    mx-auto">
                    <div className="
                        bricolage-grotesque-wizard
                        flex
                        space-x-3
                        rtl:space-x-reverse
                        xl:me-auto">
                        <span className="
                            self-center 
                            font-semibold
                            whitespace-nowrap
                            text-5xl
                            ms-2
                            md:text-7xl
                            md:ms-3
                            lg:ms-10
                            xl:text-8xl
                            text-violet-200 hover:text-blue-300">
                            Budget
                        </span>
                    </div>
                    <img src={image}
                    className="
                    w-16
                    mb-4
                    ms-4
                    md:size-25
                    opacity-100 z-10
                    transition-opacity
                    duration-500
                    hover:opacity-50
                    lg:ms-10
                    -translate-x-3">
                            </img>
                    <div className="
                    w-full 
                    flex flex-row 
                    justify-end flex-wrap
                    pe-3"
                    id="navbar-default">
                        <ul className="
                            font-medium 
                            flex
                            flex-col
                            items-center
                            text-left
                            text-sm
                            md:flex-row
                            mt-2
                            me-3
                            lg:me-10
                            md:gap-6
                            gap-0.5
                            rounded-lg
                            md:space-x-4 
                            lg:space-x-4
                            lg:text-4xl
                            ">

                            <li>
                                <Link to="/" className="
                                            flex
                                            justify-center
                                            px-3 rounded-sm 
                                            md:border-0 md:p-0
                                            text-violet-200 hover:text-blue-300"
                                    aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/budget-calculator" className="
                                            flex
                                            justify-center
                                            px-3 rounded-sm 
                                            md:border-0 md:p-0 
                                            text-violet-200 hover:text-blue-300">
                                    Calculator
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-budgets" className="
                                    
                                            flex
                                            justify-center
                                            px-3 rounded-sm 
                                            md:border-0 md:p-0 
                                            text-violet-200 hover:text-blue-300">
                                    MyBudgets
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <h1 className="
                        press-start-2p-regular
                        justify-center
                        tracking-tighter
                        text-5xl
                        lg:text-7xl
                        p-2.5
                        border-0
                        bg-gradient-to-l via-blue-300 to-purple-200
                        text-blue-900 bg-emerald-200 
                        lg:ps-22
                        md:ps-5
                        ps-7
                        ">
                WEEZARD
            </h1>

        </div>
    )
}