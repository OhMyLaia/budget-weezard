import { CardDataType, CustomDataType } from "../types/types";
import ogDataCard from "../services/Data-card-service.json";
import ogCustomDataCard from "../services/Data-custom-quantity-service.json"

export const selectedCards: object[] = [];

export const dataCard: CardDataType[] = ogDataCard;

export const customDataCard: CustomDataType[] = ogCustomDataCard;

// igual estoy trabajando directamente con la copia y no
