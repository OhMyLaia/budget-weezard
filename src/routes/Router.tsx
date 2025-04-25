import { Routes, Route } from "react-router-dom";
import { HomeView } from "../views/HomeView.tsx";
import { BudgetView } from "../views/BudgetView.tsx"
import { BudgetFinderView } from "../views/BudgetFinderView.tsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/budget-calculator' element={<BudgetView />} />
            <Route path='/my-budgets' element={<BudgetFinderView />} />
            {/* route error -> / y route notfound crear archivos routes.jsx-> * */}
        </Routes>
    );
};
