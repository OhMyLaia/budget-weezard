import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from "./layouts/Navbar-component.tsx";
import { AppRoutes } from "./routes/Router.tsx";
// import "./tailwindcss/tailwind.css";



function App() {

  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;

//npm install react-router-dom
//npm install tailwind
