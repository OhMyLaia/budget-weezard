export interface CustomDataType {
    customElement: string;
}

export type CardDataType = {
    title: string;
    description: string;
    price: number;
    custom: boolean;
    isCheckedValue: boolean;
    onCheckedToggled: () => void;
}

export type CustomDataCardType = CardDataType & {
    customElement: CustomDataType
}