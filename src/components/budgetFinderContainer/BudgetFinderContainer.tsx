import { UserBudgetCard } from "./userBudgetCard/UserBudgetCard";
import { UserBudgetContext } from "../../context/UserBudgetContext";
import { useContext } from "react";
import { CustomDataType, UserBudgetType } from "../../types/types";
import { useEffect } from "react";
import { userBudgetListArr } from "../../services/global-elements";

export function BudgetFinderContainer() {
    const [UserBudgetListInitial, setUserBudgetListInitial] = useContext(UserBudgetContext);

    const mockDataUser: UserBudgetType = {
        customProducts: [
            {
                productTitle: "product1",
                productPrice: 30,
                productQuantity: 1
            },
            {
                productTitle: "product2",
                productPrice: 30,
                productQuantity: 2
            }
        ] as CustomDataType[],
        userName: "EsmeDafne",
        userEmail: "esme@dafne.miau",
        userPhone: "123456789",
        serviceTitle: ["Service title"],
        totalPrice: 1000
    }

    useEffect(() => {
        setUserBudgetListInitial(prev => {
            const updatedArray = [...prev, mockDataUser];
            return updatedArray;
        });
    }, []);

    return (
        <div className="bg-slate-50">
            <h2>My Budgets</h2>
            <div>finder</div>
            {UserBudgetListInitial.map((card, index) => (
                <UserBudgetCard
                    key={index}
                    customProducts={card.customProducts || ([] as CustomDataType[])}
                    serviceTitle={card.serviceTitle}
                    userName={card.userName}
                    userEmail={card.userEmail}
                    userPhone={card.userPhone}
                    totalPrice={card.totalPrice}
                />
            ))}
        </div>
    )
}
