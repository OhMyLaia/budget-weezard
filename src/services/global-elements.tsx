import { CardDataType, CustomDataType, UserBudgetType, UserDataType } from "../types/types";
import ogDataCard from "../services/Data-card-service.json";
import ogCustomDataCard from "../services/Data-custom-quantity-service.json"

export const userListArr: UserDataType[] = [];
export const budgetListArr: UserBudgetType[] = [];
export const userBudgetListArr: UserBudgetType[] = [];

export const dataCardListState: CardDataType[] = ogDataCard.map( (data) => ({
    title: data.title,
    description: data.description,
    price: data.price,
    custom: data.custom,
    isCheckedValue: false,
    onCheckedToggled: () => {},
    customDataCardHook: []
}));

export const customDataCardListState: CustomDataType[] = ogCustomDataCard.map( (data) => ({
    productTitle: data.extraTitle,
    productPrice: data.extraPrice,
    productQuantity: 0,
}));

export const userListStateArr: UserDataType[] = userListArr.map( (user) => ({
    userName: user.userName,
    userEmail: user.userEmail,
    userPhone: user.userPhone
}))

export const budgetListStateArr: UserBudgetType[] = budgetListArr.map( (data) => ({
    serviceTitle: data.serviceTitle,
    customProducts: customDataCardListState,
    userName: data.userName,
    userEmail: data.userEmail,
    userPhone: data.userPhone,
    totalPrice: data.totalPrice,
    timeStampProp: data.timeStampProp
}))

