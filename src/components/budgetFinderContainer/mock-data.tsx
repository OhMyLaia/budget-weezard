import { UserBudgetType, CustomDataType } from "../../types/types";

export const createMockData = () => {

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
    return { mockDataUser, mockDataUser2, mockDataUser3, mockDataUser4}
}

    // useEffect(() => {
    //     if (UserBudgetListInitial.length === 0) {
    //         setUserBudgetListInitial(prev => [
    //         ...prev, mockDataUser, mockDataUser2, mockDataUser3, mockDataUser4]);
    //     }
    // }, []);