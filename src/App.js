import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import RestaurantDetails from "./Components/RestaurantDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/restaurantdetails/:id"
          element={<RestaurantDetails />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
