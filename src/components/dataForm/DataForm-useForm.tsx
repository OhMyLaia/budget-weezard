import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useState } from "react";
import { InputFormType, ErrorMessageDivType } from "../../types/types";
import * as globals from "../../services/global-elements"
import { ErrorMessageDiv } from "./ErrorMessageDiv";
import { InputForm } from "./InputForm";
import { SubmitButton } from "./SubmitButton";
import { UserBudgetHook } from "../../hooks/hooks";



export function DataForm(props:
    {
        userBudget: React.Dispatch<React.SetStateAction<string[]>>,
        setUserBudget: React.Dispatch<React.SetStateAction<string[]>>
    },
) {

    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [errorsState, setErrorsState] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues,
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        //todo
        console.log(data)
        reset();
    }

    return (
        <div className="
        flex
        flex-col
        md:w-1/2
        ">
            <div className="
            w-full
            justify-center
            align-middle
            content-center
            p-3
            pb-7
            mt-3
            bg-emerald-200
            rounded-4xl"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputForm
                        {...register("name", {
                            required: "Name is required",
                            // validate: regex?
                        })}
                        placeHolder={"Name"}
                        type={""}
                        required={true}
                    />
                    {errors.name && (
                        <p className="text-red-600">{`${errors.name.message}`}</p>
                    )}
                    <InputForm
                        {...register("email", {
                            required: "Email is required"

                        })}
                        placeHolder={"Email"}
                        type={"email"}
                        required={true}
                    />
                    {errors.email && (
                        <p className="text-red-600">{`${errors.email.message}`}</p>
                    )}
                    <InputForm
                        {...register("phone", {
                            required: "Phone is required"
                        })}
                        placeHolder={"Phone"}
                        type={""}
                        required={true}
                    />
                    {errors.phone && (
                        <p className="text-red-600">{`${errors.phone.message}`}</p>
                    )}
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

                {/* } */}
                <SubmitButton
                    disabled={isSubmitting}
                />
            </div>
        </div>
    )
}