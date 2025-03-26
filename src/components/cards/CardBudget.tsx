// import dataCard from "../../services/Data-card-service.json";
import { idGenerator } from "../../utils/idGenerator";
import dataCustomQuantity from "../../services/Data-card-service.json";
import { QuantityButton } from "../ui/QuantityButton";

interface CardbudgetProps {
    dataCard: {
        title: string;
        description: string;
        price: number;
        custom?: boolean;
    }
}

export function CardBudget({ dataCard }: CardbudgetProps) {
    return (
        <button className={`w-1/2 ${dataCard.custom ? "h-40" : "h-20"} bg-purple-100 rounded-lg p-4 flex flex-row gap-3 hover:bg-purple-200 focus:outline-2  focus:outline-violet-500`}>
            <div className="flex-col mr-20 justify-items-start">
                <h3 className="text-lg font-bold">{dataCard.title}</h3>
                <p className="text-sm text-gray-600">{dataCard.description}</p>
            </div>
            <div className="w-2/3 flex items-center align-middle justify-end gap-10">
                <h2 className="text-lg font-bold">{dataCard.price}</h2>
                <div className="flex items-center align-middle gap-2">
                    <input className="dataCardInput" type="checkbox" name="addItemChx" />
                    <label className="text-xs text-gray-600">add</label>
                </div>
            </div>
        </button>
    )
}


//         "title": "Seo",
//         "description": "Full responsive website seo-friendly",
//         "price": "300€",
//         "custom": false