import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

const RouteS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact  path="/" Component={Home} />
        <Route path="/details/:id"  Component={Details} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteS;