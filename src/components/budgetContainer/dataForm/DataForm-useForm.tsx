"use client"
import { useContext, useState } from "react";
import { UserBudgetContext } from "../../../context/UserBudgetContext";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserBudgetType, CardDataType, CustomDataType } from "../../../types/types";
import { InputForm } from "./inputForm/InputForm";
import { SubmitButton } from "./submitButton/SubmitButton";
import { MessageDiv } from "../../ui/MessageDiv";


export function DataForm(props:
    {
        dataCardInitial: CardDataType[],
        customDataCardInitial: CustomDataType[],
        finalPrice: number,
        resetFunction: () => void
    },
) {

    const [userBudgetListInitial, setUserBudgetListInitial] = useContext(UserBudgetContext);
    const [isSubmittedData, setIsSubmittedData] = useState(false)

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
                props.customDataCardInitial.forEach((product) => {(
                    customCards.push({
                        productTitle: product.productTitle,
                        productPrice: product.productPrice,
                        productQuantity: product.productQuantity
                    })
                )})
            }
        cardServiceTitles.push(card.title)
        }

        const newUserBudget: UserBudgetType = {
            userName: data.name,
            userEmail: data.email,
            userPhone: data.phone,
            customProducts: customCards,
            serviceTitle: cardServiceTitles,
            totalPrice: props.finalPrice
        };

        setUserBudgetListInitial((prevState) => {
            const updatedList = [...prevState, newUserBudget];
            console.log(`updatedlist -> ${JSON.stringify(updatedList)} `)
            return updatedList;
        });

        setIsSubmittedData(true)

        reset();

        setTimeout(() => {
            setIsSubmittedData(false);
        }, 4000);

        props.resetFunction();

    }

    return (

        <div className="
        flex
        flex-col
        md:w-1/2
        mb-10
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
                        {...register(("name"), {
                            required: "Name is required",
                            pattern: {
                                value: /^[a-zA-ZÀ-ÿ\s]{2,}$/,
                                message: "Invalid name"
                            }
                        })}
                        value={getValues("name") || ""}
                        placeHolder={"Name"}
                        type="text"
                        required={true}
                    />
                    {errors.name && (
                        <p className="text-red-600">{`${errors.name.message}`}</p>
                    )}
                    <InputForm
                        {...register(("email"), {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email"
                            }
                        })}
                        value={getValues("email") || ""}
                        placeHolder={"Email"}
                        type={"email"}
                        required={true}
                    />
                    {errors.email && (
                        <p className="text-red-600">{`${errors.email.message}`}</p>
                    )}
                    <InputForm
                        {...register(("phone"), {
                            required: "Phone is required",
                            pattern: {
                                value: /^\+?\d{7,15}$/,
                                message: "Invalid phone number"
                            }
                        })}
                        value={getValues("phone") || ""}
                        placeHolder={"Phone"}
                        type="tel"
                        required={true}
                    />
                    {errors.phone && (
                        <p className="text-red-600">{`${errors.phone.message}`}</p>
                    )}
                <SubmitButton
                    disabled={isSubmitting}
                />
                </form>
                {isSubmittedData === true && (
                    <MessageDiv
                    color="blue-900"
                    message={`Budget submitted successfully!
                        Go to MyBudgets page for more info.`}
                    />
                )}
            </div>
        </div>
    )
}