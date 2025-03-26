import './App.css';
import { Navbar } from "./layouts/Navbar-component.tsx";
import { AppRoutes } from "./routes/Router.tsx";
import "tailwindcss/tailwind.css";



function App() {

  return (
    <div>
      <Navbar />
      <AppRoutes />

    </div>
  )
}

export default App;
