export type CustomDataType = {
    productTitle: string;
    productPrice: number;
    productQuantity: number;
}

export type CardDataType = {
    title: string;
    description: string;
    price: number;
    custom: boolean;
    isCheckedValue: boolean;
    onCheckedToggled: () => void;
    productQuantity?: number;
}

export type CustomDataCardType = CardDataType & {
    onQuantityChange: (newQuantity: number) => void;
}

export type QuantitySelectorProps = {
    customElement: CustomDataType
}

export type InputFormType = {
    placeHolder: string;
}

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
export type UserBudgetType = budgetDataType & UserDataType & {
    total: number;
} 