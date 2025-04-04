import image from "../../public/budgetWizard-logo-purple-200px.png"


export function Navbar() {
    return (
        <div>
            
                    <nav className="bg-blue-900 w-full h-20 md:h-30 xl:h-30">
                    <div className="max-w-screen-xl 
                    flex flex-row 
                    items-center justify-between 
                    mx-auto">
                        
                        <a href="#" className="flex items-center 
                        space-x-3 rtl:space-x-reverse">
                            <span className="self-center 
                            font-semibold whitespace-nowrap
                            text-5xl
                            ms-2
                            md:text-7xl
                            md:ms-3
                            xl:text-8xl
                            text-violet-200 hover:text-blue-300">
                                Budget
                            </span>
                        </a>
                        <img src={image} className="w-16
                        mb-4
                        ms-4
                        md:size-25
                        opacity-100 z-10
                        transition-opacity
                        duration-500
                        hover:opacity-50
                        -translate-x-3
                        lg:translate-x-0.5"></img>
                        <div className="w-full 
                                flex flex-row 
                                justify-end flex-wrap 
                                items-center
                                pe-3" 
                                id="navbar-default">
                                    
                                    <ul className="font-medium 
                                    flex flex-row 
                                    p-1 md:p-0 mt-2 
                                    rounded-lg md:space-x-4 
                                    lg:space-x-4 
                                    md:mt-0 md:border-0">
                                        
                                        <li>
                                            <a href="#" className="block py-2 
                                            text-sm
                                            lg:text-2xl
                                            px-3 rounded-sm 
                                            md:border-0 md:p-0
                                            text-violet-200 hover:text-blue-300" 
                                            aria-current="page">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2
                                            text-sm
                                            lg:text-2xl
                                            px-3 rounded-sm 
                                            md:border-0 md:p-0 
                                            text-violet-200 hover:text-blue-300">
                                                About
                                            </a>
                                        </li>
                                        </ul>
                                </div>
            
                            </div>
                        </nav>
                        <h1 className="text-7xl
                        p-2
                        border-0
                        bg-gradient-to-l from-blue-900 via-blue-300 to-purple-200
                        text-blue-900 bg-emerald-200 
                        lg:ps-22
                        md:ps-5
                        sm:ps-2
                        
                        ">
                            WIZARD
                        </h1>
                        
                    </div>
    )
}