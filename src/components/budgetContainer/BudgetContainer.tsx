import ogDataCard from "../../services/Data-card-service.json";
import { CardBudget } from "../cards/CardBudget";
import { CardData } from "../../types/CardData";

// const selectedCards: object[] = [];

export function BudgetContainer() {

    const dataCard: CardData[] = [...ogDataCard];

    // listening dataCard for changes
    // const [currentDataCard, setCurrentDataCard] = useState(dataCard);

    
    // listening if selectedCards has changes (to calculate total €€€)
    // const [selectedItems, setSelectedItems] = useState<Array<object>>(selectedCards);

    return (
        <div className="w-full min-h-screen bg-slate-50">
            <div className="w-full flex flex-col items-center">

                {dataCard.map((item, index) => (
                    <CardBudget
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        custom={item.custom}
                    />
                ))}
            </div>
        </div>
    )
}



