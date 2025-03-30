import dataCard from "../../services/Data-card-service.json";
import { idGenerator } from "../../utils/idGenerator";
// import dataCustomQuantity from "../../services/Data-card-service.json";
import { CardBudget } from "../cards/CardBudget";

export function BudgetContainer() {
    //definir aqui las funciones que modifican las cantidades
    // se reparten luego a los hijos
    // budgetCont tiene acceso a los datos, ninguno mas, el se los pasa
    // const [isSelected, setIsSelected] = useState(false)
    return (
        <div>
            {dataCard.map((item: { title: string; description: string; price: number; custom: boolean }) => (
                <CardBudget
                    key={idGenerator()
                        
                    }
                />
            ))}
        </div>
    )
}

