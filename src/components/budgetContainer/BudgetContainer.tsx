import dataCard from "../../services/Data-card-service.json";
import { idGenerator } from "../../utils/idGenerator";
import dataCustomQuantity from "../../services/Data-card-service.json";
import { CardBudget } from "../cards/CardBudget";

export function BudgetContainer() {
    return (
        <div>
            {dataCard.map((item: { title: string; description: string; price: number; custom: boolean }) => (
                <CardBudget
                    key={idGenerator()}
                    dataCard={item}
                />
            ))}
        </div>
    )
}

