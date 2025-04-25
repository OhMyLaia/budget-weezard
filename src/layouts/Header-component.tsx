import headerBanner from "../../public/bw-header.png"

export function Header() {
    return (
        <div className="
        w-full
        flex
        justify-center
        align-middle 
        self-center
        items-center

        ">
            <img src={headerBanner}
            className="
            mx-auto
            w-full
            overflow-hidden
            xl:w-[80%]
            xl:rounded-4xl
            mt-4
            md:mt-10
            md:mb-10
            ">
            </img>
        </div>
    )
}