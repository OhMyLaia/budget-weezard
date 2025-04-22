import { UserBudgetCard } from "./userBudgetCard/UserBudgetCard";
import { UserBudgetContext } from "../../context/UserBudgetContext";
import { useContext } from "react";
import { CustomDataType, UserBudgetType } from "../../types/types";
import { useEffect } from "react";
import { GenericButton } from "../ui/GenericButton";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./searchBar/SearchBar";



export function BudgetFinderContainer() {

    const [UserBudgetListInitial, setUserBudgetListInitial] = useContext(UserBudgetContext);

    useEffect(() => {
        console.log("🎯 Contexto actualizado en BudgetFinder:", UserBudgetListInitial);
    }, [UserBudgetListInitial]); // Dependencia del estado


    const navigate = useNavigate();

    const handleOnClickHomeButton = () => {
        navigate("/budget-calculator");
    }

    enum sortByType {
        timeStampEnum = "latest",
        totalPriceEnum = "price",
        userNameEnum = "name"
    }

    const setStateBySorting = (newSorting: UserBudgetType[]) => {
    setUserBudgetListInitial(newSorting)
    }

    const mappingUserBudgetCards = () => {
        UserBudgetListInitial.map((card, index) => {
            <UserBudgetCard
                key={index}
                customProducts={card.customProducts || []}
                serviceTitle={card.serviceTitle}
                userName={card.userName}
                userEmail={card.userEmail}
                userPhone={card.userPhone}
                totalPrice={card.totalPrice}
                timeStamp={card.timeStampProp}
            />
        }
    )}

    const sortData = (array: UserBudgetType[], sortBy: keyof UserBudgetType) => {
        const sorted = [...array].sort((a, b) => {
            return (b[sortBy] ?? 0) > (a[sortBy] ?? 0) ? 1 : -1
        });
        setUserBudgetListInitial(sorted)
    }


    const sortDataSwitch = (byType: sortByType) => {
        switch (byType) {
            case sortByType.timeStampEnum:
                sortData(UserBudgetListInitial, "timeStampProp")
                mappingUserBudgetCards();
                break;
            case sortByType.totalPriceEnum:
                sortData(UserBudgetListInitial, "totalPrice")
                mappingUserBudgetCards();
                break;
            case sortByType.userNameEnum:
                sortData(UserBudgetListInitial, "userName")
                mappingUserBudgetCards();
                break;
            default:
                mappingUserBudgetCards();
                break;
        }
    }

    return (
        <div className="bg-slate-50">
            <div className="mb-5">
            </div>
            {UserBudgetListInitial.length === 0 ? (
                <div>
                    <h2
                        className="
                        bricolage-grotesque-wizard
                        text-6xl
                        text-blue-900
                        break-words
                        text-center
                        mb-7
                        "
                    >No budgets yet</h2>
                    <GenericButton
                        text={"Discover"}
                        width="full"
                        onClick={handleOnClickHomeButton}
                        effect="animate-bounce"
                    />
                </div>
            ) : (
                <div>
                    <h2
                    className="
                    bricolage-grotesque-wizard
                    text-5xl
                    text-blue-900
                    break-words
                    text-center
                    mb-3
                    "
                    >Current budgets</h2>
                <SearchBar
                search1="Latest"
                search2="Price"
                search3="Name"
                />
                    {UserBudgetListInitial.map((card, index) => (
                        <UserBudgetCard
                            key={index}
                            customProducts={card.customProducts || []}
                            serviceTitle={card.serviceTitle}
                            userName={card.userName}
                            userEmail={card.userEmail}
                            userPhone={card.userPhone}
                            totalPrice={card.totalPrice}
                            timeStamp={card.timeStampProp}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
