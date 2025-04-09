import { BudgetContainer } from "../components/budgetContainer/BudgetContainer";
import { Header } from "../layouts/Header-component";

export function BudgetView() {
    return (
        <div className="bg-slate-50"
        >
            <Header />
            <BudgetContainer />
        </div>
    )
}

