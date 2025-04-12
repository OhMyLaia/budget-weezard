import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useState } from "react";
import { InputFormType, ErrorMessageDivType, UserBudgetType, CardDataType, CustomDataCardType, CustomDataType } from "../../types/types";
import * as globals from "../../services/global-elements"
import { ErrorMessageDiv } from "./ErrorMessageDiv";
import { InputForm } from "./InputForm";
import { SubmitButton } from "./SubmitButton";
import { UserBudgetHook } from "../../hooks/hooks";



export function DataForm(props:
    {
        userBudgetListInitial: UserBudgetType[],
        setUserBudgetListInitial: React.Dispatch<React.SetStateAction<UserBudgetType[]>>,
        dataCardInitial: CardDataType[]
        finalPrice: number
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

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        console.log(data)
        
        const selectedCards = props.dataCardInitial.filter(card => card.isCheckedValue === true);
        const customCards: CustomDataType[] = [];
        const cardServiceTitles: string[] = [];

        if (!selectedCards) return;

        for (let i = 0 ; i < selectedCards.length ; i++) {
            const card = selectedCards[i];
            console.log(card)

            if (card.custom === true) {
                customCards.push({
                    productTitle: card.title,
                    productPrice: card.price,
                    productQuantity: card.productQuantity ?? 1
                });
            }
        
        cardServiceTitles.push(card.title)

        return customCards;
        }

        const newUserBudget: UserBudgetType = {
            userName: data.name,
            userEmail: data.email,
            userPhone: data.phone,
            customProducts: customCards,
            serviceTitle: cardServiceTitles,
            totalPrice: props.finalPrice
        };

        props.setUserBudgetListInitial([...props.userBudgetListInitial, newUserBudget]);
        console.log(`newUserBudget -> ${JSON.stringify(newUserBudget)}`)
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
                        type="text"
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
                        type="tel"
                        required={true}
                    />
                    {errors.phone && (
                        <p className="text-red-600">{`${errors.phone.message}`}</p>
                    )}
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
                </form>
            </div>
        </div>
    )
}