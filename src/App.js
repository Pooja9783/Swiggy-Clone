import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import RestaurantDetails from "./Components/RestaurantDetails";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantdetails/:id" element={<RestaurantDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
