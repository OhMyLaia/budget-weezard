import ogDataCard from "../../services/Data-card-service.json";
import { idGenerator } from "../../utils/idGenerator";
import { CardBudget } from "../cards/CardBudget";
import { useState } from "react";

const selectedCards: object[] = [];



export function BudgetContainer() {
    //definir aqui las funciones que modifican las cantidades
    // se reparten luego a los hijos
    // budgetCont tiene acceso a los datos, ninguno mas, el se los pasa
    // const [isSelected, setIsSelected] = useState(false)

    // listening dataCard for changes
    const [currentDataCard, setCurrentDataCard] = useState(dataCard);
    // listening if cards are selected or not -> handle click
    const [isActive, setIsActive] = useState<boolean>(false);
    // listening if card.quantitySelector is changing quantity
    const [quantity, setQuantity] = useState<number>(0);
    // listening if selectedCards has changes (to calculate total €€€)
    const [selectedItems, setSelectedItems] = useState<Array<object>>(selectedCards);

    const dataCard: Array<object> = [...currentDataCard];

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1))
    }

    const handleClickOnButton = () => {
        setIsActive(prevState => !prevState)
    }

    // const handleCheckbox = (item: object, isChecked: boolean) => {
    //     if (isChecked) {
    //         setS
    //     }
    // }

    return (
        <div>
            {dataCard.map(item => (
                <CardBudget
                    key={idGenerator()}
                    onClick={handleClickOnButton}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    custom={item.custom}
                    isActive={isActive}
                    quantity={quantity}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
            ))}
        </div>
    )
}



