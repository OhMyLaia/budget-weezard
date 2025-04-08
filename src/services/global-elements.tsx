import { CardDataType, CustomDataType } from "../types/types";
import ogDataCard from "../services/Data-card-service.json";
import ogCustomDataCard from "../services/Data-custom-quantity-service.json"

export const selectedCards: object[] = [];

export const dataCardListState: CardDataType[] = ogDataCard.map( (data) => ({
    title: data.title,
    description: data.description,
    price: data.price,
    custom: data.custom,
    isCheckedValue: false,
    onCheckedToggled: () => {} 
}));

export const customDataCardListState: CustomDataType[] = ogCustomDataCard.map( (data) => ({
    productTitle: data.extraTitle,
    productPrice: data.extraPrice,
    productQuantity: 0,
    // onProductIncrease: () => {},
    // onProductDecrease: () => {}
}));
