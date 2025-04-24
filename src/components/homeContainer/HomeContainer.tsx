import { GenericButton } from "../ui/GenericButton";
import { useNavigate } from "react-router-dom";


export function HomeContainer() {
    const navigate = useNavigate();

    const handleOnClickHomeButton = () => {
        navigate("/budget-calculator");
    }
    return (
        <div className="
        flex
        flex-col
        justify-center
        items-center
        mt-15
        mb-20
        ">
            {/* <img src="../../../public//title.png"></img> */}
            <h1
            className="
            bricolage-grotesque-wizard
            text-6xl
            text-blue-900
            break-words
            text-center
            "
            >Get the best presence online</h1>
            <img
            className="
            w-1/4
            animate-pulse
            m-3
            "
            src="../../../public//palandil01-200px.png"></img>
            <GenericButton
            text={"Get a budget"}
            width={"60"}
            onClick={handleOnClickHomeButton}
            />
        </div>
    )
}