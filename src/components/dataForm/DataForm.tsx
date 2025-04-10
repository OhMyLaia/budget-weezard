import { useState } from "react";
import { InputFormType, ErrorMessageDivType } from "../../types/types";
import * as globals from "../../services/global-elements"
import { ErrorMessageDiv } from "./ErrorMessageDiv";
import { InputForm } from "./InputForm";
import { SubmitButton } from "./SubmitButton";
import { UserBudgetHook } from "../../hooks/hooks";



export function DataForm(props:
    {userBudget: React.Dispatch<React.SetStateAction<string[]>>,
    setUserBudget:React.Dispatch<React.SetStateAction<string[]>>},
    ) {

    const [inputNameValue, setInputNameValue] = useState("");
    const [inputEmailValue, setInputEmailValue] = useState("");
    const [inputPhoneValue, setInputPhoneValue] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)

    // const onChangeInput =
    //     (event: React.ChangeEvent<HTMLInputElement>,
    //         inputSetter: React.Dispatch<React.SetStateAction<string>>,
    //     ) => {
    //         event.preventDefault();
    //         inputSetter(event.target.value);
    //     }

        
    const isValidInput =
    (input: string,
        regex: RegExp): boolean | void => {
            if (!input || !regex) { return console.log(`missing input or regex`) };
            return regex.test(input);
        }
        
    //letters with accents, spaces, at least 2 char
    const validName: boolean | void = isValidInput(inputNameValue, /^[a-zA-ZÀ-ÿ\s]{2,}$/);
    
    // simple email format, does not allow spaces or missing email parts
    const validEmail: boolean | void = isValidInput(inputEmailValue, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    
    // optional "+" at the beggining, numbers only, between 7-15 digits
    const validPhone: boolean | void = isValidInput(inputPhoneValue, /^\+?\d{7,15}$/);
    
    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) : boolean | null | void => {
        event.preventDefault();
        setIsSubmitting(true);
        //todo
        // submit to server
        try {

            if (validName && validEmail && validPhone) {
                props.setUserBudget(prev => [...prev, inputNameValue, inputEmailValue, inputPhoneValue])
                return true
            }
        } catch (error) {
            console.log(`data is not valid`, error);
            return false
        }

        setIsSubmitting(false)
    return console.log(inputNameValue, inputEmailValue, inputPhoneValue)
    //event.prevent.default (???)
    }

    return (
        <div>
            <div className="
            w-90
            lg:w-1/3
            justify-center
            align-middle
            content-center
            p-3
            pb-7
            mt-3
            bg-emerald-200
            rounded-4xl"
            >
                <form onSubmit={handleSubmit}>
                    <InputForm
                        placeHolder={"Name"}
                        type={""}
                        value={inputNameValue}
                        onChange={(event) => setInputNameValue(event.target.value)}
                        required={true}
                    />
                    <InputForm
                        placeHolder={"Email"}
                        type={"email"}
                        value={inputEmailValue}
                        onChange={(event) => setInputEmailValue(event.target.value)}
                        required={true}
                    />
                    <InputForm
                        placeHolder={"Phone"}
                        type={""}
                        value={inputPhoneValue}
                        onChange={(event) => setInputPhoneValue(event.target.value)}
                        required={true}
                    />
                </form>
            </div>
            <div
                className="
                    flex
                    flex-row
                    justify-end
                    me-6"
            >
                {/* { handleSubmit() === true || handleSubmit() === null ? "" : */}
                <ErrorMessageDiv
                    error={"Invalid data"}
                    explanation={"Please submit valid data"}
                />

                {/* } */}
                <SubmitButton
                disabled={isSubmitting}
                />
            </div>
        </div>
    )
}