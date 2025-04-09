export interface CustomDataType {
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

export interface QuantitySelectorProps {
    customElement: CustomDataType
}