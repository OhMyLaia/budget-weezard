"use client"
import { useContext } from "react";
import { UserBudgetContext } from "../../../context/UserBudgetContext";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserBudgetType, CardDataType, CustomDataType } from "../../../types/types";
import { InputForm } from "./inputForm/InputForm";
import { SubmitButton } from "./submitButton/SubmitButton";



export function DataForm(props:
    {
        dataCardInitial: CardDataType[],
        customDataCardInitial: CustomDataType[],
        finalPrice: number
    },
) {

    const [setUserBudgetListInitial] = useContext(UserBudgetContext);

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
                props.customDataCardInitial.map((product) => {(
                    customCards.push({
                        productTitle: product.productTitle,
                        //! hay que llenar productPrice, es 30 siempre
                        productPrice: product.productPrice,
                        //! hay que cambiar esta productQuantity, no la pilla
                        productQuantity: product.productPrice / product.productPrice
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

        // const arrayTemporal: any = [];
        // arrayTemporal.push(newUserBudget);
        setUserBudgetListInitial((prevState) => {
            const updatedList = [...prevState, newUserBudget];
            // console.log(`newUserBudget -> ${JSON.stringify(newUserBudget)}`);
            console.log(`updatedlist -> ${JSON.stringify(updatedList)} `)
            return updatedList;
        });
        setTimeout(() => {
            // console.log(`🔍 length array -> ${arrayTemporal.length} `)
            reset();
        }, 1500); 
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
            {/* <div
                className="
                    flex
                    flex-row
                    justify-end
                    me-6"
            > */}
                {/* { handleSubmit() === true || handleSubmit() === null ? "" : */}
                {/* } */}
                <SubmitButton
                    disabled={isSubmitting}
                />
            {/* </div> */}
                </form>
            </div>
        </div>
    )
}