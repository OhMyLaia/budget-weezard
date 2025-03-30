import dataCard from "../../services/Data-card-service.json";
import { useState } from "react";
import { idGenerator } from "../../utils/idGenerator";
import { QuantitySelector } from "../quantitySelector/QuantitySelector"


export function CardBudget() {

    // esta activo o no
    const [isActive, setIsActive] = useState(false);
    const [quantity, setQuantity] = useState(0);

    // la card actual, hace falta ? -->
    // const [cardService, setCardService] = useState(0)
    // const currentService = dataCard[cardService];

    const handleClickOnButton = () => {
        setIsActive(prevState => !prevState)
    }

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(0, prevQuantity - 1))
    }


    const autoID = idGenerator();

    return (
        <div>
            {dataCard.map((service, index) => (
                <div key={index}
                id={autoID}
                onClick={handleClickOnButton}
                className={`w-1/2 ${service.custom ? "h-40" : "h-20"} bg-purple-100 rounded-lg p-4 flex flex-row gap-3 hover:bg-purple-200 focus:outline-2  focus:outline-violet-500`}>
                <div className="flex-col mr-20 justify-items-start">
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <div className="w-2/3 flex items-center align-middle justify-end gap-10">
                    <h2 className="text-lg font-bold">{service.price}</h2>
                    <div className="flex items-center align-middle gap-2">
                        <input className="dataCardInput" type="checkbox" name="addItemChx" />
                        <label className="text-xs text-gray-600">add</label>
                    </div>
                </div>
                { service.custom === true &&
                isActive &&
                <QuantitySelector
                quantity={quantity}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                /> }
            </div>
            ))}
        </div>
    )
}


//         "title": "Seo",
//         "description": "Full responsive website seo-friendly",
//         "price": "300€",
//         "custom": false