import { UserBudgetCard } from "./userBudgetCard/UserBudgetCard";
import { UserBudgetContext } from "../../context/UserBudgetContext";
import { useContext } from "react";
import { CustomDataType, UserBudgetType } from "../../types/types";
import { useEffect } from "react";
import { GenericButton } from "../ui/GenericButton";
import { useNavigate } from "react-router-dom";



export function BudgetFinderContainer() {

    const [UserBudgetListInitial, setUserBudgetListInitial] = useContext(UserBudgetContext);

    const mockDataUser: UserBudgetType = {
        customProducts: [
            {
                productTitle: "Pages",
                productPrice: 30,
                productQuantity: 1
            },
            {
                productTitle: "Languages",
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

    const mockDataUser2: UserBudgetType = {
        customProducts: [
            {
                productTitle: "SEO Optimization",
                productPrice: 50,
                productQuantity: 1
            },
            {
                productTitle: "Blog Setup",
                productPrice: 40,
                productQuantity: 1
            }
        ],
        userName: "Mario López",
        userEmail: "mario.lopez@example.com",
        userPhone: "654987321",
        serviceTitle: ["Marketing", "Content Creation"],
        totalPrice: 700
    }

    const mockDataUser3: UserBudgetType = {
        customProducts: [
            {
                productTitle: "Hosting",
                productPrice: 20,
                productQuantity: 12
            },
            {
                productTitle: "Custom Domain",
                productPrice: 15,
                productQuantity: 1
            }
        ],
        userName: "Laura Sánchez",
        userEmail: "laura.sanchez@example.com",
        userPhone: "612345678",
        serviceTitle: ["Hosting", "Domain"],
        totalPrice: 300
    }

    const mockDataUser4: UserBudgetType = {
        customProducts: [
            {
                productTitle: "Online Store",
                productPrice: 200,
                productQuantity: 1
            },
            {
                productTitle: "Payment Integration",
                productPrice: 100,
                productQuantity: 1
            }
        ],
        userName: "Alex García",
        userEmail: "alex.garcia@example.com",
        userPhone: "699112233",
        serviceTitle: ["E-commerce"],
        totalPrice: 1200
    }

    // useEffect(() => {
    //     if (UserBudgetListInitial.length === 0) {
    //         setUserBudgetListInitial(prev => [
    //         ...prev, mockDataUser, mockDataUser2, mockDataUser3, mockDataUser4]);
    //     }
    // }, []);

    useEffect(() => {
        console.log("🎯 Contexto actualizado en BudgetFinder:", UserBudgetListInitial);
    }, [UserBudgetListInitial]); // Dependencia del estado


    const navigate = useNavigate();

    const handleOnClickHomeButton = () => {
        navigate("/budget-calculator");
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
                    >Current Budgets</h2>
                    {UserBudgetListInitial.map((card, index) => (
                        <UserBudgetCard
                            key={index}
                            customProducts={card.customProducts || []}
                            serviceTitle={card.serviceTitle}
                            userName={card.userName}
                            userEmail={card.userEmail}
                            userPhone={card.userPhone}
                            totalPrice={card.totalPrice}
                        />
                    ))}

                </div>
            )}
        </div>
    )
}
