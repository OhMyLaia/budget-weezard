import { CardDataType, CustomDataType } from "../types/types";
import ogDataCard from "../services/Data-card-service.json";
import ogCustomDataCard from "../services/Data-custom-quantity-service.json"

export const selectedCards: object[] = [];

export const dataCardListState: CardDataType[] = ogDataCard.map( (data) => ({
    // let internalData = [...data, isCheckedValue, onCheckedToggled]
    title: data.title,
    description: data.description,
    price: data.price,
    custom: data.custom,
    isCheckedValue: false, // valor inicial
    onCheckedToggled: () => {} // función vacía por ahora
}))

export const customDataCard: CustomDataType[] = ogCustomDataCard;

// igual estoy trabajando directamente con la copia y no
