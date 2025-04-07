export interface CustomDataType {
    customElement: string;
    customElement2: string;
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



// export interface CalculateFinalPriceParams {
//     // isChecked: boolean;
//     array: Array<CardDataType>;
//     // finalPrice: number;
//     // setFinalPrice: React.Dispatch<React.SetStateAction<number>>;
// }

