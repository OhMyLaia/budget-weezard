import { useState } from "react";
import { UserBudgetType } from "./types/types.tsx";
import { UserBudgetContext } from "./context/UserBudgetContext.tsx";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from "./layouts/Navbar-component.tsx";
import { AppRoutes } from "./routes/Router.tsx";
// import "./tailwindcss/tailwind.css";


function App() {
  
  // type UserBudgetContextType = [UserBudgetType[], Dispatch<SetStateAction<UserBudgetType[]>>];
  const [userBudgetListInitial, setUserBudgetListInitial] = useState<UserBudgetType[]>([]);

  return (
    <div className="bg-slate-50">
      <UserBudgetContext.Provider value={[userBudgetListInitial, setUserBudgetListInitial]}>
      <Navbar />
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
      </UserBudgetContext.Provider>
    </div>
  )
}

export default App;

//npm install react-router-dom
//npm install tailwind
