import { InputForm } from "./InputForm";
import { SubmitButton } from "./SubmitButton";
import { useState } from "react";


export function DataForm() {

    const [isValidatedState, setValidatedState] = useState(false)
    //regex
    //data validation
    //

    return (
        <div className="
        w-90
        lg:w-1/3
        justify-center
        align-middle
        content-center
        mb-20"
        >
                <InputForm
                placeHolder={"Name"}
                // isValid={isValidatedState}
                />
                <InputForm 
                placeHolder={"Phone"}
                />
                <InputForm 
                placeHolder={"Email"}
                />
                <div
                className="
                flex
                flex-row
                justify-end
                me-6"
                >

            <SubmitButton
            />
                </div>
        </div>
    )
}