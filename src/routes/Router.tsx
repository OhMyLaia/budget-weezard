import { Routes, Route } from "react-router-dom";
import { HomeView } from "../views/HomeView.tsx";
import { BudgetView } from "../views/BudgetView.tsx"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/budget' element={<BudgetView />} />
            {/* route error -> / y route notfound crear archivos routes.jsx-> * */}
        </Routes>
    );
};
