export type CustomDataType = {
    productTitle: string;
    productPrice: number;
    productQuantity: number;
}

export type QuantitySelectorProps = CustomDataType & {
    customElement: CustomDataType
    modalTitle: string;
    modalDescription: string;
}

export type CardDataType = {
    title: string;
    description: string;
    price: number;
    custom: boolean;
    isCheckedValue: boolean;
    onCheckedToggled: () => void;
    productQuantity?: number;
    customDataCardHook: Array<CustomDataType>
}

export type CustomDataCardType = CardDataType & {
    onQuantityChange: (title: string, newQuantity: number) => void;
}

export type InputFormType = {
    name: string
    placeHolder: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement> ) => void;
        // inputSetter: React.Dispatch<React.SetStateAction<string>>,
    onBlur: (event: React.ChangeEvent<HTMLInputElement> ) => void;
    required?: boolean;
}

export type SubmitPropsType = {
    name: string,
    email: string,
    phone: string
}

// export type ErrorMessageDivType = {
//     errorMssg: string,
//     explanationMssg: string
// }

export type UserDataType = {
    userName: string;
    userEmail: string;
    userPhone: string;
}

// datos de custom data (title(lang, pages), price(30) y quantity)
// + titulo del servicio(seo, ads, web)
export type budgetDataType = CustomDataType & {
    serviceTitle: string;
}

// datos de custom data (title(lang, pages), price(30) y quantity)
// datos de usuario (name, email, phone)
// + total del budget
export type UserBudgetType = UserDataType & {
    customProducts?: CustomDataType[];
    serviceTitle: string[];
    totalPrice: number;
}

// •	UserDataType → (userName, userEmail, userPhone)
// •	CustomDataType → (productTitle, productPrice, productQuantity)
// •	+ serviceTitle + totalPrice