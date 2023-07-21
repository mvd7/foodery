import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import OrdersPage from "./Pages/OrdersPage";
import AdminPage from "./Pages/AdminPage";
import UserList from "./Pages/UserList";
import OrdersList from "./Pages/OrdersList";
import FoodList from "./Pages/FoodList";
import AddFood from "./Pages/AddFood";
import EditFood from "./Pages/EditFood";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/admin" element={<AdminPage />} />

          {/* ADMIN PANEL ROUTES */}
          <Route path="/admin/userslist" element={<UserList />} />
          <Route path="/admin/orderslist" element={<OrdersList />} />
          <Route path="/admin/foodlist" element={<FoodList />} />
          <Route path="/admin/addfood" element={<AddFood />} />
          <Route path="/admin/editfood/:foodid" element={<EditFood />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
