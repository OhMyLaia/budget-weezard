export interface CustomDataType {
    productTitle: string;
    productPrice: number;
    productQuantity: number;
    index?: number;
    onProductIncrease: (index: number) => void;
    onProductDecrease: (index: number) => void;
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
    customElement: CustomDataType;
    // index: number;
    // increaseQuantity: (index: number) => void;
    // decreaseQuantity: (index: number) => void;
}

export interface QuantitySelectorProps {
    customElement: CustomDataType
    index?: number;
}