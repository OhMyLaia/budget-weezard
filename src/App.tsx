import { useState } from "react";
import { UserBudgetType } from "./types/types.tsx";
import { UserBudgetContext } from "./context/UserBudgetContext.tsx";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from "./layouts/Navbar-component.tsx";
import { AppRoutes } from "./routes/Router.tsx";

function App() {
  
  const [userBudgetListInitial, setUserBudgetListInitial] = useState<UserBudgetType[]>([]);
  console.log(`Context in App.tsx -> ${JSON.stringify(userBudgetListInitial)}`)
  return (
    <div className="bg-slate-50">
      <UserBudgetContext.Provider value={[userBudgetListInitial, setUserBudgetListInitial]}>
      <BrowserRouter>
      <Navbar />
      <AppRoutes />
      </BrowserRouter>
      </UserBudgetContext.Provider>
    </div>
  )
}

export default App;
